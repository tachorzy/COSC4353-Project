import { pricePerGallon } from '../FuelQuote.jsx' //change this to the pricing module later on

export default function getHistoryData(req, res){
    //hardcoded array of data before we implement our database    
    const tempData = [
        {
            date: '03-23-2023', address1: '123 Main St', address2: 'N/A', city: 'Houston', state: 'TX', zipCode: '77001', gallonsRequest: 80, pricePerGalllon: pricePerGallon, totalAmount: 9999
        },
        {
            date: '02-23-2023', address1: '456 Oak Ave', address2: '2222 Richmond Ave', city: 'Dallas', state: 'TX', zipCode: '75201', gallonsRequest: 500, pricePerGalllon: pricePerGallon, totalAmount: 9999
        },
        {
            date: '01-23-2023', address1: '789 Pine Blvd', address2: 'N/A', city: 'San Antonio', state: 'TX', zipCode: '78201', gallonsRequest: 450, pricePerGalllon: pricePerGallon, totalAmount: 9999
        },
        {
            date: '02-20-2023', address1: '789 Pine Blvd', address2: 'N/A', city: 'San Antonio', state: 'TX', zipCode: '78201', gallonsRequest: 2450, pricePerGalllon: pricePerGallon, totalAmount: 50000
        },
        {
            date: '01-05-2023', address1: '789 Pine Blvd', address2: 'N/A', city: 'San Antonio', state: 'TX', zipCode: '78201', gallonsRequest: 1450, pricePerGalllon: pricePerGallon, totalAmount: 42891
        },
        {
            date: '01-01-2023', address1: '789 Pine Blvd', address2: 'N/A', city: 'San Antonio', state: 'TX', zipCode: '78201', gallonsRequest: 900, totalAmount: 2662.2
        }
    ]

    tempData.sort((dataPoint1, dataPoint2) => (dataPoint1.date < dataPoint2.date) ? 1: -1)

    res.status(200).json(tempData)

}