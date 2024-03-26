import React,{useReducer} from 'react';

const initialState={firstCounter:0,
                     secondCounter:5}
const reducer=(state,action)=>{
    switch(action.type)
    {
        case 'increment1':
            return {...state,firstCounter:state.firstCounter+action.value}

        case 'dcrement1':
            return {...state,firstCounter:state.firstCounter-action.value}

        case 'increment2':
                return {...state,secondCounter:state.secondCounter+action.value}

        case 'dcrement2':
            return {...state,secondCounter:state.secondCounter-action.value}

        case 'resert':
                return initialState

             default:
              return state

    }
}
function Counter2(){
    const [count,dispatch]=useReducer(reducer,initialState)
    return(
        <div> 
            count-{count.firstCounter}
       <button onClick={()=>dispatch({type:'increment1',value:1})}>Increment by 1</button>
    <button onClick={()=>dispatch({type:'dcrement',value:1})}>Decrement by 1</button>
    <button onClick={()=>dispatch({type:'reset'})}>reset</button>
        </div>
    //     <div> 
    //         count-{count.firstCounter}
    //    <button onClick={()=>dispatch({type:'increment1',value:1})}>Increment by 1</button>
    // <button onClick={()=>dispatch({type:'dcrement',value:1})}>Decrement by 1</button>
    // <button onClick={()=>dispatch({type:'reset'})}>reset</button>
    //     </div>
       
    )
}
export default Counter2