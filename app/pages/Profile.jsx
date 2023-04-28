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


var UsaStates = require('usa-states').UsaStates;
var usStates = new UsaStates();
var statesAbrev = usStates.arrayOf('abbreviations');
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
    const [firstname, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [address1, setAddress1] = useState();
    const [address2, setAddress2] = useState();
    const [state, setState] = useState();
    const [city, setCity] = useState();
    const [zipCode, setZipCode] = useState();
    const [selectState, setSelectedState] = useState('');
    const [hiddenclass, sethiddenclass] = useState("hidden");
    const [read, setread] = useState(true);
    const { data } = useSession();
    const [addressError, setAddressError] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [cityError, setCityError] = useState('');
    const [zipError, setZipError] = useState(''); 
    const [emailError, setEmailError] = useState('');
    const router = useRouter();


    useEffect(() => {
        if (!data) {
            if (typeof window !== 'undefined') {
                router.push('/Login');
            }
        }
    }, []);

    useEffect(() => {
        fetch('http://localhost:3000/api/getUserDetails', {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => {
                console.log(`Profile data ${data}`)
                if (data !== null) {
                    setFirstName(data.firstName);
                    setLastName(data.lastName);
                    setAddress1(data.address1);
                    setAddress2(data.address2);
                    setState(data.state);
                    setCity(data.city);
                    setZipCode(data.zip);
                }
            })
    }, []);

    function editmenu() {
        setread(false);
        sethiddenclass("");
    }

    function canceleditmenu() {
        sethiddenclass("hidden");
        setread(true);
    }

    const save_editmenu = async (event) => {

        const firstName = document.getElementById("firstname").value;
        const lastName = document.getElementById("lastname").value;
        const address1 = document.getElementById("address1").value;
        const address2 = document.getElementById("address2").value;
        const city = document.getElementById("city").value;
        const state = document.getElementById("state").value;
        const zipcode = document.getElementById("zipcode").value;
        const email = document.getElementById("email").value;
        setFirstNameError('');
        setLastNameError('');
        setAddressError('');
        setCityError('');
        setZipError('');
        setEmailError('');
        if(!firstName || !lastName || !address1 || !city || !zipcode || !email ){
            if (!firstName) setFirstNameError('First name is required');
            if (!lastName) setLastNameError('Last name is required');
            if (!address1) setAddressError('Address1 is required');
            if (!city) setCityError('City is required');
            if (!zipcode) setZipError('Zipcode is required');
            if (!email) setEmailError('Email is required');
            return;
        }
        if(zipcode.length < 5 ) {
            setZipError('Zipcode need at least 5 character');
            return;
        }
        if(zipcode.length < 5 ) {
            setZipError('Zipcode need at least 5 character');
            return;
        }
        if(isNaN(zipcode)){
            setZipError('Zipcode need to be numbers');
            return;
        }
        if(!/^[a-zA-Z]+$/.test(city)){
            setCityError('City need to be letters');
            return;
        }

        const data = {
            firstName: firstName,
            lastName: lastName,
            address1: address1,
            address2: address2,
            email: email,
            city: city,
            state: state,
            zipcode: zipcode
        }

        const res = await axios.post('/api/updateUser', data);
        console.log(firstName);
        console.log("Update complete")
        setread(true);
        sethiddenclass("hidden");
    }


    // bg-gradient-to-r from-black via-purple-600 to-black
    return (
        data && (
            <div className="bg-cambridgeBlue min-h-screen flex justify-center items-center flex-col text-stone-100 max-sm:p-10 pt-16">
                <div>
                    <div className='flex justify-between items-end px-3'>
                        <h2 className='text-stone-100 text-3xl font-semibold mb-2 ml-2'>
                            Personal Information</h2>
                        <button
                            className='mb-2 text-1xl text-cambridgeBlue font-semibold bg-white rounded-full px-5 border-2 border-white transition duration-700 ease-in-out hover:bg-cambridgeBlue hover:text-white outline-teal-300'
                            onClick={editmenu} >
                            Edit
                        </button>
                    </div>

                    <div className="bg-neutral-100 bg-opacity-20 p-8 rounded-3xl shadow-r-lg">
                        <div className='input-container min-w-full mb-5'>
                            <p className='text-white mb-1'>Your Email</p>
                            <input className='border-2 text-cambridgeBlue font-medium outline-stone-100 p-2 px-4 rounded-full w-full border-white bg-white'
                                id="email"
                                defaultValue={data?.user?.email}
                                type="text"
                                readOnly
                            >
                            </input>
                            {emailError && <p className="text-red-500">{emailError}</p>}
                        </div>


                        <div className='input-container min-w-full flex gap-3 mb-5 w-full max-sm:flex-col'>

                            <div className='w-full'>
                                <p className='text-white mb-1'>First Name</p>
                                <input className='border-2 outline-stone-100 p-2 px-4 rounded-full
                            text-cambridgeBlue font-medium
                                w-full border-white bg-white'
                                    id="firstname"
                                    defaultValue={data.user.personalDetails[0].firstName}
                                    type="text"
                                    readOnly={read}
                                    maxLength={25}
                                >
                                </input>
                                {firstNameError && <p className="text-red-500">{firstNameError}</p>}
                            </div>

                            <div className='w-full'>
                                <p className='text-white mb-1'>Last Name</p>
                                <input
                                    className='border-2 text-cambridgeBlue font-medium outline-stone-100 p-2 px-4 rounded-full w-full border-white bg-white'
                                    id="lastname"
                                    defaultValue={data.user.personalDetails[0].lastName}
                                    type="text"
                                    readOnly={read}
                                    maxLength={25}
                                >
                                
                                </input>
                                {lastNameError && <p className="text-red-500">{lastNameError}</p> }
                            </div>

                        </div>

                        <div className='input-container min-w-full mb-5'>
                            <p className='text-white mb-1'>Address 1</p>
                            <input className='border-2 text-cambridgeBlue font-medium outline-stone-100 p-2 px-4 rounded-full w-full  border-white bg-white'
                                id="address1"
                                defaultValue={address1}
                                type="text"
                                readOnly={read}
                                maxLength={100}
                            >
                                
                            </input>
                            {addressError && <p className="text-red-500">{addressError}</p> }
                        </div>

                        <div className='input-container min-w-full mb-5'>
                            <p className='text-white mb-1'>Address 2</p>
                            <input className='border-2 text-cambridgeBlue font-medium outline-stone-100 p-2 px-4 rounded-full w-full border-white bg-white'
                                id="address2"
                                defaultValue={address2}
                                type="text"
                                readOnly={read}
                                maxLength={100}
                            >
                            </input>
                        </div>

                        <div className='input-container flex gap-3 mb-5 max-w-md max-sm:flex-col'>

                            <div className='w-1/3 max-sm:w-full'>
                                <p className='text-white mb-1'>City</p>
                                <input
                                    className='border-2 text-cambridgeBlue font-medium outline-stone-100 p-2 px-4 rounded-full 
                                w-full  border-white bg-white'
                                    id="city"
                                    defaultValue={city}
                                    type="text"
                                    readOnly={read}
                                    maxLength={100}
                                >
                                
                                </input>
                                { cityError && <p className="text-red-500">{cityError}</p> }
                            </div>

                            <div className='w-1/3 max-sm:w-full'>
                                <p className='text-white mb-1'>State</p>
                                {!read ? (
                                    <select
                                        className='border-2 text-cambridgeBlue font-medium outline-stone-100 p-2 px-4 rounded-full w-full  border-white bg-white'
                                        id="state"
                                        defaultValue={state}
                                        type="text"
                                        readOnly={read}
                                        onChange={(event) => setSelectedState(event.target.value)}
                                    >
                                        {statesAbrev.map((state) => (
                                            <option key={state} value={state}>
                                                {state}
                                            </option>
                                        ))}
                                    </select>
                                ) : (
                                    <input
                                        className='border-2 text-cambridgeBlue font-medium outline-stone-100 p-2 px-4 rounded-full w-full  border-white bg-white'
                                        id="state"
                                        type="text"
                                        value={state}
                                        readOnly={read}
                                    />
                                )}
                            </div>

                            <div className='w-1/3 max-sm:w-full'>
                                <p className='text-white mb-1'>Zip Code</p>
                                <input className='border-2 text-cambridgeBlue font-medium outline-stone-100 p-2 px-4 rounded-full w-full  border-white bg-white'
                                    id="zipcode"
                                    defaultValue={zipCode}
                                    type="text"
                                    readOnly={read}
                                    maxLength={9}
                                >
                                </input>
                                {zipError && <p className="text-red-500">{zipError}</p>}
                            </div>

                        </div>

                    </div>

                    <div className={`${hiddenclass} flex justify-center gap-8 items-end px-5 mt-4`}>
                        <button
                            className="mb-2 text-1xl text-cambridgeBlue font-semibold bg-neutral-100 rounded-full px-5 py-1 border-2 border-white transition duration-700 ease-in-out hover:bg-cambridgeBlue hover:text-white outline-teal-300"
                            onClick={save_editmenu} >
                            Save
                        </button>

                        <button
                            className="mb-2 text-1xl text-cambridgeBlue font-semibold bg-neutral-100 rounded-full px-5 py-1 border-2 border-white transition duration-700 ease-in-out hover:bg-cambridgeBlue hover:text-white outline-teal-300"
                            onClick={canceleditmenu} >
                            Cancel
                        </button>
                    </div>

                </div>

            </div>
        )
    )
}

export default Profile;
