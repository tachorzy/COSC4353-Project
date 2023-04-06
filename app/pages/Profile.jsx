import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useState, useEffect } from 'react'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import FuelQuoteHistory from '../components/FuelQuoteHistory'
import localFont from '@next/font/local'
import FuelQuoteForm from '@/components/FuelQuoteForm'
import FuelQuoteStyle from '../styles/FuelQuoteStyle.module.css'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { getSession } from "next-auth/react"
// import {updateUser} from './api/updateUser'
import { useRef } from 'react'


const inter = Inter({ subsets: ['latin'] })


const satoshi = localFont({
    src: '../fonts/Satoshi-Regular.otf',
    weight: '200'
})

const satoshiBold = localFont({
    src: '../fonts/Satoshi-Bold.otf',
    weight: '200'
})

export default function Profile() {
    // const placeholderName = "Raj Singh"
    // const placeholderNumber = "+1 (713)-789-4353"
    // const placeholderAddress = "3551 Cullen Blvd"
    // const placeholderAddress2 = ""
    // const placeholderCity = "Houston"
    // const placeholderState = "Texas"
    // const placeholderZip = "77004"

    const popupedit = useRef(null);

    function editmenu(){
        popupedit.current.style.display = "flex";
    }

    function canceleditmenu(){
        popupedit.current.style.display = "none";
    }

   
    const {data} = useSession();

    var email = "";

    const router = useRouter();

    const save_editmenu = async (event) =>{
    
        const FirstName = document.getElementById("firstname").value;
        const LastName = document.getElementById("lastname").value;
        const Address1 = document.getElementById("address1").value;
        const Address2 = document.getElementById("address2").value;
        const City = document.getElementById("city").value;
        const State = document.getElementById("state").value;
        const Zipcode = document.getElementById("zipcode").value;

        const data = {
            firstName: FirstName,
            lastName: LastName,
            address1: Address1,
            address2: Address2,
            email: email,
            city: City,
            state: State,
            zipcode: Zipcode
        }

        const res = await axios.post('/api/updateUser', data);
        
        console.log(res);

        popupedit.current.style.display = "none";
        

    }



    return (
        <div className="bg-cambridgeBlue h-screen content-center flex flex-col text-stone-200">
            <div className="ml-24 mt-32">
                <div className={satoshiBold.className}>
                    <h1 className="text-7xl mb-6 font-extrabold">Profile</h1>
                    <button onClick={editmenu} style={{}} >Edit</button>
                </div>
                
                {/* a popup div in center for edit menu */}
                <div className="popup-editmenu" id="editmenu" ref={popupedit}
                style={
                    {background: "rgb(209 219 255)", 
                    border: "2px solid black",
                    color: "black",
                    minWidth: "400px", 
                    minHeight: "400px", 
                    position: "absolute", 
                    top: "50%", left: "50%", transform: "translate(-50%, -50%)",
                    borderRadius: "20px",
                    display: "none", flexDirection: "column", justifyContent: "center", alignItems: "center"}}
                >
                    <h1>Edit Menu</h1>
                

                    <div>
                        <h1>First Name</h1>
                        <input type="text" name="firstname" id="firstname" placeholder="First Name" 
                        style={{
                            background: "#FFFFFF", border: "1px solid #000000"
                        }}/>
                    </div>

                    <div>
                        <h1>Last Name</h1>
                        <input type="text" name="lastname" id="lastname" placeholder="Last Name" 
                        style={{
                            background: "#FFFFFF", border: "1px solid #000000"
                        }}/>
                    </div>

                    <div>
                        <h1>Address 1</h1>
                        <input type="text" name="address1" id="address1" placeholder="Address 1" 
                        style={{
                            background: "#FFFFFF", border: "1px solid #000000"
                        }}/>
                    </div>

                    <div>
                        <h1>Address 2</h1>
                        <input type="text" name="address2" id="address2" placeholder="Address 2"
                        style={{
                            background: "#FFFFFF", border: "1px solid #000000"
                        }}/>
                    </div>

                    <div>
                        <h1>City</h1>
                        <input type="text" name="city" id="city" placeholder="City" 
                        style={{
                            background: "#FFFFFF", border: "1px solid #000000"
                        }}/>
                    </div>

                    <div>
                        <h1>State</h1>
                        <input type="text" name="state" id="state" placeholder="State" 
                        style={{
                            background: "#FFFFFF", border: "1px solid #000000"
                        }}/>
                    </div>

                    <div>
                        <h1>Zipcode</h1>
                        <input type="text" name="zipcode" id="zipcode" placeholder="Zipcode" 
                        style={{
                            background: "#FFFFFF", border: "1px solid #000000"
                        }}/>
                    </div>
                    
                    <div style={{display:"flex" , gap:"20px" , margin:"20px"}}>
                        <button onClick={save_editmenu}>Save</button>
                        <button onClick={canceleditmenu}>Cancel</button>
                    </div>
                    
                    
                </div>

                <div className="w-1/2 text-stone-600">
                    <div className={FuelQuoteStyle.container}>
                         {data? (
                            <div>
                                {data ? email = data.user.email : null }

                                <div className="flex flex-col">
                                    <label className="text-lg mb-1.5 font-semibold">Full Name: </label>
                                    <h2 className="text-xl">{`${data.user.personalDetails[0].FirstName} ${data.user.personalDetails[0].LastName}`}</h2>
                                </div>
                                <div>
                                    <label className="text-lg mb-1.5 font-semibold">Address 1: </label>
                                    <h2 className="text-xl">{data.user.personalDetails[0].address1}</h2>
                                    <div>
                                        <label className="text-lg mb-1.5 font-semibold">Address 2: </label>
                                        <h2 className="text-xl">{data.user.personalDetails[0].address2 === "" ? "N/A" : data.user.personalDetails[0].address2}</h2>
                                    </div>
                                    <div>
                                        <label className="text-lg mb-1.5 font-semibold">City: </label>
                                        <h2 className="text-xl">{data.user.personalDetails[0].city}</h2>
                                    </div>
                                    <div>
                                        <label className="text-lg mb-1.5 font-semibold">State: </label>
                                        <h2 className="text-xl">{data.user.personalDetails[0].state}</h2>
                                    </div>
                                    <div>
                                        <label className="text-lg mb-1.5 font-semibold">Zipcode: </label>
                                        <h2 className="text-xl">{data.user.personalDetails[0].zipCode}</h2>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <p>Loading data <data className="data"></data></p>
                          )}  
                    </div>

                </div>
            </div>
        </div>
    )
}