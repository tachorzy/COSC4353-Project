import Link from "next/link";
import React from "react";

import { useSession, signOut } from "next-auth/react";

const Header = () => {
    const {data} = useSession();
    
  return (
    <nav className="navbar navbar-light bg-light row justify-content-center sticky-top">
      
      <div className="container">

        <div className="col-3 mt-3 mb-3 text-center">
            
            {data? (
              <div className="flex gap-10 justify-center justify-around">

                
                <span className="font-semibold">
                  Hi, {data.user.personalDetails[0].FirstName}
                </span>
                
                <Link className="nav-link" href="/FuelQuote">
                  Quotes
                </Link>

                <Link className="nav-link" href="/Profile">
                  Profile
                </Link>

                <Link className="nav-link" href="/History">
                  History
                </Link>

                <Link className="nav-link" onClick={() => signOut()} href="/login">
                  Logout
                </Link>
              
              </div>
            
            ) : (

            <div className="flex gap-10 justify-center justify-around">
              <Link className="nav-link font-semibold" href="/Login">
                Login
              </Link>

              <Link className="nav-link font-semibold" href="/Register">
                Register
              </Link>
              
            </div>

          )}
        </div>

      </div>
    </nav>
  );
};

export default Header;
