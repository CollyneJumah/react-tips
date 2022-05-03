import { useState, useEffect } from "react"

export const PostList = ()=>{
    const alignment = {
        textAlign: 'left',
        textDecoration:"none"
    }
    const [posts,setPosts] = useState([])

    useEffect( ()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then( (response) => response.json())
        .then( (data) => setPosts(data))
        .catch( (error)=>{
            console.log(error)
        })
    }, [])

    return <div style={alignment}>
        <ol type="1">
            {
                posts.map( post => {
                    return (
                        <>
                            <li key={post.id}>{post.title}</li>
                        </>
                    )
                })
            }
        </ol>
    </div>
}