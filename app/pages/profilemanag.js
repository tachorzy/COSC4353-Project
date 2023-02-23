const profileman =  () => {
    return ( 
        <div>
            <h1>Profile Management</h1>
            <p>
                <label htmlFor="name">Fullname:</label>
               <input type="text" id="name" name="name" maxLength="50" required/>
            </p>
            <p>
               <label htmlFor="name">Address 1:</label>
               <input type="text" id="name" name="name" maxLength="100" required/>
            </p>
            <p>
               <label htmlFor="name">Address 2:</label>
               <input type="text" id="name" name="name" maxLength="100"/>
            </p>
		    <p>
               <label htmlFor="name">City:</label>
               <input type="text" id="name" name="name" maxLength="100" required/>
            </p>
		    <p>
               <label htmlFor="State">State: </label>
               <select id="State" name="State" required>
                  <option value="">Choose one...</option>
                  <option>AL</option>
			    <option>CA</option>
                  <option>TX</option>
               </select>
            </p>
            <p>
               <label htmlFor="name">Zipcode:</label>
               <input type="text" id="name" name="name" maxLength="9" minLength="5" required/>
            </p>
            
            <button>Submit</button>
        </div>
     );
}
 
export default profileman;