import './App.css';
import { useState, useTransition } from 'react';
import USERS from './components/data.json'

function App() {
  const [query, setQuery] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [isPending, startTransition] = useTransition()
  const handleChange = (event) =>{
      setInputValue(event.target.value)
      // setQuery(event.target.value)
      startTransition(()=> setQuery(event.target.value))

  }
  const filteredUsers = USERS.filter( (user)=>{
    return user.first_name.includes(query) || user.last_name.includes(query)
  })
  return (
    <div className="App">
      <div>
        <lable>Search by first name or Last Name</lable>
        <input type="text" value={inputValue} onChange={handleChange}/>
      </div>
      {isPending && <p>updating table....</p>}
      <table border={1}>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
        {
          filteredUsers.map(user =>{
            return <tr>
                      <td>{user.first_name}</td>
                      <td>{user.last_name}</td>
                      <td>{user.email}</td>
                    </tr>
          } )
        }
      </table>
    </div>
  );
}

export default App;
