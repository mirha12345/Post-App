import React, { useState } from 'react';
const FormPassword = () => {
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');


    const handle = (e) => {
        e.preventDefault()
        if (password === checkPassword ) {
            alert("Password Accepted")
            return;
        }

        else {
            alert("Password Not Matched")

        }
    }


    return (
        <div>
            <h4>Q 13.</h4>
            <form onSubmit={handle}>
                <input type="password" style={{ margin: 5 }} value={password} placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} required></input>
               <br /> <input type="password" style={{ margin: 5 }} value={checkPassword} placeholder="Re-Enter Password" onChange={(e) => setCheckPassword(e.target.value)} required></input>

              <br />  <button className="btn btn-primary" type="submit" style={{ margin: 10 }}>submit</button>
            </form>

            <hr />
        </div>
    );
}

export default FormPassword;