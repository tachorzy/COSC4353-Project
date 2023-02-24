import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.grid}>
          <Link
            href="/login"
            className={styles.card}
          >
            <h2 className={inter.className}>
              Login <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Click here if you are a previous user.
            </p>
          </Link>

          <a
            href="/register"
            className={styles.card}
          >
            <h2 className={inter.className}>
              Register <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Click here if you are new to make an account.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
