import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import FuelQuoteHistory from '../components/FuelQuoteHistory'


export default function History() {
    return (
      <div className="bg-cambridgeBlue h-screen m-auto justify-center content-center flex flex-col">
        <div className="ml-48 mb-16">
          <FuelQuoteHistory/>
        </div>
      </div>
    )
  }
  