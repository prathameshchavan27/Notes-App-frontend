import React from 'react'
import Navbar from '../Navbar/Navbar';
import NotesContainer from '../NotesContainer/NotesContainer';
import { useLocation } from 'react-router-dom';

export default function Home() {
  const location = useLocation();
  return (
    <div>
        <Navbar/>
        <NotesContainer email={location.state.id}/>
    </div>
  )
}
