import {Schema, model, models} from 'mongoose';

const historySchema = new Schema({
    id: Number,
    email: String,
    quoteHistory: [{
        deliveryDate: String,
        city: String,
        address1: String,
        address2: String,
        state: String,
        zipCode: String,
        gallonsRequested: Number,
        pricePerGallon: Number,
        totalAmount: Number
    }]
    
})

const History = models.History || model('History', historySchema);

export default History;