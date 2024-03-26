import React, { Component } from 'react'

export class ClickCounter2 extends Component {
    render() {
    const {count,incrementCount}=this.props
    return (
      <div>
        <button onClick={incrementCount}>click{count}Counter</button>
      </div>
    );
  }
}

export default ClickCounter2;
