const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const clientSchema = new Schema({
    id: Number,
    email: String,
    password: String,
    profileSet: Boolean,
    personalDetails: [{
        FirstName: String,
        LastName: String,
        address1: String,
        address2: String,
        state: String,
        city: String,
        zip: String,
    }]
})



let Client;
try {
  Client = mongoose.model('Client');
} catch (e) {
  Client = mongoose.model('Client', clientSchema);
}

module.exports = Client;
//export default Client;
