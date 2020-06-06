import React, {useState, useContext} from "react";
import NotesContext from '../context/notes-context';
import useMousePosition from '../hooks/useMousePosition';

const AddNoteForm = () => {
	const {dispatch} = useContext(NotesContext);
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const position = useMousePosition();

	const addNote = (e) => {
		 // Prevent hard refresh
		 e.preventDefault();

		 // Add form vals to notes array
		 // setNotes([
		 //     ...notes, // keep existing notes
		 //     {title, body}
		 // ])
		 dispatch({type: 'ADD_NOTE', title, body})

		 // Reset inputs
		 setTitle('');
		 setBody('');
	 }

	return (
		<>
			<p>Add Note - {position.x} - {position.y}</p>
			<form onSubmit={addNote}>
			  <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder='title'/>
			  <input value={body} onChange={(e) => setBody(e.target.value)} placeholder='body'/>
			  <button>Add Note</button>
			</form>
		</>
	)
}

export {AddNoteForm as default}
