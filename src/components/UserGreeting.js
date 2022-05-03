export const UserGreetings = () =>{
    const isLoggedIn = false

    return <h2>Welcome {isLoggedIn && 'Collins'}</h2>
}