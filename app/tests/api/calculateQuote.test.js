import calculateQuote from "../../pages/api/calculateQuote";
import dbConnect from '../../__database/dbConnect.js'
import Client from '../../__models/client.js'
import History from '../../__models/history.js'
import { createMocks } from 'node-mocks-http';
import { getSession } from 'next-auth/react';

jest.mock('../../__database/dbConnect.js')
jest.mock('../../__models/client.js')
jest.mock('../../__models/history.js')
jest.mock('next-auth/react', () => ({
    getSession: jest.fn(),
}));

describe("Failed GET or POST request", () => {
    it("405 error expected.", async () => {
        const { req, res } = createMocks({
            method: "PUT",
        });

        await calculateQuote(req, res);

        expect(res._getStatusCode()).toBe(405);
        expect(res._getData()).toBe('{"message":"Method Not Allowed"}');
    });
});

describe("GET request for /api/calculateQuote", () => {
    it("Expect the correct values to be returned", async () => {
        const session = {
            user: {
                email: 'test@gmail.com',
            },
        };
        
        const mockHistoryData = {
            // Add some mock quote history data here to test
            email: 'test@gmail.com',
            quoteHistory: [{
                deliveryDate: "2026-28-04",
                address1: "123 test st",
                address2: "test",
                city: "Houston",
                state: "TX",
                zipCode: "12345",
                gallonsRequested: 500,
                pricePerGallon: 1.5,
                totalAmount: 750,
            }],
        };

        const mockUserData = {
            email: 'test@gmail.com',
            firstName: 'John',
            lastName: 'Doe',
            address1: '123 Electric Avenue',
            city: 'Houston',
            state: 'TX',
            zipCode: '12345',
        };

        const { req, res } = createMocks({
            method: "GET",
            query: {
                deliveryDate: "2026-28-04",
                gallonsRequested: 750,
            },
        });

        getSession.mockResolvedValue(session);
        History.findOne.mockResolvedValue(mockHistoryData);
        Client.findOne.mockResolvedValue(mockUserData);
        

        await calculateQuote(req, res);

        expect(res._getStatusCode()).toBe(200);
        expect(res._getJSONData()).toEqual({
            pricePerGallon: 1.695,
            totalAmount: 1.695 * req.query.gallonsRequested,
        });
        expect(History.findOne).toHaveBeenCalledWith({ email: session.user.email });
        expect(Client.findOne).toHaveBeenCalledWith({ email: session.user.email });
    });
});