import React, {useState, useContext, useEffect} from "react";
import NotesContext from '../context/notes-context';
import useMousePosition from '../hooks/useMousePosition'

const Note = ({ note }) => {
    // Without a dependency specified, changing props in the parent Component
    // will result in Note being "re-rendered", and useEffect would be called
    // useEffect(() => {
    //     console.log('Setting up effect!');
	//
    //     // Returning a function is similar to componentDidUnmount (optional)
    //     return () => {
    //         console.log('Cleaning up effect');
    //     }
    // }, [])

    // Set up state to track x and y position
    // Set up event to listen for mouse mov't
    // If component unmounted, remove event listener (useEffect)

    const {dispatch} = useContext(NotesContext);
    const position = useMousePosition();

    return (
        <div>
          <h3>{note.title}</h3>
          <p>{note.body}</p>
            <p>{position.x}, {position.y}</p>
          {/*Including just removeNote wouldn't let it be called with the right arguments*/}
          <button onClick={() => dispatch({type: 'REMOVE_NOTE', title: note.title})}>x</button>
      </div>
    )
}

export {Note as default};
