import React, { useContext, useState } from 'react'
import noteContext from "../context/notes/noteContext"

const AddNote = (props) => {
    const context = useContext(noteContext);
    const { addNote } = context;
    const [notes, setNote] = useState({ title: "", description: "", tag: "", date: "" })

    const handleClick = (e) => {
        e.preventDefault();
        console.log(notes.title, notes.description, notes.tag, notes.date);
        addNote(notes.title, notes.description, notes.tag, notes.date);
        setNote({ title: "", description: "", tag: "", date: "" });
        props.showAlert("Added successfully", "success");
    }

    const onChange = (e) => {
        setNote({ ...notes, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className="container my-3">
                <h2>Add a Note</h2>
                <form className="my-3">
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={notes.title} onChange={onChange} minLength={5} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" name="description" value={notes.description} onChange={onChange} minLength={5} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input type="text" className="form-control" id="tag" name="tag" value={notes.tag} onChange={onChange} minLength={5} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="date" className="form-label">Date</label>
                        <input type="date" className="form-control" id="date" name="date" value={notes.date} onChange={onChange} required />
                    </div>
                    <button disabled={notes.title.length < 5 || notes.description.length < 5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
                </form>
            </div>
        </>
    )
}

export default AddNote
