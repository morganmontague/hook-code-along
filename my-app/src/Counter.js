import { useState } from "react";

function Counter (props) {
const [count, setCount] = useState(0);

function HandleClick () {
    console.log('click')
    setCount(count + 1)
}

function MyButton (count, onClick) {
    return (
        <>
        <button onClick={HandleClick} className={'TestButton'}>
             Click me
             </button>
        <H1Area count={count} />
        </>
    )
}

function H1Area () {
    return (
    <h1>{count}</h1>
    )
}

return(
    <>
    <MyButton count={count} onClick={HandleClick} />
    
    </>
)
}

export default Counter