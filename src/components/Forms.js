import { useState } from "react"

export const Forms =()=>{
    const [username,setUsername] = useState('')
    const [message, setMessage] = useState('')
    const [country, setCountry] = useState('')
    const handleSubmit=(event) =>{
        event.preventDefault()
        alert(`Submited ${username} and the message was ${message},He is from ${country}`)
    }
    return <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">Username</label>
            <input type="text" 
                value={username} 
                onChange={(event) => setUsername(event.target.value) }
            />
        </div> <br/>
        <div>
            <label htmlFor="username">Country</label>
            <select value={country} onChange={(event) => setCountry(event.target.value)}>
                <option value="Kenya">Kenya</option>
                <option value="Uganda">Uganda</option>
                <option value="Tanzania">Tanzania</option>
            </select>
        </div> <br/>
        <div>
            <label>Message</label>
            <textarea cols={20} rows={10} value={message} 
                onChange={ (event) =>setMessage(event.target.value) }>
            </textarea>
        </div>
        <button type="submit">Submit</button>
    </form>
}