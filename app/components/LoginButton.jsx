import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import localFont from '@next/font/local'

const inter = Inter({ subsets: ['latin'] })

const RegisterButton = () => {

    return(
        <div className={styles.grid}>
            <Link
                href="/Login"
                className={styles.card}
            >
                <h2 className={inter.className}>
                    Login <span>-&gt;</span>
                </h2>
                <p className={inter.className}>
                    Click here if you are a previous user.
                </p>
            </Link>
        </div>
    );
}

export default RegisterButton;