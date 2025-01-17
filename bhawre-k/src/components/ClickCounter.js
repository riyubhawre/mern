import React, { Component } from 'react';


export class ClickCounter extends Component {//child class
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
    const {count} =this.state
    return (
      <div>
        <button onClick={this.incrementCount}>clicked {count} counter</button>
      </div>
    );
  }
}

export default ClickCounter;
