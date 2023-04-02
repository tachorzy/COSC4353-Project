import { dbConnect } from '../../__database/dbConnect.js'
import { createMocks } from 'node-mocks-http'
import mongoose from 'mongoose'

jest.mock('mongoose');

describe('dbConnect', () => {
    beforeAll(async () => {
        jest.clearAllMocks()
    })

    it('Should resolve upon establishing a connection to the database.', async () => {
        const mockConnection = { readyState: 1 }
        mongoose.connect.mockResolvedValue({ connection: mockConnection })
        await expect(dbConnect()).resolves.toBe(true)
    });

    it('Should reject upon failing a connection to the database.', async () => {
        const mockConnectionError = new Error('Connection Failed');
        mongoose.connect.mockRejectedValue(mockConnectionError);
        await expect(dbConnect()).rejects.toThrow(mockConnectionError);
    })
})