import React,{ useState,useEffect} from 'react';

function HookCounter5(){
    const[count,setCount]=useState(0)
   useEffect(()=>{
    document.title=`Hook clickes times ${count}`
   })
   return(
    <div>
        <button onClick={()=>setCount(count+1)}>click{count}</button>
    </div>
   );
}
export default HookCounter5;
