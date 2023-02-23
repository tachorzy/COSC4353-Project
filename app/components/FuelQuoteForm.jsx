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
                <div className={FuelQuoteStyle.branding}>
                    <Image src={`fuel-tank.svg`} width={50} height={50} className={FuelQuoteStyle.logo} ></Image>
                    <h1 className={FuelQuoteStyle.header}>Fuel Quote</h1>
                </div>
                <div className={FuelQuoteStyle.inputContainer}>
                    <label for="gallons-requested" className={FuelQuoteStyle.label}>Gallons:</label>
                    <input className={FuelQuoteStyle.inputBox} placeholder={"Gallons"} name="gallons-requested"/>
                </div>

                <div className={FuelQuoteStyle.inputContainer}>
                    <label for="delivery-address" className={FuelQuoteStyle.label}>Address:</label>
                    <input className={FuelQuoteStyle.inputBox} placeholder={"Delivery Address"} name="delivery-address"/>
                </div>

                <div className={FuelQuoteStyle.inputContainer}>
                    <label for="delivery-date" className={FuelQuoteStyle.label}>Delivery Date:</label>
                    <input className={FuelQuoteStyle.inputBox} placeholder={"Delivery Date"} name="delivery-date"/>
                </div>
            </form>  
        </div>
    );
}

export default FuelQuoteForm;