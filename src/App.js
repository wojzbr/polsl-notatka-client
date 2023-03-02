import Note from './note/Note';
import Table from './table/Table'
import getDate from "./methods/getDate";
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// THIS FILE CONTAINS ROUTING TO UPDATE


let mockData = [{
  id: 123,
  author: "Autor",
  title: "asd", 
  title_ENG: "zxc", 
  offer_id:"asd",
  offer_subject:"zxc", 
  offer_subject_ENG:"asd",
  protection_form:"zxc", 
  protection_form_ENG:"zc", 
  offer_scope:"zxc", 
  offer_scope_ENG:"zxc",
  technology_readiness_level:"zxc", 
  technology_readiness_level_ENG:"zxc",
  trading_conditions:"zxc", 
  trading_conditions_ENG:"zxc", 
  authors:"zxc", 
  authors_ENG:"zxc", 
  invention_photo:"zxc",
  invention_photo_ENG:"zxc",
  photo_description:"zxc",
  photo_description_ENG:"zxc",
  date_added: getDate(),
  date_last_edited: "-"
}]


function App() {

  const [notes, setNotes] = useState([])
  const [filteredNotes, setFilteredNotes] = useState([])

  useEffect(()=>{
    setNotes(mockData)
    setFilteredNotes(mockData)
  },[])

  const filterNotes = () => {
    setFilteredNotes(notes.filter(note => (
      note.title.toUpperCase().includes(document.getElementById("formSearchbox").value.toUpperCase()) ||
      `rjo4/${note.note_id}`.toUpperCase().includes(document.getElementById("formSearchbox").value.toUpperCase())
    )))
  }

  return (
    <Router>
      <Routes>
        {/* <Route path="/login" element={ <LogIn setIsAuthenticated={setIsAuthenticated}/> }/> */}
        <Route path="polsl-notatka-client/" element={
          <>
            <div className="no-print" style={{height: "50px"}}></div>
            <input id="formSearchbox" placeholder="Proszę zacząć wpisywać tytuł w celu wyszukania notatki..." onInput={()=>{filterNotes()}}/>
            <Table notes={filteredNotes}/>
          </>
        }/>
        <Route path="polsl-notatka-client/notatka" element={ <Note/> }/>
      </Routes>
    </Router>
  );
}

export default App;
