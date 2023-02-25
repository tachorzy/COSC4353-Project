const registration = () => {
    return ( <>
    <div>
    <h1>Registration</h1>
        <p>
                <label htmlFor="name">Fullname:</label>
               <input type="text" id="name" name="name" maxLength="50" required/>
        </p>
        <p>
                <label htmlFor="password">Password:</label>
               <input type="text" id="password" name="password" maxLength="50" required/>
        </p>
        <button>Register</button>
        
    </div>
    </> );
}
 
export default registration;