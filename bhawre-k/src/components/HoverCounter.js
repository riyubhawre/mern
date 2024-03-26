import React, { Component } from 'react';

class HoverCounter extends Component {//child class
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    incrementCount=()=>{
        this.setState(prevState=>{
            return{count:prevState.count+1}
        })
    }
  render() {
    const {count}=this.state
    return (
      <div>
        <button onClick={this.incrementCount}>clicked {count} Counter</button>
        <h1 onMouseOver={this.incrementCount}>hover{count}Counter</h1>
      </div>
    );
  }
}

export default HoverCounter;
