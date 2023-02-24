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
                    <Image src={`fuel-oil.svg`} width={72} height={72} className={FuelQuoteStyle.logo} ></Image>
                    <h1 className={FuelQuoteStyle.header}>Fuel Quote</h1>
                </div>
                <div className={FuelQuoteStyle.inputContainer}>
                    <label for="gallons-requested" className={FuelQuoteStyle.label}>Gallons:</label>
                    <input className={FuelQuoteStyle.smallInputBox} placeholder={"Gallons"} name="gallons-requested"/>
                </div>

                <div className={FuelQuoteStyle.inputContainer}>
                    <label for="delivery-address" className={FuelQuoteStyle.label}>Address 1:</label>
                    <input className={FuelQuoteStyle.addressInputBox} placeholder={"Delivery Address"} name="delivery-address"/>
                </div>
            
                <div className={FuelQuoteStyle.inputContainer}>
                    <label for="delivery-address" className={FuelQuoteStyle.label}>Address 2: {`(Optional)`}</label>
                    <input className={FuelQuoteStyle.addressInputBox} placeholder={"Delivery Address"} name="delivery-address"/>
                </div>

                <div className={FuelQuoteStyle.inputContainer}>
                    <label for="delivery-date" className={FuelQuoteStyle.label}>Delivery Date:</label>
                    <input className={FuelQuoteStyle.deliveryInputBox} placeholder={"Delivery Date"} name="delivery-date"/>
                </div>
                <div className={FuelQuoteStyle.splitContainer}>
                    <div className={FuelQuoteStyle.inputContainer}>
                        <label for="zip-code" className={FuelQuoteStyle.label}>Zip Code:</label>
                        <input className={FuelQuoteStyle.deliveryInputBox} placeholder={"Zip Code"} name="zip-cpde"/>
                    </div>
                    <div className={FuelQuoteStyle.inputContainer}>
                        <label for="delivery-date" className={FuelQuoteStyle.label}>Delivery Date:</label>
                        <input className={FuelQuoteStyle.deliveryInputBox} placeholder={"Delivery Date"} name="delivery-date"/>
                    </div>
                </div>
            </form>  
        </div>
    );
}

export default FuelQuoteForm;