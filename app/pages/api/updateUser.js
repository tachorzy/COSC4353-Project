
import Client from '@/__models/client.js'
import dbConnect from '@/__database/dbConnect'

export default async function updateUser(req, res){  
    
    dbConnect().catch(err => console.log(err));

    const { firstName, lastName, address1, address2, email, zipcode, city, state } = req.body
    
    const emailSearchFilter = {email: email}
    const updatedDetails = {personalDetails: [{ firstName, lastName, address1, address2, state, city, zip: zipcode }], profileSet: true}

    const result = await Client.findOneAndUpdate(emailSearchFilter, updatedDetails)

    if(req.method === 'GET') {
        res.status(200).json(result)
    }

    if(req.method === 'POST') {
        console.log('Post request received')
        result.save()
        res.status(200).json(result)
    }
}

