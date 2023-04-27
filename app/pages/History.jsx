import Link from 'next/link'
import FuelQuoteHistoryStyle from '../styles/FuelQuoteHistoryStyle.module.css'
import { useState, useEffect } from 'react';
import React from 'react';

export default function History() {
  const [quoteData, setQuoteData] = useState([]);
  //we need hooks from useSession() for the user session in NextAuth

  useEffect(() => {
    fetch('http://localhost:3000/api/getUserHistory')
        .then((response) => response?.json())
        .then((data) => {
        setQuoteData(data);
        console.log(data.gallonsRequest)
        console.log(data)
        });
  }, []);

  return (
    <div className="bg-cambridgeBlue h-screen m-auto justify-center content-center flex flex-col">
      <div className="ml-48 mb-16">
        <div className={FuelQuoteHistoryStyle.container}>
          <table className={FuelQuoteHistoryStyle.table}>

              <thead>
                <tr>
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
                    <td>{quote.date}</td>
                    <td>{quote.address1}</td>
                    <td>{quote.address2}</td>
                    <td>{quote.city}</td>
                    <td>{quote.state}</td>
                    <td>{quote.zipCode}</td>
                    <td>{quote.gallonsRequest.toFixed(2)}</td>
                    <td>{quote.pricePerGallon}</td>
                    <td>${quote.totalAmount.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
      </div>
    </div>
  )
}
