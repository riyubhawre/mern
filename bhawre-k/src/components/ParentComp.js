import React, { Component } from 'react';
import RegularComp from './RegularComp';
import PureComp from './PureComp';
import MamoComp from './MamoComp';

export class ParentComp extends Component {
    constructor(props){
        super(props)

        this.state = {
            name:"riya"
        }
    }
    componentDidMount()
    {
        setInterval(()=>{
            this.setState({
                name:"lalla"
            })
        },2000)
    }
  render() {
    console.log("parent component called")
    return (
      <div>
       <MamoComp/>
        Parent Component
        <MamoComp name={this.state.name}/>
     {/* <RegularComp name={this.state.name}/>
     <PureComp name={this.state.name}/> */}
      </div>
    );
  }
}

export default ParentComp;
