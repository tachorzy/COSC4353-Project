import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import FuelQuoteHistory from '../../components/FuelQuoteHistory'

describe('History', () => {
    it('All components should render appropriately', () =>{
        render(<History/>)
    })
})

it('All inserted data from Profile Form must appear on the history form', async () => {
    fetch.mockResponseOnce(JSON.stringify({
        date: '12-12-2023',        
        address1: '2222 Richmand Ave',
        address_2: 'N/A',
        city: 'Houston',
        state: 'TX',
        zipCode: '77098'
    }))
    render(<History/>)
    await waitFor(() => screen.getByText('Fuel Quote History'))
})