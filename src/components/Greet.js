
export const Greeting = (props) => {
    return (
        <div style={{margin: "0 50px"}}>
            <h1>
                Hello {props.name}. Original Language is: {props.programming}
            </h1>
            {props.children}
        </div>
    )
}

// export default Greet