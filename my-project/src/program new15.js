import React, { useState } from 'react';
const RegistrationForm1 = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('')
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');

    const HandleLogin = (e) => {
        e.preventDefault()
        if (username === "" || email === "" || age === "" || password === "" || checkPassword === "") {
            alert("All fields must be filled out");
            return;
        }
        //full form ---> if (is not a number(age))
        if (isNaN(age)) {
            alert("Age must be a number");
            return;
        }
        if (password !== checkPassword) {
            alert("Passwords do not match");
            return;
        }
        if (password.length < 6 || password.length > 12 ) {
            alert("Password must be between 6 and 12 characters");
            return;
        }
        alert("Registration successful!");
    }
    return (
        <div>
            <h5>question 15</h5>
            <div className='shadow-lg rounded' style={{ textAlign: 'center', borderRadius: '10px', padding: '12px' }}>
                <form onSubmit={HandleLogin}>
                    <h2> Registration</h2>
                    {/ Username /}
                    <input type="text" style={{ margin: 5 }} value={username} placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)} ></input> <br />
                    {/ Email-Address /}
                    <input type="email" style={{ margin: 5 }} value={email} placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)} req ></input> <br />
                    {/ Age /}
                    <input type="text" style={{ margin: 5 }} value={age} placeholder="Enter Your Age"
                        onChange={(e) => setAge(e.target.value)} ></input> <br />
                    {/ Password and Check-Password /}
                    <input type="password" style={{ margin: 5 }} value={password} placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)} ></input> <br />
                    <input type="password" style={{ margin: 5 }} value={checkPassword} placeholder="Confirm Password"
                        onChange={(e) => setCheckPassword(e.target.value)} ></input> <br />
                    {/ Button /}
                    <button className="btn btn-primary" type="submit" style={{ margin: 10 }}>Register</button>
                </form>
            </div>

            <hr />
        </div>
    );
}

export default RegistrationForm1;