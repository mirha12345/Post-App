import React, { useState } from 'react';

const FormEmail = () => {
    const [email, setEmail] = useState("");
    const handle = (e) => {
        e.preventDefault()
        
        let emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailValidation.test(email)) {
            alert("Enter a Valid Email-Address (e.g., mailto:name@example.com)")
            return ;
        }
        else {
            alert("Email Submitted ")
        }
    }

    return (
        <div>
            <h3>Q 12: Create a form with input field for email. Validate the 'Email' field to ensure it follows a standard
                email format (e.g., mailto:name@example.com). Display an error message for invalid email formats.</h3>

            <form onSubmit={handle}>
                <input type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} ></input>
                <button className="btn btn-success" type="submit" style={{ margin: 10 }}>submit</button>
            </form>
            <hr />
        </div>
    );
}

export default FormEmail;