import React, { Component } from 'react'

export class HoverCounter2 extends Component {
      render() {
    const {count,incrementCount}=this.props
    return (
      <div>
        <h1 onMouseOver={incrementCount}>Hover{count}counter</h1>
      </div>
    );
  }
}

export default HoverCounter2;
