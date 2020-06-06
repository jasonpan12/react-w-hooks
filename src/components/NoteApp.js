import React, {useEffect, useReducer, useState} from "react";
import notesReducer from "../reducers/notes";
import NoteList from "./NoteList";
import AddNoteForm from "./AddNoteForm";
import NotesContext from '../context/notes-context';

const NoteApp = () => {
    // Body and title states are just what's in the input
    // addNote adds those values into the notes state
    // const [notes, setNotes] = useState([])
    const [notes, dispatch] = useReducer(notesReducer, [] )

    useEffect(() => {
        const notes = JSON.parse(localStorage.getItem('notes'));
        if (notes) {
            dispatch({type: 'POPULATE_NOTES', notes})
            // setNotes(notesData);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes])

    return (
        // provides context to all children
        <NotesContext.Provider value={{notes, dispatch}}>
            <h1>Notes</h1>
            <NoteList/>
            <AddNoteForm/>
        </NotesContext.Provider>
    );
}

export {NoteApp as default};
