import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import localFont from '@next/font/local'

const inter = Inter({ subsets: ['latin'] })

const FuelQuoteButton = () => {

    return(
        <div className={styles.grid}>
            <Link
                href="/FuelQuote"
                className={styles.card}
            >
                <h2 className={inter.className}>
                    Calculate a fuel quote <span>-&gt;</span>
                </h2>
                <p className={inter.className}>
                    Click here to calculate and add to your history.
                </p>
            </Link>
        </div>
    );
}

export default FuelQuoteButton;