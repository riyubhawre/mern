import React, { Component } from 'react'
import { UserConsumer } from './UserContext';

export class ComponentC extends Component {
  render() {
    return (
      <div>
        <UserConsumer>
            {
                username=>{
                    return<div>hello PSK{username}</div>
                }
            }
        </UserConsumer>
      </div>
    );
  }
}

export default ComponentC;
