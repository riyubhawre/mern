import React,{useState} from 'react';

function HookCounter2() {
    const intitalCount=0
    const [count,setCount]=useState(intitalCount)

    const incrementTen=()=>
    {
        for(var i=0;i<10;i++)
        {
            //setCount(count+1)
            setCount(prevCount=>prevCount+1)
        }
    }
  return (

    <div>
      count:{count}
   <button onClick={()=>setCount(intitalCount)}>Reset</button><br/>
   <button onClick={()=>setCount(count+1)}>Increment</button><br/>
   <button onClick={()=>setCount(count-1)}>Decrement</button><br/>
   <button onClick={incrementTen}>Increment by 10</button><br/>
    </div>
  );
}

export default HookCounter2;
