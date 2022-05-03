import {useState } from 'react'

export const Message =() =>{
    const [message, setMessage] = useState('Welcome Visitor')
    return (
        <div>
            <h2>{message}</h2>
            <button onClick={() => setMessage('Thank you for Subscribing!')}>subscribe</button>
        </div>

    )
}