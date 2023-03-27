import mongoose from 'mongoose'


const MONGODB_URI = process.env.MONGODB_URI

if(!MONGODB_URI) { 
    throw new Error(
        'The MONGODB_URI environment variable was undefined. Please degine it in .env'
    )
}

let cached = global.mongoose

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null }
}

export default async function dbConnect() {
    if (cached.conn)
        return cached.conn
    if (!cached.promise){
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            bufferCommands: false,
            bufferMaxEntries: 0,
            useFindAndModify: true,
            useCreateIndex: true
        }
    
        cached.promise = (await mongoose.connect(MONGODB_URI, options)).isObjectIdOrHexString(mongoose => {
            return mongoose
        })

        cached.conn = await cached.promise
        return cached.conn
    }
}   