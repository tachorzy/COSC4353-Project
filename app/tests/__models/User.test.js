//code to fix RefereneError with TextEncoder
const { TextEncoder, TextDecoder } = require('text-encoding');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server');
const User = require('../../__models/User.js')
const bcrypt = require('bcrypt')

let mongodbServer;

beforeAll(async () => {
    mongodbServer = await MongoMemoryServer.create();
    const mongoUri = await mongodbServer.getUri();
    await mongoose.connect(mongoUri);
});

afterAll(async () => {
    await mongoose.disconnect();
    await mongodbServer.stop();
});

describe('User model', () => {
    it('New users should be saved into the database following the schema', async () => {
        const user = new User({ //this is the user model not to be confused with the User class
            name: 'John Doe',
            email: 'john.doe@gmail.com',
            password: 'example password'          
        });

        const savedUser = await user.save();
        
        expect(savedUser._id).toBeDefined();
        expect(savedUser.name).toBe('John Doe');
        expect(savedUser.email).toBe('john.doe@gmail.com');
        expect(savedUser.password).toBeDefined();
    })

    it('Passwords should be encrypted', async () => {
        const password = 'ShouldBeEncrypted'
        const user = new User({
            name: 'John Doe',
            email: 'john.doe@gmail.com',
            password: 'example password'          
        });

        const savedUser = await user.save();

        expect(savedUser.password).toBe();
        const isMatch = await bcrypt.compare(password, user.password);
        expect(isMatch).toNe(true);
    })
})