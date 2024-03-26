import React,{useState,useEffect} from 'react';

function HookMouse() {
    const[x,setX]=useState(0)
    const[y,setY]=useState(0)
    const logMousePosition=e=>{
        console.log("mouse event")
        setX(e.clientX)
        setY(e.clientY)
    }
    useState(()=>{
        console.log("call")
        window.addEventListener('mousemove',logMousePosition)
    },[])
  return (
    <div>
      x-{x} y-{y}
    </div>
  );
}

export default HookMouse;
