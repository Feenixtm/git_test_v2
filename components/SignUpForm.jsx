import React from 'react'
import { useState, useEffect } from 'react'

const SignUpForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const submitForm = async (e, username, password) => {
        e.preventDefault();

        console.log("Submitting form...")
        // console.log({ username: username, password: password });

        try {
            const response = await fetch("http://localhost:5050/sign-up", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                throw new Error("Authentication failed");
            }

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error("Fatal error:" + error);
        }
    }

    return (
        <div>
            <h1 className='text-[1.25rem] font-semibold'>SIGN-UP</h1>
        
            <form className='flex flex-col gap-1 max-w-[16rem] '>
                <div className='flex flex-col'>
                    <label htmlFor="">Username</label>
                    <input type="text" className='border'value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="">Password</label>
                    <input type="password" className='border'value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <button className='border px-4 py-1 cursor-pointer' onClick={(e) => submitForm(e, username, password)}>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm