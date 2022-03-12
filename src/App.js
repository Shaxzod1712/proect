import React from "react";
import Login from './Login/Login'
import Register from './Register/Register'


const App = () =>{

    return(
        <>
        {/* <WrapperNavbar>
                    <Login>Login</Login>|<Register >Register</Register>
        </WrapperNavbar> */}
            <Login/>
            <Register />
        </>
    )
    
    
}

export default App


// if(state){
//     return <Login onClick={onClick}/>
// } else return <Register onClick={onClick}/>

























// import React, {useState, useEffect}  from "react";


// const App = () => {

//     const localData = localStorage.getItem('fruits')
//     const [name, setName] = useState('')
//     const [todos, setTodos] = useState(localData ? JSON.parse(localData) : [])

//     const onSabmit =()=>{
//         setTodos((prev)=>(
//             [...prev, {id: Date.now(), name: name}]
//         ))
//         setName('')
//     }

//     useEffect(()=>{
//         localStorage.setItem('fruits', JSON.stringify(todos))
//     }, [todos])

//     const Clear =()=>{
//         localStorage.clear()
//         setTodos([])
//     }
//     return(
//         <div>
//             <input value={name} onChange={(e)=>setName(e.target.value)}/>
//             <button onClick={onSabmit}>Submit</button>
//             <div>
//                 {
//                     todos.map((value)=>(
//                         <h1>{value.name}</h1>
//                     ))
//                 }
//             </div>
//             <button onClick={Clear}>clear</button>
//         </div>
//     )
// }

// export default App