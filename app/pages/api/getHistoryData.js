import { pricePerGallon } from '../FuelQuote.jsx' //change this to the pricing module later on
import History from '../__models/history'
import dbConnect from '../__database/dbConnect.js'

export default async function getHistoryData(req, res){

    dbConnect().catch(err => console.log(err));

    const result = await History.findOne({
        email: 'temporary@email.com'
    })

    res.status(200).json(result.quoteHistory)
}