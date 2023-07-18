import React, { useEffect, useState } from 'react'
import './NotesContainer.css'
import Note from '../Note/Note'
import axios from 'axios';
import CreateNote from '../CreateNote/CreateNote'

export default function NotesContainer({email}) {
  const [notes, setNotes] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(()=>{
    const fetchNotes = async()=>{
      const res = await axios.get("https://good-notes.onrender.com/home/"+email);
      setNotes(res.data);
    }
    fetchNotes();
  },[email,notes]);  

  return (
    <div className='container'>
        <div className='notesContainer'>
            <input className='search' placeholder='Search...' onChange={(e)=>{console.log(e.target.value);setQuery(e.target.value)}}></input>
            <CreateNote email={email}/>
            {notes.filter((note)=>note.title.toLowerCase().includes(query.toLowerCase())).map((note)=>
                <Note 
                    key={note._id}
                    id={note._id}
                    title={note.title}
                    desc={note.content}
                    email={email}
                />
            )}
        </div>
    </div>
   
  )
}
