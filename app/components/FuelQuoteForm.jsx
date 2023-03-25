import styles from '../styles/Home.module.css'
import Image from 'next/image'
import localFont from '@next/font/local'
import { Inter } from '@next/font/google'
import { Combo, Roboto, Rubik } from '@next/font/google'
import FuelQuoteStyle from '../styles/FuelQuoteStyle.module.css'

const roboto = Roboto({ 
    subsets: ['latin'], 
    weight: '400' 
})
  

const FuelQuoteForm = () => {
    return(
          <div className={roboto.className}>
            <form className={FuelQuoteStyle.container}>
                <h2 className=" text-stone-700 font-semibold col-span-2 text-3xl text-center">The Current rate is <b>{pricePerGallon}</b></h2>
                <div className={FuelQuoteStyle.inputContainer}>
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
                <buttton className={FuelQuoteStyle.calculateButton} name="calculate">Calculate Your Fuel Quote!</buttton>
            </form>  
          </div>
    );
}

export default FuelQuoteForm;