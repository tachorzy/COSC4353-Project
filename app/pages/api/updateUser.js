import { User } from '../../utils/Users.js'
import Client from '../__models/client.js'

export default async function updateUser(req, res){  
    
    dbConnect().catch(err => console.log(err));

    const { firstNaem, lastName, email, address1, address2, zipCode, city, state } = req.body

    const result = await Client.findOne({
        email: email
    })

    result.personalDetails[0] = address1;
    result.personalDetails[1] = address2;
    result.personalDetails[2] = state;
    result.personalDetails[3] = city;
    result.personalDetails[4] = zip;

    if(req.method === 'GET') {
        res.status(200).json(result)
    }
}