//import { User } from '../../utils/Users.js'
import dbConnect from '../../__database/dbConnect.js'
import History from '../../__models/history.js'
import Client from '../../__models/client.js'
import { SessionContext, getSession } from "next-auth/react";

export default async function registerUser(req, res) {
    if (req.method === 'GET') {
        await dbConnect().catch(err => console.log(err));
        const session = await getSession({ req });

        let locationFactor = 0.04
        let rateHistory = .01
        let requestFactor = .03
        let companyProfitFactor = .1
        let totalPrice = 0

        const basePricePerGallon = 1.5 
        let pricePerGallon = basePricePerGallon

        const { deliveryDate, gallonsRequested } = req.query;
        console.log(deliveryDate, gallonsRequested)
        //finding a user under the currently logged in email
        const user = await Client.findOne({
            email: session.user.email
        })

        const userHistory = await History.findOne({
            email: session.user.email
        })

        if(user.personalDetails[0].state === "TX" || user.personalDetails[0].state.toLowerCase() === "texas")
            locationFactor = 0.2;

        if(!userHistory) //if a client has no history they aren't charged.
            rateHistory = 0;

        if(gallonsRequested > 1000)
            requestFactor = 0.2;

        const fuelMultiplier = locationFactor - rateHistory + requestFactor + companyProfitFactor;

        pricePerGallon += fuelMultiplier;
        
        totalPrice = pricePerGallon * gallonsRequested
        
        console.log(`PPG: ${basePricePerGallon} suggested price: ${pricePerGallon} total amount: ${totalPrice}`)
        res.status(200).json({ pricePerGallon: basePricePerGallon, suggestedPrice: pricePerGallon, totalAmount: totalPrice})
    }
    else if(req.method === 'POST'){
        
        const { email, deliveryDate, gallonsRequested, pricePerGallon, totalPrice } = req.body;
        const delivery = new Date(deliveryDate);
        const formattedDate = delivery.toLocaleDateString();
        const user = await Client.findOne({
            email: email
        })

        if(!user){
            return res.status(404).json({message: "User could not be found."})
        }
        
        const userHistory = await History.findOne({
            email: email
        })
 
        console.log(`Total Price: ${totalPrice}`)

        const newQuote = { 
            deliveryDate: formattedDate,
            city: user.personalDetails[0].city,
            address1: user.personalDetails[0].address1,
            address2: user.personalDetails[0].address2,
            state: user.personalDetails[0].state,
            zipCode: user.personalDetails[0].zip,
            gallonsRequested: gallonsRequested,
            pricePerGallon: pricePerGallon,
            totalAmount: totalPrice //bug can be because its te wrong type (Schema wants a Number)
        }

        console.log(`New Quote total amount: ${newQuote.totalAmount}`)

        await dbConnect().catch(err => console.error(err));   

        const emailSearchFilter = {email: email}

        if(!userHistory)
            await History.create({
                email: email,
                quoteHistory: newQuote
            })
        else
            await History.findOneAndUpdate(emailSearchFilter, {$push: {quoteHistory: newQuote} })              
            .exec()
                .then((updatedHistory) => {
                res.status(200).json({ message: "Quote history updated" });
                })
                .catch((err) => {
                console.error(err);
                res.status(500).json({ message: "Server error" });
                });
        
        res.status(200).json({ message: "New quote updated in client history" }, { new: true });
    }
    else{ 
        res.status(405).json({message: "Method Not Allowed"})
    }
}