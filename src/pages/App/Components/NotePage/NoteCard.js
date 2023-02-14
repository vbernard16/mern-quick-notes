import { useState } from "react"

export default function NoteCard(){
    const [note, setNote] = useState({
        note: ''
    })

    const handleChange = (event) => {
        setNote({
            ...note,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
            event.preventDefault()
            setNote(note)
    }

    return(
        <div>
            <h2>Create a new note</h2>
            <form onSubmit={handleSubmit}>
                <input
                     onChange={handleChange} 
                     type="text" name="note"
                     placeholder="new note">
                </input>
                <button type="submit">Add note</button>
            </form>

        </div>
    )
}