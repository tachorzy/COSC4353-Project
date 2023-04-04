import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useState, useEffect } from 'react'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import FuelQuoteHistory from '../components/FuelQuoteHistory'
import localFont from '@next/font/local'
import FuelQuoteForm from '@/components/FuelQuoteForm'
import FuelQuoteStyle from '../styles/FuelQuoteStyle.module.css'

const inter = Inter({ subsets: ['latin'] })

const satoshi = localFont({
  src: '../fonts/Satoshi-Regular.otf',
  weight: '200'
})

const satoshiBold = localFont({
  src: '../fonts/Satoshi-Bold.otf',
  weight: '200'
})

export default function Login() {
    // const placeholderName = "Raj Singh"
    // const placeholderNumber = "+1 (713)-789-4353"
    // const placeholderAddress = "3551 Cullen Blvd"
    // const placeholderAddress2 = ""
    // const placeholderCity = "Houston"
    // const placeholderState = "Texas"
    // const placeholderZip = "77004"
    const [client, setClientData] = useState()
    useEffect(() => {
        fetch('https://localhost:3000/api/getClientData', {
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            setClientData(data)
        })
    }, [])

    return (
      <div className="bg-cambridgeBlue h-screen content-center flex flex-col text-stone-200">
        <div className="ml-24 mt-32">
            <div className={satoshiBold.className}>
                <h1 className="text-7xl mb-6 font-extrabold">Profile</h1>
            </div>
            <div className="w-1/2 text-stone-600">
                <div className={FuelQuoteStyle.container}>
                    <div className="flex flex-col">
                        <label className="text-lg mb-1.5 font-semibold">Full Name: </label>
                        <h2 className="text-xl">{`${client.FirstName} ${client.LastName}`}</h2>
                    </div>
                    <div>
                        <label className="text-lg mb-1.5 font-semibold">Address 1: </label>
                        <h2 className="text-xl">{client.address1}</h2>
                    <div>
                        <label className="text-lg mb-1.5 font-semibold">Address 2: </label>
                        <h2 className="text-xl">{client.address2 === "" ? "N/A" : client.address2}</h2>
                    </div>
                    <div>
                        <label className="text-lg mb-1.5 font-semibold">City: </label>
                        <h2 className="text-xl">{client.city}</h2>
                    </div>
                    <div>
                        <label className="text-lg mb-1.5 font-semibold">State: </label>
                        <h2 className="text-xl">{client.state}</h2>
                    </div>
                    <div>
                        <label className="text-lg mb-1.5 font-semibold">Zipcode: </label>
                        <h2 className="text-xl">{client.zipCode}</h2>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
    )
  }
  Login.getInitialProps = async (ctx) => {
    const res = await axios.get('/api/user');
    const user = res.data;
    return { user };
  };