import Head from 'next/head'
import Link from 'next/link'
import FuelQuoteHistoryStyle from '../styles/FuelQuoteHistoryStyle.module.css'
import FuelQuoteButton from '../components/FuelQuoteButton'
import { useState, useEffect } from 'react';
import React from 'react';

export default function History() {
  const [quoteData, setQuoteData] = useState([]);
  //we need hooks from useSession() for the user session in NextAuth

  useEffect(() => {
    fetch('http://localhost:3000/api/getUserHistory')
      .then((response) =>  {
        return response.json()
      })
      .then((data) => {
        setQuoteData(data);
      });
  }, []);

  return (
    <div className="bg-cambridgeBlue h-screen m-auto flex flex-col">
      <Head>
        <title>Keep track of your orders</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/pipeline.svg" />
      </Head>
      <div className="mt-24 ml-24 justify-center content-center">
        <div className={FuelQuoteHistoryStyle.container}>
        {quoteData?.length !== 0 && quoteData !== undefined ? (  
          <>   
          <table className={FuelQuoteHistoryStyle.table}>
              <thead>
                <tr className="gap-x-16">
                  <th scope="col">Delivery Date</th>
                  <th scope="col">Address 1</th>
                  <th scope="col">Address 2</th>
                  <th scope="col">City</th>
                  <th scope="col">State</th>
                  <th scope="col">Zip Code</th>
                  <th scope="col">Gallons</th>
                  <th scope="col">Price/Gal</th>
                  <th scope="col">Total Cost</th>
                </tr>
              </thead>
              {/**/}
              <tbody>
                {quoteData.map((quote) => (
                  <tr>
                    <td>{quote?.deliveryDate}</td>
                    <td>{quote?.address1}</td>
                    <td>{quote?.address2}</td>
                    <td>{quote?.city}</td>
                    <td>{quote?.state}</td>
                    <td>{quote?.zipCode}</td>
                    <td>{quote?.gallonsRequested.toFixed(2)}</td>
                    <td>${quote?.pricePerGallon}</td> 
                    <td>${quote?.totalAmount?.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </>
          ) : (
            <div className="ml-48 mt-12 w-screen">
              <h1 className="text-white font-semibold text-6xl pb-6">No history found<br/>on your account.</h1>
              <FuelQuoteButton></FuelQuoteButton>
            </div>
          )}
          </div>
      </div>
    </div>
  )
}
