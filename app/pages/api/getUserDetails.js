import dbConnect from '../../__database/dbConnect.js'
import Client from '../../__models/client.js'

export default async function getUserDetails(req, res){
    if (req.method === "GET"){
        const session = await getsession({ req });

        if(!session){
            return res.status(401).json({message: "Unauthorized"})
        }

        dbConnect.catch(err => console.error(err));
        
        const result = await Client.findOne({
            email: session.user.email,
        })
    
        res.status(200).json(result.personalDetails)

        console.log(result.personalDetails)
    }
    else {
        res.status(405).json({message: "Method Not Allowed"})
    }  
}