import React,{useReducer,useEffect} from 'react';
import axios from 'axios';

const initialState={
    loading:true,
    error:'',
    post:{}
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'fetch':
            return{
                loading:false,
                post:action.payload,
                error:''
            }
            case 'error':
                return{
                    loading:false,
                    post:{},
                    error:'something wrong'
                }
                default:
                    return false
    }
}

function DataFetch2() {
    const [state,dispatch]=useReducer(reducer,initialState)
    {()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then(response=>{
            dispatch({type:'fetch',payload:response.data})
        })
        .catch(error=>{
            dispatch({type:'error'})
        })
    },[]}
  return (
    <div>
      {state.loading ? 'Loading':state.post.title}
      {state.error ? state.error:null}
    </div>
  );
}

export default DataFetch2;
