import Link from 'next/link'
const login = () => {
    return ( <>
    <div> 
        <h1>Login</h1>
        <p>
                <label htmlFor="name">Fullname:</label>
               <input type="text" id="name" name="name" maxLength="50" required/>
        </p>
        <p>
                <label htmlFor="password">Password:</label>
               <input type="text" id="password" name="password" maxLength="50" required/>
        </p>
        <button>Submit</button>
        <footer>
         <Link  href= "/registration">
             Register
         </Link>
        </footer>
    </div>
    </> );
}
 
export default login;