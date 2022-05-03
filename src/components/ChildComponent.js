export const ChildComponent = (props)=>{
    return (
        <div>
            <button onClick={() => props.greetHandler('collins')}>Greet Parent</button>
        </div>
    )
}