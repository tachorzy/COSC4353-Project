import registerUser from '../../pages/api/registerUser';
import dbConnect from '../../__database/dbConnect.js'
import Client from '../../__models/client.js'
import { createMocks } from 'node-mocks-http';

jest.mock('../../__database/dbConnect.js')
jest.mock('../../__models/client.js')

describe('registerUser API endpoint', () => {
    it('Should register a new user with the correct login credentials', async () => {
        const { req, res } = createMocks({
            method: "POST",
            body: {
                email: "uniqueuser@gmail.com",
                password: "testpassword"
            },
        });
        
        Client.findOne.mockResolvedValue({ 
            email: 'uniqueuser@gmail.com'
        })

        dbConnect.mockResolvedValue(true);
        await registerUser(req, res);

        expect(res._getStatusCode()).toBe(500);
        // expect(response._getJSONData()).toEqual('User already exists under this email.')
    });
});