import React,{useState,useEffect} from 'react';
import axios from 'axios';

function DataFectch1() {
    const [loading,setLoding]=useState(true)
    const [post,setPost]=useState({})
    const [error,setError]=useState('')
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then(response=>{
            setLoding(false)
            setPost(response.data)
            setError('')
        })
        .catch(error=>{
            setLoding(false)
            setPost({})
            setError('wrong condition')
        })
    },[])
  return (
    <div>
      {loading? 'Loading':post.title}
      {error? error:null}
    </div>
  );
}

export default DataFectch1;
