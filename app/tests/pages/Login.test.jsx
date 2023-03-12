import Head from 'next/head'
import Image from 'next/image'
import { Inter, Over_the_Rainbow } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Login from '../../pages/Login.jsx'
import { render, screen } from '@testing-library/react'
// import "@testing-library/jest-dom"

//tests for Landing Page
describe('Login component', () => {
    it('All components should render appropriately', () =>{
        render(<Login/>);
        const emailInput = screen.getByPlaceholderText;('Email address');
        const passwordInput = screen.getByPlaceholderText;
        const submitButton = screen.getByRole('button', { name: "Sign in"});

        fireEvent.change(emailInput, { target: { value: "testemail@gmail.com" }});
        fireEvent.change(passwordInput, { target: { value: "testpassword"}});

        expect(emailInput).toHaveValue("testemail@gmail.com");
        expect(passwordInput).toHaveValue("testpassword")
    })
    // it('Input fields should not be left empty', () =>{
    
    // })
})



it('The entered user information should exist in our database', () => {

})

