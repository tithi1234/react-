import React,{useState} from 'react'

function HookCounter() {
    const [count,setCount]= useState(1)
  return (
    <div>
    <h1>Count:{count}</h1>
    <button onClick={()=>setCount(count+1)} >Counter</button>
    </div>
  )
}

export default HookCounter