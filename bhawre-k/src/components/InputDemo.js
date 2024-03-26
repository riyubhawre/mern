import React, { Component } from 'react'
 class InputDemo extends Component {//child class
    constructor(props){
        super(props)
        this.inputRef=React.createRef()
    }
    focusInputData()
    {
        this.inputRef.current.focus()
    }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}/>
      </div>
    );
  }
}
export default InputDemo;
