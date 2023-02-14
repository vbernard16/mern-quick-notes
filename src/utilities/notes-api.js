import { getToken } from './users-service'

const BASE_URL = '/api/notes'

export async function createNote(noteInput){
    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(noteInput)
    })
    if (res.ok){
        return res.json()
    } else{
        throw new Error('Cannot create new note')
    }
}
