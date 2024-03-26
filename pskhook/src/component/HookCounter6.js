import React,{useState,useEffect} from 'react';

export default function HookCounter6() {
    const[count,setCount]=useState(0)
    const[name,setName]=useState('')

    useEffect(()=>{
        console.log("update")
                        document.title='you clicked ${count}'
    },[count])
  return (
    <div>
      <input type="text" value={name} onChange={e=>setName(e.target.value)}></input>
      <button onClick={()=>setCount(count+1)}>click{count}</button>
    </div>
  );
}
