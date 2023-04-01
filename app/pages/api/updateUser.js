import { User } from '../../utils/Users.js'
import Client from '../__models/client.js'

export default async function updateUser(req, res){  
    
    dbConnect().catch(err => console.log(err));

    const { firstNaem, lastName, email, address1, address2, zipCode, city, state } = req.body

    const result = await Client.findOne({
        email: email
    })

    result.address1 = address1;
    result.address2 = address2;
    result.state = state;
    result.city = city;
    result.zip = zip;

    if(req.method === 'GET') {
        res.status(200).json(result)
    }
}