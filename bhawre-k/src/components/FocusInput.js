import React, { Component } from 'react';
import InputDemo from './InputDemo';

class FocusInput extends Component {
    constructor(props){
        super(props)
        this.componentRef=React.createRef()
    }
    clickhere=()=>
    {
        this.componentRef.current.focusInputData()
    }
  render() {
    return (
      <div>
        <InputDemo ref={this.componentRef}/>
        <button onClick={this.clickhere}>focus</button>
      </div>
    );
  }
}

export default FocusInput;
