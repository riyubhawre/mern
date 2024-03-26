import React,{useState} from 'react';

function Counter3() {
    const [count1,setCount1]=useState(0)
    const [count2,setCount2]=useState(0)
    const incrementOne=()=>{
        setCount1(count1+1)
    }
    const incrementTwo=()=>{
        setCount2(count2+2)
    }
  return (
    <div>
      <button onClick={incrementOne}>count 1 -{count1}</button>
      <button onClick={incrementTwo}>count 2 -{count2}</button>
    </div>
  );
}

export default Counter3;
