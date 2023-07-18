import React from 'react'
import './Note.css'
import axios from 'axios';
export default function Note(props) {
  async function handleClick(event) {
    event.preventDefault();
    await axios.delete("https://good-notes.onrender.com/home/"+props.email+"/"+props.id);
    window.location.reload();
  }
  return (
    <div className='Note'>
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
        <button onClick={handleClick}>delete</button>
    </div>
  )
}
