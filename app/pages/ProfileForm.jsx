import Head from 'next/head'
import Image from 'next/image'
import FuelQuoteForm from '../components/FuelQuoteForm.jsx'
import CalculationsBox from '../components/CalculationsBox.jsx'
import { Inter } from '@next/font/google'
import { Combo, Roboto, Rubik } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import localFont from '@next/font/local'
import FuelQuoteStyle from '../styles/FuelQuoteStyle.module.css'
import FuelQuoteHistory from '../components/FuelQuoteHistory.jsx'

const inter = Inter({ subsets: ['latin'] })

const roboto = Roboto({ 
  subsets: ['latin'], 
  weight: '400' 
})

const satoshi = localFont({
  src: '../fonts/Satoshi-Regular.otf',
  weight: '200'
})

export default function ProfileForm() {
  return (
    <>
      <Head>
        <title>Quotr</title>
        <meta name="description" content="Generated by create next app"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main className={styles.main}>
        <div className={satoshi.className}>
          <div>
            <div className={roboto.className}>
              <form className={FuelQuoteStyle.container}>
                  <div className={FuelQuoteStyle.inputContainer}>
                      <input className={FuelQuoteStyle.standardInputBox} placeholder={"First Name"} name="first-name"/>
                  </div>  
                  <div className={FuelQuoteStyle.inputContainer}>
                      <input className={FuelQuoteStyle.standardInputBox} placeholder={"Last Name"} name="last-name"/>
                  </div>  
                  <div className={FuelQuoteStyle.inputContainer}>
                      <input className={FuelQuoteStyle.standardInputBox} placeholder={"E-mail address"} name="email"/>
                  </div>  
                  <div className={FuelQuoteStyle.inputContainer}>
                      <input className={FuelQuoteStyle.standardInputBox} placeholder={"Address 1"} name="delivery-address"/>
                  </div>
              
                  <div className={FuelQuoteStyle.inputContainer}>
                      <input className={FuelQuoteStyle.standardInputBox} placeholder={"Address 2 (Optional)"} name="delivery-address2"/>
                  </div>
                  
                  <div className={FuelQuoteStyle.splitContainer}>
                          <input className={FuelQuoteStyle.smallInputBox} placeholder={"Zip Code"} name="zip-cpde"/>
                          <input className={FuelQuoteStyle.smallInputBox} placeholder={"State"} name="state"/>
                  </div>
                  {/* <div className={FuelQuoteStyle.inputContainer}>
                      <div className={FuelQuoteStyle.logoInputContainer}>
                          <input className={FuelQuoteStyle.standardInputBox} placeholder={"Delivery Date"} name="delivery-date"/>
                          <Image src='/calendar.svg' width={28} height={28} className={FuelQuoteStyle.calendarLogo}></Image>
                      </div>

                  
                  </div>
                  <div className={FuelQuoteStyle.splitContainer}>
                      <div className={FuelQuoteStyle.logoInputContainer}>
                          <input className={FuelQuoteStyle.standardInputBox} placeholder={"Gallons"} name="gallons-requested"/>
                          <Image src='/gallon.svg' width={28} height={28} className={FuelQuoteStyle.gallonLogo} alt="gallon"></Image>
                      </div>
                  </div>
                  <buttton className={FuelQuoteStyle.calculateButton} name="calculate">{"Calculate Your Fuel Quote!"}</buttton> */}
              </form>  
            </div>
          </div>

        </div>
      </main>
    </>
  )
}
