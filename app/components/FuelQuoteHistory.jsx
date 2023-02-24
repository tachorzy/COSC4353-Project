import styles from '../styles/Home.module.css'
import Image from 'next/image'
import localFont from '@next/font/local'
import { Inter } from '@next/font/google'
import { Combo, Roboto, Rubik } from '@next/font/google'
import FuelQuoteHistoryStyle from '../styles/FuelQuoteHistoryStyle.module.css'

const roboto = Roboto({ 
    subsets: ['latin'], 
    weight: '400' 
})

const FuelQuoteHistory = () => {
    return (
        <div className={FuelQuoteHistoryStyle.container}>
            <div className={FuelQuoteHistoryStyle.header}>
                <h1 className={FuelQuoteHistoryStyle.branding}>
                    Fuel Quote History
                </h1>
            </div>

            <table className={FuelQuoteHistoryStyle.table}>
                <thead>
                    <tr>
                        <th className={FuelQuoteHistoryStyle.th}>Delivery Address</th>
                        <th className={FuelQuoteHistoryStyle.th}>Delivery Date</th>
                        <th className={FuelQuoteHistoryStyle.th}>Gallons Requested</th>
                        <th className={FuelQuoteHistoryStyle.th}>Total Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={FuelQuoteHistoryStyle.td}>123 Main St, Houston, TX 77001</td>
                        <td className={FuelQuoteHistoryStyle.td}>01/01/2023</td>
                        <td className={FuelQuoteHistoryStyle.td}>500</td>
                        <td className={FuelQuoteHistoryStyle.td}>$2,500.00</td>
                    </tr>
                    <tr>
                        <td className={FuelQuoteHistoryStyle.td}>456 Oak Ave, Dallas, TX 75201</td>
                        <td className={FuelQuoteHistoryStyle.td}>12/15/2022</td>
                        <td className={FuelQuoteHistoryStyle.td}>250</td>
                        <td className={FuelQuoteHistoryStyle.td}>$1,375.00</td>
                    </tr>
                    <tr>
                        <td className={FuelQuoteHistoryStyle.td}>789 Pine Blvd, San Antonio, TX 78201</td>
                        <td className={FuelQuoteHistoryStyle.td}>11/28/2022</td>
                        <td className={FuelQuoteHistoryStyle.td}>750</td>
                        <td className={FuelQuoteHistoryStyle.td}>$3,750.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default FuelQuoteHistory;
