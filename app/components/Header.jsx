import Image from 'next/image'
import Link from "next/link";
import React from "react";
import { satoshi } from '../pages/index'

import { useSession, signOut } from "next-auth/react";

const Header = () => {
    const {data} = useSession();
    console.log(data);
    
  return (
    <nav className="justify-center bg-cambridgeBlue text-stone-100 text-2xl align-baseline top-0 w-screen absolute h-8">
      <div className={satoshi.className}>
        <div className="flex flex-row justify-center py-6">
          <div className="flex flex-row justify-center gap-x-12 px-10 w-screen text-lg">
            <Link href="/" className="select-none hover:stone-50 hover:font-semibold hover:border-solid border-stone-200 hover:border-b-2 rounded-sm">
              Home
            </Link>
            <Link href="/Profile" className="select-none hover:stone-50 hover:font-semibold hover:border-solid border-stone-200 hover:border-b-2 rounded-sm">
              Profile
            </Link>
            <Link href="/History" className="select-none hover:stone-50 hover:font-semibold hover:border-solid border-stone-200 hover:border-b-2 rounded-sm">
              History
            </Link>
            <Link href="/FuelQuote" className="select-none hover:stone-50 hover:font-semibold hover:border-solid border-stone-200 hover:border-b-2 rounded-sm">
              Calculate Quotes
            </Link>
          </div>

          <div className="mr-40 text-center flex gap-x-1 flex-row absolute right-0 text-base font-medium">
            {data ? (
              <>
                <span>
                  <Image src="/user.svg" width={20} height={20} alt="" className="select-none"></Image>
                </span>
                <span className="mx-auto small-sm select-none">
                  Hi, {data.user.personalDetails[0].FirstName}
                </span>

                <span className="cursor-pointer font-semibold hover:bg-stone-200 hover:bg-opacity-25 px-2 rounded-2xl" onClick={() => signOut()}>
                  {" "}
                  Logout
                </span>
              </>
            ) : (
              <span className="mr-4 flex flex-row gap-x-1 align-baseline">
                {" "}
                <span>
                  <Image src="/user.svg" width={20} height={20} alt="" className="select-none"></Image>
                </span>
                <Link className="nav-link cursor-pointer font-semibold hover:bg-stone-200 hover:bg-opacity-25 px-2 rounded-2xl" href="/Login">
                  Login
                </Link>
              </span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;