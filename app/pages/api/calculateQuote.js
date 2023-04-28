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
        let totalPrice = 0 //making sure it's initalized to 0.
        // Some checks to change the first 3 variables go below here
        
        // Actual calculation
        //Move this to a function that can get called when we click the button - Tariq
        const pricePerGallon = 1.5
        // totPrice = (fuelMultiplier + PPG) * gallonsRequested 
        let suggestedPrice = pricePerGallon + fuelMultiplier

        const { deliveryDate, gallonsRequested } = req.query;

        //finding a user under the currently logged in email
        const result = await Client.findOne({
            email: session.user.email
        })

        if(user.personalDetails[0].state === "TX" || user.personalDetails[0].state.toLowerCase() === "texas")
            locationFactor = 0.2;

        if(!result) //if a client has no history they aren't charged.
            rateHistory = 0;

        if(gallonsRequested > 1000)
            requestFactor = 0.2;

        const fuelMultiplier = locationFactor - rateHistory + requestFactor + companyProfitFactor;

        pricePerGallon += fuelMultiplier;
        
        totalPrice = pricePerGallon * gallonsRequested

        res.status(200).json({pricePerGallon: pricePerGallon, totalAmountDue: totalAmountDue})
    }
    else if(req.method === "POST"){
        const { deliveryDate, gallonsRequested, pricePerGallon, totalPrice } = req.body;

        const user = await Client.findOne({
            email: session.user.email
        })
        
        const userHistory = await History.findOne({
            email: session.user.email
        })

            
        const newQuote = { 
            deliveryDate: String,
            city: String,
            address1: String,
            address2: String,
            state: String,
            zipCode: String,
            gallonsRequested: gallonsRequested,
            pricePerGallon: pricePerGallon,
            totalAmount: totalPrice
        }

        await dbConnect().catch(err => console.log(err));   

        const emailSearchFilter = {email: email}

        if(!userHistory)
            await History.create({
                email: email,
                //add the quote history array with the new quote data that is turned into JSON
                quoteHistory: newQuoteData
            })
        else
            await History.findOneAndUpdate(emailSearchFilter, {$push: {quoteHistory: newQuote} })
        
        res.status(200).json({ message: "New quote updated in client history" });
    }
    else{ 
        res.status(405).json({message: "Method Not Allowed"})
    }
}