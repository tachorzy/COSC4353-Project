import Head from 'next/head'
import Image from 'next/image'
import { Inter, Over_the_Rainbow } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import FuelQuote from '../../pages/FuelQuote.jsx'
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
    // render(<FuelQuote/>)
    
    // const firstNameInput = screen.getByPlaceholderText("First Name");
    // const lastNameInput = screen.getByPlaceholderText("Last Name");
    // const emailInput = screen.getByPlaceholderText("E-mail address");
    // const address1Input = screen.getByPlaceholderText("Address 1");
    // const address2Input = screen.getByPlaceholderText("Address 2 (Optional)");
    // const zipInput = screen.getByPlaceholderText("Zip Code");
    // const dateInput = screen.getByPlaceholderText("Delivery Date");
    // const gallonInput = screen.getByPlaceholderText("Gallons");

    // const submitButton = screen.getByRole('button', { name: "calculate"});

    // // fireEvent.change(userNameInput, { target: { value: "Lorem Ipsum" }});
    // fireEvent.change(firstNameInput, { target: { value: "Lorem" }});
    // fireEvent.change(lastNameInput, { target: { value: "Ipsum" }});
    // fireEvent.change(emailInput, { target: { value: "testemail@gmail.com" }});
    // fireEvent.change(address1Input, { target: { value: "1234 Generic lane" }});
    // // fireEvent.change(address2Input, { target: { value: "test email @gmail.com" }});
    // fireEvent.change(zipInput, { target: { value: "77006"}});
    // fireEvent.change(dateInput, { target: { value: "07/04/2023"}});
    // fireEvent.change(gallonInput, { target: { value: "77006"}});
    // fireEvent.click(submitButton);
})

it('The entered user information should exist in our database', () => {

})

