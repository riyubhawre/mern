import React,{useState,useEffect} from 'react';
import useDocument from './useDocument';

function CustomHook() {
    const[count,setCount]=useState(0)

    useDocument(count)
    //useEffect(()=>{
      //  document.title='count $(count)'
    //},[count])
  return (
    <div>
      <button onClick={()=>{setCount(count+1)}}>counter{count}</button>
    </div>
  );
}

export default CustomHook;
