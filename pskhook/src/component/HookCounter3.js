import React,{useState} from 'react';

function HookCounter3() {
    const[name,setName]=useState({firstName:'first',lastName:'last'})
  return (
    <div>
      <form>
        <input type="text" value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})}></input>
        <input type="text" value={name.lastName} onChange={e=>setName({...name,lastName:e.target.value})}></input>
        <h1>First Name:{name.firstName}</h1>
        <h1>Last Name:{name.lastName}</h1>
      </form>
    </div>
  )
}

export default HookCounter3;
