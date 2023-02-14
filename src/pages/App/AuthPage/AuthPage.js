import SignUpForm from "../Components/SignUpForm/SignUpForm"
import LoginForm from "../Components/LoginForm/LoginForm"

export default function AuthPage({ setUser }) {
	return (
		<>
			<h2>Note Maker</h2>
            <SignUpForm setUser={setUser} />
			<LoginForm setUser={setUser} />
		</>
	)
}