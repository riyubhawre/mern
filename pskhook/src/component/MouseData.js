import React,{useState} from 'react';
import HookMouse from './HookMouse';

function MouseData() {
    const[display,setDisplay]=useState(true)
  return (
    <div>
      <button onClick={()=>setDisplay(!display)}>toggle Display data</button>
      {display && <HookMouse/>}
    </div>
  );
}

export default MouseData;
