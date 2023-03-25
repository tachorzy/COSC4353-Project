import { User } from '../../utils/Users.js'
import { tempUserBase } from '../../utils/tempUsersDB.js'
export default function getUserData(req, res){
    //hardcoded array of data before we implement our database    
    const tempUserData = new User('user123456', 'exampleuser@gmail.com', 'testestest');
    tempUserData.setStreet('123 Main St')
    tempUserData.setZip('77001')
    tempUserData.setCity('Houston')
    tempUserData.setState('TX')
    tempUserData.setName('John Doe')
    if(req.method === 'GET') {
        res.status(200).json(tempUserData)
    }
}

export default function getUsers(req, res){
    if(req.method === 'GET'){
        res.status(200).json(tempUserBase)
    }
}