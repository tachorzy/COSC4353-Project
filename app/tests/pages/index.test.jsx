import Head from 'next/head'
import Image from 'next/image'
import { Inter, Over_the_Rainbow } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Home from '../../pages/index.jsx'
import { render, screen } from '@testing-library/react'
// import "@testing-library/jest-dom"

//tests for Landing Page
describe('Home', () => {
    it('All components should render appropriately', () =>{
        render(<Home/>)

        // const header = screen.getByRole('heading')
        // const headerText = "Calculate your Fuel Quotes"
        // expect(header).toHaveTextContent('')
    })
})



it('Input fields should not be left empty', () =>{
    
})

it('The entered user information should exist in our database', () => {

})

