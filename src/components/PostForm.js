import { useState } from "react"

export const PostForm = ()=>{
    //create states for each field
    const [userId, setUserId] = useState('')
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')

    const handleSubmit= (event)=>{
        event.preventDefault()
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            body: JSON.stringify({
                userId: userId,
                title: title,
                body: body
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then( (response) => response.json())
        .then( (json) => console.log(json))
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" placeholder ="user id" value={userId} 
                        onChange={(e)=>setUserId(e.target.value) } />
            </div>
            <div>
                <input type="text" placeholder ="title" value={title} 
                        onChange={ (e)=>setTitle(e.target.value)} />
            </div>
            <div>
                <textarea cols={20} rows={10} placeholder ="body" value={body} 
                        onChange={(e)=>setBody(e.target.value)}></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}