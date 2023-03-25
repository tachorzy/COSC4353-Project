import Link from 'next/link';
import { useState, useEffect } from 'react';
import React from 'react';

export default function FuelQuoteHistory() {
  const [quoteData, setQuoteData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/getQuoteHistory')
      .then((response) => response.json())
      .then((data) => {
        setQuoteData(data);
      });
  }, []);

  return (
    <div className="container">
      <header>
        <nav className="navbar">
          <div className="navbar-brand">Fuel Quote</div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/home">
                <a>Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/quote">
                <a>Quote</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/profile">
                <a>Profile</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/logout">
                <a>Logout</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="content">
        <div className="card">
          <h3 className="card-title">Fuel Quote History</h3>
          <div className="card-body">
            <div className="table-container">
              <table className="table">
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
          </div>
        </div>
      </main>
    </div>
  );
}
