// import  useEffect from 'react'
// import useState from 'react'
// import axios from 'axios'

// // const [count, setCount] = useState(0)

// function APIButton () {
//     const [tex, setTex] = useState('')
//     let resp 
//     let randomFact
//     useEffect(() => {
//         axios.get('https://uselessfacts.jsph.pl/random.json?language=en')
//             .then((resp) => randomFact(resp.data.text))
//             tex = resp.data.text
//     },[])                  

//     return(
//         <>
//         <p>{tex}</p>
//         </>
//     )
// }

// export default APIButton

// // fetch(`https://uselessfacts.jsph.pl/random.json?language=en`)