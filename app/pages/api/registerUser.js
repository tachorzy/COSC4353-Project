import { User } from '../../utils/Users.js'
import Client from '../__models/client.js'

export default async function registerUser(req, res){  
    
    dbConnect().catch(err => console.log(err));

    const { email, password } = req.body

    const result = await Client.findOne({
        email: email
    })

    if(result){
        res.status(500).json('User already exists under this email.')
    }
    
    //add encryption/hashing here before we push the password into the database
    const encryptedPassword = '';

    const newUser = await Client.create({
        email: email,
        password: encryptedPassword,
        profilSet: true
    })

    if(req.method === 'GET') {
        res.status(200).json(newUser)
    }
}