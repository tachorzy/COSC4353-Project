import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import React, { useState } from 'react';
import bcrypt from 'bcryptjs';
import User from './api/auth/lib/models/User'
import { useRouter } from 'next/router';


export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }


  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);

  const response = await fetch('/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  });

  if (response.ok) {
    router.push('/login');
  } else {
    const data = await response.json();
    const message = data?.message || 'An error occurred';
    setErrorMsg(message);
  }
  };

  return (
    <div className="min-h-screen bg-cambridgeBlue py-6 flex flex-col justify-center sm:py-12">
      <Head>
        <title>Sign Up</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-stone-200 mx-8 md:mx-0 shadow-lg rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold text-stone-600">Register</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <form onSubmit={handleSubmit}>
                <div className="py-8 text-base leading-6 space-y-4 text-stone-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      className="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                      required
                      value={name} onChange={e => setName(e.target.value)}
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email address"
                      className="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                      required
                      value={email} onChange={e => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Password"
                      className="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                      required
                      value={password} onChange={e => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      id="confirm_password"
                      name="confirm_password"
                      placeholder="Confirm Password"
                      className="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                      required
                      value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)}
                    />
                  </div>
                </div>
                <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                  <button
                    type="submit"
                    className="w-full bg-stone-400 hover:bg-stone-500 text-white py-3 rounded-md transition duration-150 ease-in-out sm:py-4 sm:text-sm sm:leading-5"
                  >
                    Sign Up
                  </button>
                </div>
                <div className="text-sm leading-5 pt-6">
                  Already have an account?{' '}
                  <Link href="/Login">
                    <h3 className="font-medium text-stone-600 hover:text-stone-700 focus:outline-none focus:underline transition ease-in-out duration-150">
                      Sign in instead
                    </h3>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}