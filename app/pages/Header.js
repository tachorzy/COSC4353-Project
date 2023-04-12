import Link from "next/link";
import React from "react";

import { useSession, signOut } from "next-auth/react";

const Header = () => {
    const {data} = useSession();
    console.log(data);
    
  return (
    <nav className="navbar navbar-light bg-light row justify-content-center sticky-top">
      <div className="container">
        <div className="col-3 p-0">
          <a className="navbar-brand" style={{ marginLeft: "20px" }} href="#">
            Authentication
          </a>
        </div>

        <div className="col-3 mt-3 mt-md-0 text-center d-flex flex-row">
          {data? (
            <>
              <span style={{ marginRight: "15px" }}>
                Hi, {data.user.personalDetails[0].FirstName}
              </span>

              <span style={{ cursor: "pointer" }} onClick={() => signOut()}>
                {" "}
                Logout
              </span>
            </>
          ) : (
            <span style={{ marginRight: "15px" }}>
              {" "}
              <Link className="nav-link" href="/Login">
                Login
              </Link>
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;