import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import localFont from '@next/font/local'
import FuelQuoteStyle from '../styles/FuelQuoteStyle.module.css'

const inter = Inter({ subsets: ['latin'] })

const CalculationsBox = () => {
    let placeholderSuggestion = "4353"
    let placeholderPrice = 0
    return(
        <div className="mt-12">
            <div className="flex flex-row bg-stone-200 rounded-2xl shadow-md p-10 gap-x-10">
                <div className="bg-stone-100 rounded-xl h-12 w-48 text-left pl-2.5 text-base pt-3 text-neutral-400">Suggested Price: ${placeholderSuggestion}</div>
                <div className="bg-stone-100 rounded-xl h-12 w-48 text-left pl-2 text-base pt-3 text-neutral-400">Calculated Price: ${placeholderPrice}</div>
            </div>
        </div>
    );
}

export default CalculationsBox;