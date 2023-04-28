import updateUser from "../../pages/api/updateUser";
import dbConnect from '../../__database/dbConnect.js'
import Client from '../../__models/client.js'
import { createMocks } from 'node-mocks-http';
jest.mock("../../__database/dbConnect.js");
jest.mock("../../__models/client.js");

describe("updateUser", () => {
   it("should update user", async () => {
        const { req, res } = createMocks({
            method: "GET",
            body: {
                firstName: "test",
                lastName: "test",
                email: "test@gmail.com",
                address1: "test",
                address2: "test",
                zipCode: "test",
                city: "test",
                state: "test"
            },
        });

        Client.findOne.mockResolvedValue({
            email: "test123@gmail.com",
            password: "testpassword",
            profileSet: true,
            hasHistory: false,
            personalDetails: [{
                address1: "test",
                address2: "test",
                state: "test",
                city: "test",
                zip: "test"
            }]
        });
        
        dbConnect.mockResolvedValue(true);

        await updateUser(req, res);

        expect(res._getStatusCode()).toBe(200);

   });
});