import React, { Component } from 'react'

export class LifeM extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"Riya"
        }
        console.log("constructor called")
    }
    static getDerivedStateFromProps(Props,State)
    {
        console.log("called derivedprops")
        return null
    }
    componentDidMount()//4 step
    {
        console.log("called Didamount")//state set in DOM method    
    }
    shouldComponentUpdate()
    {
        console.log("called shouldupdate")
        return true
    }
    getSnapshotBeforeUpdate()
    {
        console.log("called sanpshot")
        return null
    }
    componentDidUpdate()
    {
        console.log("mount update")
    }
    changeState=()=>{
        this.setState({
            name:"bhawre"
        })
    }
    componentWillUnmount()
    {

    }
    static getDerivedStateFromError(error)
    {

    }
    componentDidCatch(error,info)
    {
        
    }

    render() { //3 step
        console.log("called render method")
        return (
          <div>
            <h1>{this.name}</h1>
            <button onClick={this.changeState}>Change State</button>
          </div>
        );
      }
    }

export default LifeM;
