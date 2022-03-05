import React,{useState} from 'react'

function HookCounter() {
    const initialCount=0
    const [count,setCount]= useState(initialCount)
   const incrementFIve=()=>{
     for(let i=0;i<5;i++){
       setCount(preCount=>preCount+1)
     }
    }
  return (
    <div>
    <h1>Count:{count}</h1>
    <button onClick={()=>setCount(count+1)} >Counter increment</button>
    <button onClick={()=>setCount(count-1)} >Counter decrement</button>
    <button onClick={()=>setCount(initialCount)} >Counter reset</button>
    <button onClick={incrementFIve} >increment 5</button>
    </div>
  )
}

export default HookCounter