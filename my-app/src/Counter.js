import { useState } from "react";
// import Button from "./Button";

function Counter (props) {
const [count, setCount] = useState(0);

function HandleClick () {
    console.log('click')
    setCount(count + 1)
}

function MyButton () {
    return (
        <>
        <button onClick={HandleClick} className={'ButtonCounter'}>
             Click me
        </button>
        <H1Area />
        </>
    )
}

function H1Area () {
    return (
    <h1 className="h1">{count}</h1>
    )
}

return(
    <>
    <MyButton />
    </>
)
}

export default Counter