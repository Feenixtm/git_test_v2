import React from 'react'
import { useState } from 'react'

const LogInForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <form>
            <div className='flex flex-col'>
                <label htmlFor="">Username</label>
                <input type="text" className='border'value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div>

            <div className='flex flex-col'>
                <label htmlFor="">Password</label>
                <input type="password" className='border'value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
        </form>
    )
}

export default LogInForm