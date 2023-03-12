import Register from '../../pages/Register.jsx'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

//tests for Register Page
describe('Register component', () => {
    it('All components should render properly', () =>{
        render(<Register/>);
    })

    it('Submits the form and stores values for username, email and password', () => {
        render(<Register/>);
        const userNameInput = screen.getByPlaceholderText("Name");
        const emailInput = screen.getByPlaceholderText("Email address");
        const passwordInput = screen.getByPlaceholderText("Password");

        fireEvent.change(userNameInput, { target: { value: "Lorem Ipsum" }});
        fireEvent.change(emailInput, { target: { value: "testemail@gmail.com" }});
        fireEvent.change(passwordInput, { target: { value: "testpassword"}});

        expect(userNameInpt).toHaveValue("Lorem Ipsum");
        expect(emailInput).toHaveValue("testemail@gmail.com");
        expect(passwordInput).toHaveValue("testpassword")
    })

    it('Disable the submit button if either field is left empty', () => {
        render(<Register/>);
        const submitButton = screen.getByRole('button', { name: "Sign in"});
        
        expect(submitButton).toBeDisabled();

        const userNameInput = screen.getByPlaceholderText("Name");
        const emailInput = screen.getByPlaceholderText("Email address");
        const passwordInput = screen.getByPlaceholderText("Password");

        fireEvent.change(userNameInput, { target: { value: "Lorem Ipsum" }});
        fireEvent.change(emailInput, { target: { value: "testemail@gmail.com" }});
        fireEvent.change(passwordInput, { target: { value: "testpassword"}});
        fireEvent.click(submitButton);

        expect(userNameInpt).toHaveValue("Lorem Ipsum");
        expect(emailInput).toHaveValue("testemail@gamil.com");
        expect(passwordInput).toHaveValue("testpassword")
    })

    //Unsure if we'd like the usernames to have spaces or not.
    it('Input for email and password should not contain any invalid characters e.g. whitespace', () => {
        render(<Register/>);

        const userNameInput = screen.getByPlaceholderText("Name");
        const emailInput = screen.getByPlaceholderText("Email address");
        const passwordInput = screen.getByPlaceholderText("Password");
        const submitButton = screen.getByRole('button', { name: "Sign in"});

        // fireEvent.change(userNameInput, { target: { value: "Lorem Ipsum" }});
        fireEvent.change(emailInput, { target: { value: "test email @gmail.com" }});
        fireEvent.change(passwordInput, { target: { value: "test password"}});
        fireEvent.click(submitButton);

        expect(emailInput).toBe("testemail@gamil.com");
        expect(passwordInput).toBe("testpassword");
    })
    
    it('Must validate and confirm that the user does not already exist under the same credentials', () => {
        const users = new Map([
            ["test@gmail.com", "test"], 
            ["tachorzyad@gmail.com", "fakepassword"], 
            ["existinguser@yahoo.com", "existingpassword"], 
            ["jest@gmail.com", "totallyArealPassword444"], 
            ["gabenewell@valvesoftware.com", "test"], 
            ["YetAnotherFakeUser@gmail.com", "testtestest"]
        ])

        const userEmail = "existinguser@gmail.com";
        const sendMockMessage = jest.fn()  

        const userExists = users.has(userEmail)
        
        if(userExists)
            sendMessageMock("An account already exists under this email.")

        expect(sendMockMessage).toHaveBeenCalledWith("An account already exists under this email.");
        // expect(routerPushMock).toHaveBeenCalledWith("../../pages/FuelQuote")
    })

    it('Must reroute to FuelQuote page if given a valid email and password', () => {
        const users = new Map([
            ["test@gmail.com", "test"], 
            ["tachorzyad@gmail.com", "fakepassword"], 
            ["randomuser@yahoo.com", "fakepassword2"], 
            ["jest@gmail.com", "totallyArealPassword444"], 
            ["gabenewell@valvesoftware.com", "test"], 
            ["YetAnotherFakeUser@gmail.com", "testtestest"]
        ])

        //valid email and password that's found in map
        const userEmail = "newuser@gmail.com";

        const sendMockMessage = jest.fn()  
        const routerPushMock = jest.fn()

        const userExists = users.has(userEmail);
        
        if(!userExists)
            routerPushMock('../../pages/FuelQuote')

        // expect(sendMockMessage).toHaveBeenCalledWith("Invalid email or password.");
        expect(routerPushMock).toHaveBeenCalledWith("../../pages/FuelQuote")
    })
})

