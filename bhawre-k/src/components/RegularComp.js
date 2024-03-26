import React, { Component } from 'react';

export class RegularComp extends Component {
  render() {
    console.log("regular component called")
    return (
      <div>
        Regular Component{this.props.name}
      </div>
    );
  }
}

export default RegularComp;
