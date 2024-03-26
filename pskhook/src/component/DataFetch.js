import React,{useState,useEffect} from 'react';
import axios from 'axios';

function DataFetch() {
    const[posts,setPosts]=useState([])
    const[id,setId]=useState(1)//add1
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response=>{console.log(response)
        setPosts(response.data)})
        .catch(error=>{console.log(error)})
    },[id])
  return (
    <div>
        <input type="text" value={id} onChange={e=>setId(e.target.value)}></input>
        <div>{posts.title}</div>
      {/* <ul>
        {posts.map(post=><li key={post.id}>{post.title}</li>)}
      </ul> */}
    </div>
  );
}

export default DataFetch;
