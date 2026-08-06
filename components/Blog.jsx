import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

const Blog = (props) => {

    const { id } = useParams();
    const [blog, setBlog] = useState({
        title: "ERROR. TITLE MISSING",
        content: "ERROR. CONTENT MISSING"
    })

    useEffect(() => {

        // v.2 Code (Below)
        async function fetchData() {
            try {
                const response = await fetch(`http://localhost:5050/blogs/${id}`);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`)
                }

                const data = await response.json();
                setBlog(data);
                console.log(data);
            } catch (error) {
                console.error("An error occurred when trying to retrieve this blog post.")
            }
        }

        fetchData();
    }, [])

    return (
        <div>
            <h1>{ blog.title }</h1>
            <p>{ blog.content }</p>
            <Link className='link-text' to="/git_test_v2/">Return Home</Link>
        </div>
    )
}

export default Blog