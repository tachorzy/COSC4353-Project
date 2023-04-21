import Image from 'next/image'
import Link from "next/link";
import React from "react";
import { satoshi } from '../pages/index'

import { useSession, signOut } from "next-auth/react";

const Header = () => {
    const {data} = useSession();
    console.log(data);
    
  return (
    <nav className="navbar navbar-light bg-light row justify-content-center sticky-top bg-cambridgeBlue text-stone-200 text-2xl align-baseline">
      <div className={satoshi.className}>
        <div className="container">
          <div className="col-3 p-0">
            <Link href="/" className="navbar-brand ml-4 mt-3 pt-0.5 select-none hover:stone-100">
              
            </Link>
          </div>

          <div className="col-3 mr-10 mt-md-0 text-center flex gap-x-1 flex-row absolute right-0 text-base font-medium">
            {data? (
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
              <span className="mr-4 flex flex-row gap-x-1">
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