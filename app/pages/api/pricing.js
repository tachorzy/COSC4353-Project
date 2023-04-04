import FuelQuoteForm from '../components/FuelQuoteForm.jsx'


export default async function getPrice(gallonsRequested){
    var locationFactor = 0.04
    var rateHistory = .01
    var requestFactor = .03
    const CPF = .1
    // Some checks to change the first 3 variables go below here

    // Actual calculation
    const PPG = FuelQuoteForm.pricePerGallon // Is this a valid call?
    const fuelMultiplier = locationFactor - rateHistory + requestFactor + CPF
    const totPrice = (fuelMultiplier + PPG) * gallonsRequested
    return totPrice 
}