import { useState } from "react";

const Form = () => {
   const [name, setName] = useState("");
   const [phone, setPhone] = useState();
   const [email, setEmail] = useState("");
   const[password,setPassword] =useState("");

   const handle = (e) => {
      e.preventDefault()
      if (name.length <= 5) {
         alert("enter max 5 digit")
         return;
      }
      if (phone.length <= 11) {
         alert("enter max 11 digit")
         return;
      }
      if (email.length <= 10) {
        alert("enter max 9 digit")
        return;
     }
     if (password.length <= 1) {
        alert("enter max 5 digit")
        return;
     }
      else {
         alert("form is submit")
      }
   }
   return (
      <div>
         <h1>FORM Practice</h1>
         <form onSubmit={handle}>
            <input type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} ></input>
            <input type="number" value={phone} placeholder="Number" onChange={(e) => setPhone(e.target.value)} ></input>
            <input type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} ></input>
            <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} ></input>
            <button className="btn btn-primary" type="submit" style={{ margin: 10 }}>submit</button>
         </form>
      </div>
   );
}

export default Form;