import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import './App.css';
import NewNotesPage from './NewNotesPage/NewNotesPage';
import AuthPage from './AuthPage/AuthPage';
import NavBar from './Components/NavBar';
import { getUser } from '../../utilities/users-service';
import CurrentNotesPage from './CurrentNotesPage/CurrentNotesPage';

//The App component is where we define ALL of our client-side-routes
// Components that want to define client-side routes have to render a <Routes> comp
// So that means that most of the components that want to define client-side routes will 
// be in our App component and have to render a <Route> component

export default function App() {
  const [user, setUser] = useState(getUser())

 return (
		<main className='App'>
			{user ? (
				<>
					<NavBar user={user} setUser={setUser}/>
					<Routes>
						<Route path='/notes/new' element={<NewNotesPage />} />
						<Route path='/notes' element={<CurrentNotesPage />} />
					</Routes>
				</>
			) : (
				<AuthPage setUser={setUser} />
			)}
		</main>
	)
}