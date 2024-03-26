import React,{useState} from 'react';

function HookCounter4(){
const [items,setItem]=useState([])
const addition=()=>{
    setItem([...items,{
        id:items.length,
        value:Math.floor(Math.random()*10)+1
    }])
}
return(
    <div>
    <button onClick={addition}>add</button>
    <ul>
    {
        items.map(item=>
            <li key={item.id}>
            {item.value}
            </li>)
    }</ul>
    </div>
)
}
export default HookCounter4;