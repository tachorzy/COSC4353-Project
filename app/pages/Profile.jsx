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

function Profile() {
    // const placeholderName = "Raj Singh"
    // const placeholderNumber = "+1 (713)-789-4353"
    // const placeholderAddress = "3551 Cullen Blvd"
    // const placeholderAddress2 = ""
    // const placeholderCity = "Houston"
    // const placeholderState = "Texas"
    // const placeholderZip = "77004"
    
    const [hiddenclass, sethiddenclass] = useState("hidden");
    const {data} = useSession();

    const router = useRouter();

    useEffect(() => {
        if(!data){  
        if (typeof window !== 'undefined') {
            router.push('/Login');
        }}
    }, []);

    
    function editmenu(){
        sethiddenclass("");
    }

    function canceleditmenu(){
        sethiddenclass("hidden");
    }

    var email = "";

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

        sethiddenclass("hidden");
    }



    return (
       
        <div className="bg-cambridgeBlue min-h-screen flex justify-center items-center text-stone-200">

            <div className="bg-white p-8 rounded-lg ">
                
                <div className='input-container min-w-full mb-5'>
                    <p className='text-black mb-1'>Your Email</p>
                    <input className='border text-black border-gray-300 p-2 px-4 rounded-full w-full' 
                        defaultValue="hello"
                        type="text"
                    > 
                    </input>
                </div>


                <div className='input-container min-w-full flex gap-3 mb-5 w-full'>
                    
                    <div className='w-full'>
                        <p className='text-black mb-1'>First Name</p>
                        <input className='border text-black border-gray-300 p-2 px-4 rounded-full w-full' 
                            defaultValue="hello"
                            type="text"
                        > 
                        </input>
                    </div>

                    <div className='w-full'>
                        <p className='text-black mb-1'>Last Name</p>
                        <input className='border text-black border-gray-300 p-2 px-4 rounded-full w-full' 
                            defaultValue="hello"
                            type="text"
                        > 
                        </input>
                    </div>

                </div>

                <div className='input-container flex gap-3 mb-5 max-w-md'>
                    
                    <div className='w-1/3'>
                        <p className='text-black mb-1'>City</p>
                        <input className='border text-black border-gray-300 p-2 px-4 rounded-full w-full' 
                            defaultValue="hello"
                            type="text"
                        > 
                        </input>
                    </div>

                    <div className='w-1/3'>
                        <p className='text-black mb-1'>State</p>
                        <input className='border text-black border-gray-300 p-2 px-4 rounded-full w-full' 
                            defaultValue="hello"
                            type="text"
                        > 
                        </input>
                    </div>

                    <div className='w-1/3'>
                        <p className='text-black mb-1'>Zip Code</p>
                        <input className='border text-black border-gray-300 p-2 px-4 rounded-full w-full' 
                            defaultValue="hello"
                            type="text"
                        > 
                        </input>
                    </div>

                </div>

                <div className='input-container min-w-full mb-5'>
                    <p className='text-black mb-1'>Address 1</p>
                    <input className='border text-black border-gray-300 p-2 px-4 rounded-full w-full' 
                        defaultValue="hello"
                        type="text"
                    > 
                    </input>
                </div>

                <div className='input-container min-w-full mb-5'>
                    <p className='text-black mb-1'>Address 2</p>
                    <input className='border text-black border-gray-300 p-2 px-4 rounded-full w-full' 
                        defaultValue="hello"
                        type="text"
                    > 
                    </input>
                </div>



            </div>
                      
                {/* <div className={satoshiBold.className}>
                    <h1 className="text-7xl mb-6 font-extrabold">Profile</h1>
                    <button className='mb-2 font-semibold' onClick={editmenu} >Edit</button>
                </div> */}
                
                {/* a popup div for edit menu */}
                {/* <div className={`${hiddenclass} w-60 bg-blue-200 border-2 border-black text-black   
                                absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                                rounded-lg flex flex-col justify-center items-center`}
                >
                    
                    <h1 className="text-lg mb-5 font-bold">Edit Menu</h1>
                

                    <div className='mb-1.5'>
                        <h1 className="font-semibold">First Name</h1>
                        <input className="bg-white border border-black pl-2" type="text" name="firstname" id="firstname" placeholder="First Name" />
                    </div>

                    <div className='mb-1.5'>
                        <h1 className="font-semibold">Last Name</h1>
                        <input className="bg-white border border-black pl-2" type="text" name="lastname" id="lastname" placeholder="Last Name" />
                    </div>

                    <div className='mb-1.5'>
                        <h1 className="font-semibold">Address 1</h1>
                        <input className="bg-white border border-black pl-2" type="text" name="address1" id="address1" placeholder="Address 1" />
                    </div>

                    <div className='mb-1.5'>
                        <h1 className="font-semibold">Address 2</h1>
                        <input className="bg-white border border-black pl-2" type="text" name="address2" id="address2" placeholder="Address 2" />
                    </div>

                    <div className='mb-1.5'>
                        <h1 className="font-semibold">City</h1>
                        <input className="bg-white border border-black pl-2" type="text" name="city" id="city" placeholder="City" />
                    </div>

                    <div className='mb-1.5'>
                        <h1 className="font-semibold">State</h1>
                        <input className="bg-white border border-black pl-2" type="text" name="state" id="state" placeholder="State" />
                    </div>

                    <div className='mb-1.5'>
                        <h1 className="font-semibold">Zipcode</h1>
                        <input className="bg-white border border-black pl-2" type="text" name="zipcode" id="zipcode" placeholder="Zipcode" />
                    </div>
                    
                    <div className='flex gap-10 m-5'>
                        <button className='font-bold' onClick={save_editmenu}>Save</button>
                        <button className='font-bold' onClick={canceleditmenu}>Cancel</button>
                    </div>
                    
                    
                </div> */}


                {/* <div className="w-1/2 text-stone-600">
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

                </div> */}

        
        </div>
    )
}

export default Profile;
