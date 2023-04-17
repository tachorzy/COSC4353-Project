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
            <Link href="/" className="navbar-brand ml-4 pt-0.5 select-none hover:stone-100">
              Placeholder
            </Link>
          </div>

          <div className="col-3 mt-3 mt-md-0 text-center d-flex flex-row">
            {data? (
              <>
                <span className="mx-auto">
                  Hi, {data.user.personalDetails[0].FirstName}
                </span>

                <span className="cursor-pointer" onClick={() => signOut()}>
                  {" "}
                  Logout
                </span>
              </>
            ) : (
              <span className="mr-4">
                {" "}
                <Link className="nav-link" href="/Login">
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