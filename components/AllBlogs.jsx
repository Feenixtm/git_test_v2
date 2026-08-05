import React from 'react'

import { useState, useEffect } from "react";

const AllBlogs = () => {
    const [allBlogs, setAllBlogs] = useState([]);

    useEffect(() => {

        async function fetchBlogs() {
            console.log("Retrieving all Blog Post titles for now...");

            try {
                const response = await fetch("http://localhost:5050/all-blogs");
                
                if (!response.ok) {
                    throw new Error("Data retrieval failed");
                }

                const data = await response.json();
                // console.log(data);

                setAllBlogs([...data]);

            } catch (error) {
                console.error("Error retrieving data...")
            }
        }

        fetchBlogs();
    }, [])

    return (
        <div className='flex flex-col gap-2'>
            <h1>All Blogs</h1>

            <div className='flex gap-2 border px-6 py-4 w-fit'>
                {
                    allBlogs.map((blog, index) => {
                        return (
                            <a href='http://www.google.com' className='flex flex-col gap-2 border p-4 w-fit'>
                                <h2>{ blog.title }</h2>
                                <p className='text-[0.75rem]'>{ blog.content }</p>
                            </a>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AllBlogs