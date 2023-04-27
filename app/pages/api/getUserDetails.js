import dbConnect from '../../__database/dbConnect.js'
import Client from '../../__models/client.js'
import { getSession } from "next-auth/react";

export default async function getUserDetails(req, res){
    const session = await getSession({ req });

    if(!session){
        return res.status(401).json({message: "Unauthorized"})
    }

    dbConnect().catch(err => console.error(err));
    
    const result = await Client.findOne({
        email: session.user.email,
    })

    if (req.method === "GET"){
        res.status(200).json(result.personalDetails[0])

        console.log(result.personalDetails)
    }
    else {
        res.status(405).json({message: "Method Not Allowed"})
    }  
}