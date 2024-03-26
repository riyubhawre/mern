import React, { Component } from 'react'
import ComponentC from './ComponentC'
import UserContext from './UserContext';

export class ComponentB extends Component {
    static contextType=UserContext//2
  render() {
    return (
      <div>
        Component B
        {this.context}
        <ComponentC/>
      </div>
    );
  }
}
ComponentB.contextType=UserContext//1

export default ComponentB;
