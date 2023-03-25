import Link from 'next/link';
import { useState, useEffect } from 'react';
import React from 'react';

export default function FuelQuoteHistory() {
  const [quoteData, setQuoteData] = useState([]);

useEffect(() => {
  fetch('http://localhost:3000/api/getHistoryData')
    .then((response) => response.json())
    .then((data) => {
      setQuoteData(data);
    });
}, []);

const FuelQuoteHistory = () => {
    return (
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
                <tbody>
                  {quoteData.map((quote) => (
                    <tr key={quote.id}>
                      <td>{quote.date}</td>
                      <td>{quote.address1}</td>
                      <td>{quote.address2}</td>
                      <td>{quote.city}</td>
                      <td>{quote.state}</td>
                      <td>{quote.zipCode}</td>
                      <td>{quote.gallons.toFixed(2)}</td>
                      <td>${quote.pricePerGallon.toFixed(2)}</td>
                      <td>${quote.totalCost.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
        </div>
  );
}
