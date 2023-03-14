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
var UsaStates = require('usa-states').UsaStates;
var usStates = new UsaStates();
var statesAbrev = usStates.arrayOf('abbreviations');
const FuelQuoteForm = () => {
    return(
        <div className={roboto.className}>
            <form className={FuelQuoteStyle.container}>
                <div className={FuelQuoteStyle.inputContainer}>
                    <input className={FuelQuoteStyle.standardInputBox} placeholder={"First Name"} name="first-name" required/>
                </div>  
                <div className={FuelQuoteStyle.inputContainer}>
                    <input className={FuelQuoteStyle.standardInputBox} placeholder={"Last Name"} name="last-name" required/>
                </div>  
                <div className={FuelQuoteStyle.inputContainer}>
                    <input className={FuelQuoteStyle.standardInputBox} placeholder={"E-mail address"} name="email" required/>
                </div>  
                <div className={FuelQuoteStyle.inputContainer}>
                    <input className={FuelQuoteStyle.standardInputBox} placeholder={"Address 1"} name="delivery-address"required/>
                </div>
            
                <div className={FuelQuoteStyle.inputContainer}>
                    <input className={FuelQuoteStyle.standardInputBox} placeholder={"Address 2 (Optional)"} name="delivery-address2"/>
                </div>
                
                <div className={FuelQuoteStyle.splitContainer}>
                        <input  className={FuelQuoteStyle.smallInputBox} placeholder={"Zip Code"} name="zip-code" min ="5" max = "9" required />
                        <select className={FuelQuoteStyle.smallInputBox} placeholder={"State"} name="state" id = "state"/>
                            {statesAbrev.map((state) => (
                            <option key={state} value={state}>
                            {state}
                            </option>
                            ))}
                </div>
                <div className={FuelQuoteStyle.inputContainer}>
                    <div className={FuelQuoteStyle.logoInputContainer}>
                        <input type = "date" className={FuelQuoteStyle.standardInputBox} placeholder={"Delivery Date"} name="delivery-date"/>
                    </div>

                
                </div>
                <div className={FuelQuoteStyle.splitContainer}>
                    <div className={FuelQuoteStyle.logoInputContainer}>
                        <input className={FuelQuoteStyle.standardInputBox} placeholder={"Gallons"} name="gallons-requested"/>
                        <Image src='/gallon.svg' width={28} height={28} className={FuelQuoteStyle.gallonLogo}></Image>
                    </div>
                </div>
                <buttton className={FuelQuoteStyle.calculateButton}>Calculate Your Fuel Quote!</buttton>
                <buttton className={FuelQuoteStyle.calculateButton}>Calculate Your Fuel Quote!</buttton>
            </form>  
        </div>
    );
}

export default FuelQuoteForm;