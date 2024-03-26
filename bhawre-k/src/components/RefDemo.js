import React, { Component } from 'react';

export class RefDemo extends Component {
  constructor(props){
    super(props)
    this.inputRef=React.createRef()
    this.callRef=null
    this.setCallRef=element=>{this.callRef=element}
  }
  componentDidMount()
  {
    if(this.callRef)
    {
        this.callRef.focus()
    }
    // this.inputRef.current.focus()
    // console.log(this.inputRef)
  }
  clickhere=()=>
  {
    alert(this.inputRef.current.value)
  }
  render(){
    return(
        <div>
            <input type="text" ref={this.inputRef}></input>
<input type="text" ref={this.setcallRef}></input>
            <button onClick={this.clickhere}>click here</button>
        </div>
    );
  }
  }
  export default RefDemo;


