import Login from '../../pages/Login.jsx'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

//tests for Login Page
describe('Login component', () => {
    it('All components should render properly', () =>{
        render(<Login/>);
    })

    it('Submits the form with email and password', () => {
        render(<Login/>);
        const emailInput = screen.getByPlaceholderText("Email address");
        const passwordInput = screen.getByPlaceholderText("Password");

        fireEvent.change(emailInput, { target: { value: "testemail@gmail.com" }});
        fireEvent.change(passwordInput, { target: { value: "testpassword"}});

        expect(emailInput).toHaveValue("testemail@gmail.com");
        expect(passwordInput).toHaveValue("testpassword")
    })

    it('Disable the submit button if either field is left empty', () => {
        render(<Login/>);

        const submitButton = screen.getByRole('button', { name: "Sign in"});
        
        expect(submitButton).toBeDisabled();

        const emailInput = screen.getByPlaceholderText("Email address");
        const passwordInput = screen.getByPlaceholderText("Password");

        fireEvent.change(emailInput, { target: { value: "testemail@gmail.com" }});
        fireEvent.change(passwordInput, { target: { value: "testpassword"}});
        fireEvent.click(submitButton);

        expect(emailInput).toHaveValue("testemail@gamil.com");
        expect(passwordInput).toHaveValue("testpassword")
        
    })
})



it('The entered user information should exist in our database', () => {

})

