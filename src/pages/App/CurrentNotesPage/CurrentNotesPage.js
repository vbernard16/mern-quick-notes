import { checkToken } from "../../../utilities/users-service"

export default function CurrentNotesPage() {

    async function handleCheckToken() {
        checkToken()
            .then(alert)
    }

    return (
        <>
            <h2>Your Notes</h2>
            <button onClick={handleCheckToken}>check my notes</button>
        </>
        )
}