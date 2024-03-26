import React,{useState,useCallback} from 'react';
import Title from './Title';
import Count from './Count';
import Button from './Button';


function Parent() {
    const [age,setAge]=useState(25)
    const [salary,setSalary]=useState(25000)
    const incrementAge=useCallback(()=>{
        setAge(age+1)
    },[age])
    const incrementSalary=useCallback(()=>{
        setSalary(salary+5000)
    },[salary])
  return (
    <div>
      <Title/>
      <Count text="Age" count={age}></Count>
      <Count text="Salary" count={salary}></Count>
       <Button handleclick={incrementAge}>incrementage</Button>
       <Button handleclick={incrementSalary}>incrementsalary</Button>
    </div>
  );
}

export default Parent;
