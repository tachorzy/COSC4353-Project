import FuelQuote from '../../pages/FuelQuote.jsx'
import FuelQuoteForm from '../../components/FuelQuoteForm.jsx'
import CalculationsBox from '../../components/CalculationsBox.jsx'
import { render, screen } from '@testing-library/react'
// import "@testing-library/jest-dom"

//tests for Landing Page
describe('FuelQuote', () => {
    it('All components should render appropriately', () =>{
        render(<FuelQuote/>)
        // const header = screen.getByRole('heading')
        // const headerText = "Calculate your Fuel Quotes"
        // expect(header).toHaveTextContent('')
    })
})

it('Input fields should not be left empty', () =>{
    render(<FuelQuoteForm/>)

    const submitButton = screen.getByRole('button', { name: "Cakculate Your Fuel Quote!"});
    const dateInput = screen.getByPlaceholderText("Delivery Date");
    const gallonInput = screen.getByPlaceholderText("Gallons");

    fireEvent.change(dateInput, {target: { value: "09/12/2023"}});
    fireEvent.change(gallonInput, {target: { value: "450"}});
    fireEvent.click(submitButton);

    expect(dateInput).toBe("09/12/2023");
    expect(gallonInput).toBe("450");
})

// it('Calculation must follow the formula price * gallons, where price is equal to 2.958', () => {
//     render(<FuelQuoteForm/>)
//     render(<CalculationsBox/>)
//     const submitButton = screen.getByRole('button', { name: "Cakculate Your Fuel Quote!"});
//     const dateInput = screen.getByPlaceholderText("Delivery Date");
//     const gallonInput = screen.getByPlaceholderText("Gallons");

//     fireEvent.change(dateInput, {target: { value: "09/12/2023"}});
//     fireEvent.change(gallonInput, {target: { value: "450"}});
//     fireEvent.click(submitButton);
    
//     const quoteComponent = screen.getByText('Calculated Price ${placeholderPrice}')

//     let fuelQuote = gallonInput * 2.958;
//     expect(fuelQuote).toBe(450 * 2.958)
// })

// it('', () => {
    
// })