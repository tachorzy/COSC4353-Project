import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import React, { useState } from 'react';
import { tempUserBase } from '@/utils/tempUserBase'
import { getSession,signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import bcrypt from 'bcryptjs';
import { useSession } from "next-auth/react"

function Login() {

  const {data} = useSession();
  const router = useRouter();

  if(data){
    router.push('/Profile');
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  // const router = useRouter();


  const handleSubmit = async (event) => {
    console.log('form submitted');
    event.preventDefault();
    setEmailError('');
    setPasswordError('');

    if (!email) 
      return setEmailError('Email is required');
    if (!password) 
      return setPasswordError('Password is required');

    console.log(`password: ${password}`)

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (result.error) {
      console.log(result.error);

      if(result.error == "Email not found"){
        setEmailError('Email not found');
      }
      else if(result.error == "Incorrect Password"){
        setPasswordError('Incorrect Password')
      }

    }else{
      const data = await getSession();
      if (data) {
        if (!data.user.profileSet) {
          router.push('/Profile');
        }
      } 
    }

};

  return (
    <div className="min-h-screen bg-cambridgeBlue py-6 flex flex-col justify-center sm:py-12">
      <Head>
        <title>Login</title>
        <link rel="icon" href="/pipeline.svg" />
      </Head>
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-stone-200 mx-8 md:mx-0 shadow-lg rounded-3xl sm:p-10">

          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold text-stone-600">Sign in</h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-stone-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email address"
                      value={email}
                      onChange={event => setEmail(event.target.value)}
                      className="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                    />
                    {emailError && <p className="text-red-500">{emailError}</p>}
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Password"
                      value={password}
                      onChange={event => setPassword(event.target.value)}
                      className="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                    />
                    {passwordError && <p className="text-red-500">{passwordError}</p>}
                  </div>
                  <span id="error" className="text-red-600 text-sm"></span>
                  <div className="relative flex items-center">
                    <input
                      type="checkbox"
                      id="remember_me"
                      name="remember_me"
                      className="form-checkbox h-4 w-4 text-stone-400 transition duration-150 ease-in-out"
                    />
                    <label htmlFor="remember_me" className="ml-2 block text-sm leading-5 text-gray-900">
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm leading-5">                  </div>
                </div>
                <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                  <button
                    type="submit"
                    className="w-full bg-stone-400 hover:bg-stone-500 text-white py-3 rounded-md transition duration-150 ease-in-out sm:py-4 sm:text-sm sm:leading-5"
                  >
                    Sign in
                  </button>
                </div>
                <div className="text-sm leading-5 pt-6">
                  Dont have an account?{' '}
                  <Link href="/Register">
                    <h3 className="font-medium text-stone-600 hover:text-stone-700 focus:outline-none focus:underline transition ease-in-out duration-150">
                      Sign up instead
                    </h3>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )

}
export default Login;
