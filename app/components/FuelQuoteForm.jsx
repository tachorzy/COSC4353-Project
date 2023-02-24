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
                <div className={FuelQuoteStyle.inputContainer}>
                    <input className={FuelQuoteStyle.standardInputBox} placeholder={"Full Name"} name="full-name"/>
                </div>  
                <div className={FuelQuoteStyle.inputContainer}>
                    <input className={FuelQuoteStyle.standardInputBox} placeholder={"E-mail address"} name="email"/>
                </div>  
                <div className={FuelQuoteStyle.inputContainer}>
                    <input className={FuelQuoteStyle.standardInputBox} placeholder={"Delivery Address 1"} name="delivery-address"/>
                </div>
            
                <div className={FuelQuoteStyle.inputContainer}>
                    <input className={FuelQuoteStyle.standardInputBox} placeholder={"Delivery Address 2 (Optional)"} name="delivery-address2"/>
                </div>
                
                <div className={FuelQuoteStyle.splitContainer}>
                        <input className={FuelQuoteStyle.smallInputBox} placeholder={"Zip Code"} name="zip-cpde"/>
                        <input className={FuelQuoteStyle.smallInputBox} placeholder={"State"} name="state"/>
                </div>
                <div className={FuelQuoteStyle.inputContainer}>
                    <input className={FuelQuoteStyle.standardInputBox} placeholder={"Delivery Date"} name="delivery-date"/>
                </div>
                <div className={FuelQuoteStyle.splitContainer}>
                    <input className={FuelQuoteStyle.smallInputBox} placeholder={"Gallons"} name="gallons-requested"/>
                </div>
                <buttton className={FuelQuoteStyle.calculateButton}>Calculate Your Fuel Quote!</buttton>
            </form>  
        </div>
    );
}

export default FuelQuoteForm;