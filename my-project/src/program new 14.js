import React, { useState } from 'react';
const CheckLogin = () => {
    const users = [
        { email: 'mailto:user1@gmail.com', password: 'pass_1' },
        { email: 'mailto:user2@gmail.com', password: 'pass_2' },
      
    ];
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const HandleLogin = (e) => {
        e.preventDefault()
        const user = users.find((user) => user.email === email && user.password === password);
        if (user) {
            alert('Login successful!');

        } else {
            alert('Wrong email or password. Please try again.');
        }
    }
    return (
        <div>
            <h4>Q 14</h4>
            <div className='shadow-lg rounded'  style={{ textAlign: 'center', borderRadius: '10px', padding: '12px' }}>
                <form onSubmit={HandleLogin}>
                    <h2> Login to your Account</h2>
                    <input type="email" style={{ margin: 5 }} value={email} placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)} required></input> <br />
                    <input type="password" style={{ margin: 5 }} value={password} placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)} required></input> <br />
                    <button className="btn btn-warning" type="submit" style={{ margin: 10 }}>submit</button>
                </form>
            </div>
            <hr />
        </div>
    );
}

export default CheckLogin;