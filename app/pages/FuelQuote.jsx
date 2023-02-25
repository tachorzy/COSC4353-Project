import Head from 'next/head'
import Image from 'next/image'
import FuelQuoteForm from '../components/FuelQuoteForm.jsx'
import { Inter } from '@next/font/google'
import { Combo, Roboto, Rubik } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import localFont from '@next/font/local'
import FuelQuoteStyle from '../styles/FuelQuoteStyle.module.css'

const inter = Inter({ subsets: ['latin'] })

const roboto = Roboto({ 
  subsets: ['latin'], 
  weight: '400' 
})

const satoshi = localFont({
  src: '../fonts/Satoshi-Regular.otf',
  weight: '200'
})

export default function FuelQuote() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main className={styles.main}>
        <div className={satoshi.className}>
          <FuelQuoteForm></FuelQuoteForm>
        </div>
      </main>
    </>
  )
}
