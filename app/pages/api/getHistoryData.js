import { pricePerGallon } from '../FuelQuote.jsx' //change this to the pricing module later on

export default function getHistoryData(req, res){
    //hardcoded array of data before we implement our database    
    const tempData = [
        {
            date: '03-23-2023', address1: '123 Main St', address2: 'N/A', city: 'Houston', state: 'TX', zipCode: '77001', gallonsRequested: '80', totalAmount: 80*pricePerGallon
        },
        {
            date: '02-23-2023', address1: '456 Oak Ave', address2: '2222 Richmond Ave', city: 'Dallas', state: 'TX', zipCode: '75201', gallonsRequested: '500', totalAmount: 500 * pricePerGallon
        },
        {
            date: '01-23-2023', address1: '789 Pine Blvd', address2: 'N/A', city: 'San Antonio', state: 'TX', zipCode: '78201', gallonsRequest: '450', totalAmount: 450 * pricePerGallon
        },
        {
            date: '02-20-2023', address1: '789 Pine Blvd', address2: 'N/A', city: 'San Antonio', state: 'TX', zipCode: '78201', gallonsRequest: '2450', totalAmount: 2450 * pricePerGallon
        },
        {
            date: '01-05-2023', address1: '789 Pine Blvd', address2: 'N/A', city: 'San Antonio', state: 'TX', zipCode: '78201', gallonsRequest: '1450', totalAmount: 1450 * pricePerGallon
        },
        {
            date: '01-01-2023', address1: '789 Pine Blvd', address2: 'N/A', city: 'San Antonio', state: 'TX', zipCode: '78201', gallonsRequest: '900', totalAmount: 900 * pricePerGallon
        }
    ]

    tempData.sort((dataPoint1, dataPoint2) => (dataPoint1.date < dataPoint2.date) ? 1: -1)

    res.status(200).json(tempData)

}