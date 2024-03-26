import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const[credential,setCredential]=useState({name:"",email:"",password:""});
    var navigate=useNavigate();
    const host="http://localhost:8888";

    const clickhere=async(e)=>{
        e.preventDefault();
        const{name,email,password}=credential;
        const response = await fetch (`${host}/api/auth/createuser`,{
            method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({name,email,password})
        });
        const json=await response.json();
        console.log(json);
        if(json.success)
        {
            localStorage.setItem('token',json.authtoken);
            navigate("/")
        }
        else{
            alert("please fill proper email,name,password");
        }
    }
    const onChange =(e)=>{
        setCredential({...credential,[e.target.name]:e.target.value});
    }
  return (
    <div>
      <form onSubmit={clickhere}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name:</label>
            <input type="name" className="form-control" id="name" placeholder="Enter name"
            name="name" onChange={onChange} value={credential.name}/>
        </div>
        <div className="mb-3 mt-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" className="form-control" id="email" placeholder="Enter email"
            name="email" onChange={onChange} value={credential.email}/>
        </div>
        <div className="mb-3">
        <label htmlFor="pwd" className="form-label">Password:</label>
            <input type="password" className="form-control" id="password" placeholder="Enter email"
            name="password" onChange={onChange} value={credential.password}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
  )
}

export default Signup;
