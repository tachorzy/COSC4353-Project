import registerUser from '../../pages/api/registerUser.js';
import dbConnect from '../../__database/dbConnect.js'
import { createMocks } from 'node-mocks-http';

describe('registerUser API endpoint', () => {
    it('Should register a new user with the correct login credentials', async () => {
        const { request, response } = createMocks({
            method: 'POST',
            body: {
                email: 'test@gmail.com',
                password: 'testpassword'
            }
        });
        
        Client.findOne.mockResolvedValue(null)
        await registerUser(request, response);

        expect(response.statusCode).toBe(200);
        expect(response._getData().email).toEqual('test@gmail.com');
        expect(response._getData().password).not.toEqual('testpassword');
        expect(response._getData().profileSet).toBe(true);
        // expect(response._getData().personalDetails).toEqual([]);
    });
});