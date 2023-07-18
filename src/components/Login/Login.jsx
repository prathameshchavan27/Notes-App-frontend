import React, { useState } from 'react'
import './Login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    async function handleClick(e){
        e.preventDefault();
        try {
            await axios.post("https://good-notes.onrender.com/",{email,password})
            .then(res=>{
                if(res.data==="Valid"){
                    navigate("/home",{state:{id:email}});
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginRight">
                    <form className="loginBox" >
                        <input placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}} type='email' required className="loginInput" />
                        <input placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}} type='password' minLength={8} required className="loginInput" />
                        <button className="loginButton" onClick={handleClick}>Login</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="registerButton" onClick={()=>{navigate("/register")}}>Create Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

// {isFetching? <CircularProgress color="white" size="20px" /> : "Login"}
