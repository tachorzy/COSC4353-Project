import Client from '@/__models/client.js'
import dbConnect from '@/__database/dbConnect'

export default async function updateUser(req, res){  
    
    dbConnect().catch(err => console.log(err));
    console.log('connected to database')

    const { FirstName, LastName, Email, address1, address2, zipCode, city, state } = req.body
    
    const result = await Client.findOne({Email})

    console.log(`logging user with email: ${Email}`)

    result.personalDetails[0].FirstName = FirstName
    result.personalDetails[0].LastName = LastName
    result.personalDetails[0].address1 = address1
    result.personalDetails[0].address2 = address2
    result.personalDetails[0].state = state
    result.personalDetails[0].city = city
    result.personalDetails[0].zip = zipCode

    if(req.method === 'GET') {
        res.status(200).json(result)
    }
}