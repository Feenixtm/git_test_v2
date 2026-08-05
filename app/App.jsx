import { useState, useEffect } from 'react'
import '../styles/App.css'
import SignUpForm from '../components/SignUpForm'
import LoginForm from '../components/LoginForm';
import AllBlogs from '../components/AllBlogs';

function App() {
	

	useEffect(() => {
		// console.log("Fetching...")

		async function getData() {
			try {
				const response = await fetch("http://localhost:5050/all-users");
				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}

				const data = await response.json();
				console.log(data);
			} catch (error) {
				console.error("Fatal error:", error);
			}		
		}

		getData();
	}, [])

	return (
		<div className='flex flex-col gap-8'>
			<h1 className='text-red-500'>Blog Site</h1>

			<AllBlogs/>
			<SignUpForm/>
			<LoginForm/>
		</div>
	)
}

export default App
