import React from 'react'
import {ImPencil2} from 'react-icons/im'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className='navigation'>
      <div className='logo'>Good Notes
        <span className="logoImg"><ImPencil2/></span>
      </div>
      <div className="loginbutton" onClick={()=>{navigate("/")}}><span className='logintext'>Logout</span></div>
    </div>
  )
}
