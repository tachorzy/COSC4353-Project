
import Client from "../../__models/client.js";
import dbConnect from "../../__database/dbConnect.js";

export default async function updateUser(req, res){  
    
    dbConnect().catch(err => console.log(err));
    console.log('connected to database')

    const { firstName, lastName, email, address1, address2, zipCode, city, state } = req.body

    const result = await Client.findOne({
        email: email
    })

    console.log(`logging user with email: ${email}`)

    result.personalDetails[0].FirstName = firstName
    result.personalDetails[0].LastName = lastName
    result.personalDetails[0].address1 = address1
    result.personalDetails[0].address2 = address2
    result.personalDetails[0].state = state
    result.personalDetails[0].city = city
    result.personalDetails[0].zip = zipCode

    if(req.method === 'GET') {
        res.status(200).json(result)
    }

    if(req.method === 'POST') {
        result.save()
        res.status(200).json(result)
    }

}