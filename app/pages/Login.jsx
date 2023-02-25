import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'


export default function Login() {
    return (
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12"> 
            <Head>
                <title>Login</title>
                <link rel="icon" href="/favicon.ico" />
            </Head> 
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow-lg rounded-3xl sm:p-10">
            <div className="max-w-md mx-auto">
              <div>
                <img src="/logo.svg" className="h-7 sm:h-8" />
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email address"
                      className="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Password"
                      className="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                    />
                  </div>
                  <div className="relative flex items-center">
                    <input
                      type="checkbox"
                      id="remember_me"
                      name="remember_me"
                      className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                    />
                    <label htmlFor="remember_me" className="ml-2 block text-sm leading-5 text-gray-900">
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm leading-5">
                  </div>
                </div>
                <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-md transition duration-150 ease-in-out sm:py-4 sm:text-sm sm:leading-5"
                  >
                    Sign in
                  </button>
                </div>
                <div className="text-sm leading-5 pt-6">
                  Dont have an account?{' '}
                  <Link href="/register">
                    <h3 className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                      Sign up instead
                    </h3>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  