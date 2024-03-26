import React, { useState } from "react";
import NoteContext from "./noteContext1";
// import fetchuser from "../../backend/fetch/Fetchuser";

const NoteState = (props) => {
  const host = "http://localhost:3002";
  const notesInital = [];

  const [notes, setNotes] = useState(notesInital);

  //fetch all notes from database
  const getNote = async () => {
    const response = await fetch(`${host}/api/notes/fetchuser`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVmNDM2OGFkN2FkZWI3YzBlZWJhMTY4In0sImlhdCI6MTcxMDUwMzU2Mn0.-RG281wn2uiaQD2RGs_Sprlxz-TcDQXwoeCxUXMKbrs",
      },
      // body: JSON.stringify(data),
    });
    const json = await response.json();
    // return response.json();
    console.log(json);
    setNotes(json);
  };

  //add notes
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVmNDM2OGFkN2FkZWI3YzBlZWJhMTY4In0sImlhdCI6MTcxMDUwMzU2Mn0.-RG281wn2uiaQD2RGs_sprlxz-TcDQXwoeCxUXMKbrs",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json({ title, description, tag });
    // return response.json();
    console.log(json);
    //setNotes(json)
    //}
    console.log("adding new note");
    const note = {
      _id: "65f03e265def3d902b58c2ae",
      user: "65f4368ad7adeb7c0eeba168",
      title: title,
      description: description,
      tag: tag,
      date: "2024-03-12T11:36:06.659Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  //Delete note
  // const deleteNote = (id) => {
  //   console.log("deleteting notes" + id);
  //   const newNote = notes.filter((note) => {
  //     return note._id !== id;
  //   });
  //   setNotes(newNote);
  // };

  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVmNDM2OGFkN2FkZWI3YzBlZWJhMTY4In0sImlhdCI6MTcxMDUwMzU2Mn0.-RG281wn2uiaQD2RGs_sprlxz-TcDQXwoeCxUXMKbrs",
      },
      //  body: JSON.stringify({title,description,tag})
    });
    const json = await response.json();
    console.log(json);
    console.log("deleting notes" + id);
    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNote);
  };

   // edit with api database
   const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVmNDM2OGFkN2FkZWI3YzBlZWJhMTY4In0sImlhdCI6MTcxMDUwMzU2Mn0.-RG281wn2uiaQD2RGs_Sprlxz-TcDQXwoeCxUXMKbrs",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);

    var newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
      setNotes(newNotes);
    }
    
  };




  return (
    <div>
      <NoteContext.Provider value={{ notes, addNote, deleteNote, getNote, editNote }}>
        {props.children}
      </NoteContext.Provider>
    </div>
  );
};
export default NoteState;
