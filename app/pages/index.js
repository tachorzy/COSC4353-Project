import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <head>
      <meta charSet="UTF-8"/>
      <title>Client Profile Management</title>
   </head>
   <body>
      <header>
         <h1>Client Profile Management</h1>
      </header>
      
      <main>
              
            <p>
               <label htmlFor="name">Fullname:</label>
               <input type="text" id="name" name="name" maxLength="50" required/>
            </p>
		<p>
               <label htmlFor="name">Address 1:</label>
               <input type="text" id="name" name="name" maxLength="100" required/>
            </p>
		<p>
               <label htmlFor="name">Address 2:</label>
               <input type="text" id="name" name="name" maxLength="100"/>
            </p>
		<p>
               <label htmlFor="name">City:</label>
               <input type="text" id="name" name="name" maxLength="100" required/>
            </p>
		<p>
               <label htmlFor="restaurant">State: </label>
               <select id="restaurant" name="restaurant" required>
                  <option value="">Choose one...</option>
                  <option>AL</option>
			<option>CA</option>
                  <option>TX</option>
               </select>
            </p>
		
		<p>
               <label htmlFor="name">Zipcode:</label>
               <input type="text" id="name" name="name" maxLength="9" minLength="5" required/>
            </p>
            
            <button>Submit</button>
      </main>
      
      <footer>
         <p>
            COSC 4353
         </p>
      </footer>      
        
   </body>
   </>
  )
}
