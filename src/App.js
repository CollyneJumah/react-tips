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
      <input type="text" value={inputValue} onChange={handleChange}/>
      {isPending && <p>updating list ...</p>}
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

      {/* <InlineStyling/>
      <StyleSheet />
      <Forms />
      <PostList /> 
      <PostForm />
      {/* 
      <NameList/>
      <hr/>
      <UserGreetings />
      <hr/>
      <ParentComponent />
      <hr />
      <ClickHandler />
      <hr/>
      <Message />
      <hr />
      <Greeting name="Angular" programming="JavaScript" />
      <Greeting name="Laravel" programming="PHP">
        <p>
        Laravel is a web application framework with expressive, elegant syntax. 
        We’ve already laid the foundation — freeing you to create without sweating the small things.
        </p>
        <button>Get started</button>
      </Greeting>
      <Greeting name="Django" programming="Python">
        <p>
        Django is a high-level Python web framework that encourages rapid development and clean, 
        pragmatic design. Built by experienced developers, it takes care of much of the hassle of web development, so you can focus on writing your app without needing to reinvent the wheel. 
        It’s free and open source.
        </p>
        <button style={ {backgroundColor: '#44B78B'}}>Get started withDjango</button>
      </Greeting> */}
    </div>
  );
}

export default App;
