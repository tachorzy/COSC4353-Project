import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import FuelQuoteForm from '../components/FuelQuoteForm.jsx'
import FuelQuoteHistory from '../components/FuelQuoteHistory.jsx'
import LoginButton from '../components/LoginButton.jsx'
import RegisterButton from '../components/RegisterButton.jsx'
import localFont from '@next/font/local'
import { useSession, signIn, signOut } from "next-auth/react"
import { TypeAnimation } from 'react-type-animation';

const inter = Inter({ subsets: ['latin'] })

export const satoshi = localFont({
  src: '../fonts/Satoshi-Regular.otf',
  weight: '200'
})

export const satoshiBold = localFont({
  src: '../fonts/Satoshi-Bold.otf',
  weight: '200'
})

export default function Home() {

  //check if user logged in
  const { data: session, status } = useSession();


  return (
    <>
      <Head>
        <title>Calculate your fuel quotes</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
          <div className={satoshiBold.className}>
            
            {session ? (
             
             <span className="font-semibold mt-12">
                <div className="max-w-full grid grid-cols-4 ">
                  <div>
                    <h1 className="text-3xl font-bold mt-12"> Welcome back, {session.user.personalDetails[0].FirstName}</h1>
                    <h1 className="text-1xl font-bold mt-2 opacity-60"> Let's Calculate Quote</h1>
                  </div>
                </div>
              </span>
              

            ) : (

              <span className="font-semibold mt-12">
                <LoginButton/>
                <RegisterButton/>
              </span>

            )}

            <div>
                  <TypeAnimation
                    className="text-9xl mt-14 mx-auto font-extrabold pb-4 absolute select-none"
                    sequence={[
                      `Calculate your\nfuel quotes.`,
                      3200,
                      "Manage your\ncosts.",
                      3200,
                      "Keep track of your orders.",
                      3200
                    ]} 
                    cursor={true}
                    repeat={Infinity}
                    speed={25}
                    deletionSpeed={25}
                  />
            </div>
          </div>
      </main>
    </>
  )
}
