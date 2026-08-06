import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import '../styles/App.css'

import SignUpForm from '../components/SignUpForm'
import LoginForm from '../components/LoginForm';
import AllBlogs from '../components/AllBlogs';
import Blog from '../components/Blog';

function App() {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		// console.log("Fetching...")

		async function getData() {
			try {
				const response = await fetch("http://localhost:5050/all-users");
				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}

				const data = await response.json();
				// console.log(data);
			} catch (error) {
				console.error("Fatal error:", error);
			}		
		}

		getData();
	}, [])

	const Home = () => {
		return (
			<div className='flex flex-col gap-8'>
				<div className='flex gap-4'>
					<h1 className='text-red-500'>Blog Site</h1>

					{
						currentUser !== null && <p>Hello { currentUser.username }</p>
					}
				</div>

				<AllBlogs Link={ Link }/>
				<SignUpForm/>
				<LoginForm setCurrentUser={ setCurrentUser }/>
			</div>
		)
	}

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/git_test_v2" element={ <Home/> }/>
				<Route path="/git_test_v2/:id" element={ <Blog/> }/>
			</Routes>
		</BrowserRouter>
	)
}

export default App
