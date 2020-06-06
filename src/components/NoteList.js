import Note from "./Note";
import React, {useContext} from "react";
import NotesContext from '../context/notes-context';

const NoteList = () => {
     const {notes} = useContext(NotesContext);

     return notes.map((note) => (
         <Note key={note.title} note={note}/>
     ))
}

export {NoteList as default}
