import React, { useState } from 'react'
import './Register.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Register() {
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();
  
  async function handleClick(e){
    e.preventDefault();
    try {
      await axios.post("https://good-notes.onrender.com/register",{username,email,password})
      .then(res=>{
        if(res.data==="Registered"){
          navigate("/home",{state:{id:email}});
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginRight">
            <form className="loginBox" >
                <input placeholder='Username' onChange={(e)=>{setUsername(e.target.value)}} required className="loginInput" /> 
                <input placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}} type='email' required className="loginInput" />
                <input placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}} type='password' required  className="loginInput" />
                <button className="loginButton" onClick={handleClick} type='submit'>Sign Up</button>
                <button className="registerButton" onClick={()=>{navigate("/")}}>Login</button>
            </form>
        </div>
      </div>
    </div>
  )
}
