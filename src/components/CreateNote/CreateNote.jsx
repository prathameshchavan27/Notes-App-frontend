import React, { useState } from 'react'
import './CreateNote.css'
import axios from 'axios';



export default function CreateNote(props) {
  const [note,setNote] = useState({
    userId:"",
    title:"",
    content:""
  });

  const handleChange = (event)=>{
    const { name, value } = event.target;
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  async function submitNote(event) {
    event.preventDefault();
    try {
      await axios.post("/home/"+props.email,note);
      setNote({
        userId:"",
        title:"",
        content:""
      });
      // window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div >
      <form className='notetemp' action="/">
        <input className='title' type="text" 
            name='title'
            onChange={handleChange}
            value={note.title}
            placeholder='Title'
        />
        <textarea className="desc" ctype="text" 
            name='content'
            onChange={handleChange}
            value={note.content}
            placeholder='Content'
        />
        <button className="addNote" type="submit"
            onClick={submitNote}
        >Add</button>
      </form>
    </div>
  )
}
