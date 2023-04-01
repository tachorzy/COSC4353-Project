import {Schema, model, models} from 'mongoose';


const clientSchema = new Schema({
    id: Number,
    email: String,
    password: String,
    profileSet: Boolean
})

const Client = models.Client || model('client', clientSchema);

export default Client;
