import React, { useContext } from 'react';
import noteContext1 from '../context/noteContext1';

const NoteItem = (props) => {
    const context=useContext(noteContext1);
    const {deleteNote}=context;
    const {note,updateNote}=props;
  return (
    <div className='col-md-3'>
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">{note.title}</h4>
                <p class="card-text">{note.description}</p>
                <p class="card-text">{note.tag}</p>
                <button onClick={()=>{deleteNote(note._id)}}>Delete</button>
                <button onClick={()=>{updateNote(note)}}>Update</button>
                {/* <button>Update</button> */}
            </div>
        </div>
    </div>
  );
};

export default NoteItem;
