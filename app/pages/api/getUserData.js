import { User } from '../../utils/Users.js'

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
    const tempUserBase = [
        {
            name: 'John Doe',
            state: 'CA',
            zip: '90210',
            street: '123 Main St',
            city: 'Beverly Hills',
            email: 'john.doe@example.com',
            username: 'johndoe',
            password: 'p@ssw0rd'
        },
        {
            name: 'Jane Smith',
            state: 'NY',
            zip: '10001',
            street: '456 Elm St',
            city: 'New York',
            email: 'jane.smith@example.com',
            username: 'janesmith',
            password: 's3cr3t'
        },
        {
            name: 'Bob Johnson',
            state: 'TX',
            zip: '75001',
            street: '789 Oak St',
            city: 'Dallas',
            email: 'bob.johnson@example.com',
            username: 'bobjohnson',
            password: 'password123'
        }
    ]
    if(req.method === 'GET'){
        res.status(200).json(tempUserBase)
    }
}