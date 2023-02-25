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
<<<<<<< HEAD
                    <input className={FuelQuoteStyle.standardInputBox} placeholder={"Full Name"} name="full-name"/>
=======
                    <input className={FuelQuoteStyle.standardInputBox} placeholder={"First Name"} name="first-name"/>
                </div>  
                <div className={FuelQuoteStyle.inputContainer}>
                    <input className={FuelQuoteStyle.standardInputBox} placeholder={"Last Name"} name="last-name"/>
>>>>>>> 1dfcfe51b4fa7883e8eb7265876eaba64c3306c2
                </div>  
                <div className={FuelQuoteStyle.inputContainer}>
                    <input className={FuelQuoteStyle.standardInputBox} placeholder={"E-mail address"} name="email"/>
                </div>  
                <div className={FuelQuoteStyle.inputContainer}>
<<<<<<< HEAD
                    <input className={FuelQuoteStyle.standardInputBox} placeholder={"Delivery Address 1"} name="delivery-address"/>
                </div>
            
                <div className={FuelQuoteStyle.inputContainer}>
                    <input className={FuelQuoteStyle.standardInputBox} placeholder={"Delivery Address 2 (Optional)"} name="delivery-address2"/>
=======
                    <input className={FuelQuoteStyle.standardInputBox} placeholder={"Address 1"} name="delivery-address"/>
                </div>
            
                <div className={FuelQuoteStyle.inputContainer}>
                    <input className={FuelQuoteStyle.standardInputBox} placeholder={"Address 2 (Optional)"} name="delivery-address2"/>
>>>>>>> 1dfcfe51b4fa7883e8eb7265876eaba64c3306c2
                </div>
                
                <div className={FuelQuoteStyle.splitContainer}>
                        <input className={FuelQuoteStyle.smallInputBox} placeholder={"Zip Code"} name="zip-cpde"/>
                        <input className={FuelQuoteStyle.smallInputBox} placeholder={"State"} name="state"/>
                </div>
                <div className={FuelQuoteStyle.inputContainer}>
                    <div className={FuelQuoteStyle.logoInputContainer}>
                        <input className={FuelQuoteStyle.standardInputBox} placeholder={"Delivery Date"} name="delivery-date"/>
                        <Image src='/calendar.svg' width={28} height={28} className={FuelQuoteStyle.calendarLogo}></Image>
                    </div>

                
                </div>
                <div className={FuelQuoteStyle.splitContainer}>
                    <div className={FuelQuoteStyle.logoInputContainer}>
                        <input className={FuelQuoteStyle.standardInputBox} placeholder={"Gallons"} name="gallons-requested"/>
                        <Image src='/gallon.svg' width={28} height={28} className={FuelQuoteStyle.gallonLogo}></Image>
                    </div>
                </div>
<<<<<<< HEAD
                <div className={FuelQuoteStyle.inputContainer}>
                    <buttton className={FuelQuoteStyle.calculateButton}>Calculate!</buttton>
                </div>
=======
                <buttton className={FuelQuoteStyle.calculateButton}>Calculate Your Fuel Quote!</buttton>
>>>>>>> 1dfcfe51b4fa7883e8eb7265876eaba64c3306c2
            </form>  
        </div>
    );
}

export default FuelQuoteForm;