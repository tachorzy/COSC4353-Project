//import { User } from '../../utils/Users.js'
import dbConnect from '../../__database/dbConnect.js'
import Client from '../../__models/client.js'
import bcrypt from 'bcryptjs';

export default async function registerUser(req, res){  
    
    await dbConnect().catch(err => console.log(err));

    const { email, password } = req.body;

    const result = await Client.findOne({
        email: email
    })

    if(result){
        res.status(500).json('User already exists under this email.')
    }
    
    const salt = bcrypt.genSaltSync(10);
    const encryptedPassword = bcrypt.hashSync(password, salt);

    const newUser = await Client.create({
        email: email,
        password: encryptedPassword,
        profileSet: true,
        personalDetails: []
    })

    if(req.method === 'GET') {
        res.status(200).json(newUser)
    }
}