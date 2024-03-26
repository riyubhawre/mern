import React, { Component } from 'react';
import Webphp from './Webphp';


export class Web extends Component {
  data=[
    {  id:1,title:"web development using php",desc:"php development",url:"https://www.pskitservices.com/website-designing-company-in-nagpur/"},
    {  id:2,title:"web development using react",desc:"react development",url:"https://www.pskitservices.com/website-designing-company-in-nagpur/"},
    {  id:3,title:"web development using full stack",desc:"full stack development",url:"https://www.pskitservices.com/website-designing-company-in-nagpur/"},
    {  id:4,title:"web development using .net",desc:".net development",url:"https://www.pskitservices.com/website-designing-company-in-nagpur/"}
  ]
  constructor()
  {
    super();
    console.log("hi constructor");
    this.state={data:this.data}
  }
  render() {
    return (
      <div className='container bg-light mt-5'>
        <div className='row my-3'>
          {this.state.data.map((element)=>{return<div className='col-md-3' key={element.id}>
            <Webphp title={element.title} desc={element.desc}url={element.url}/></div>
          })}
          {/* {this.state.data.map((element)=>{return <div className='col-md-3' key={element.id}>
            <Webphp title={element.title} desc={element.desc}url={element.url}/></div>})} */}
            {/* <div className='col-md-3 bg-warning'><Webphp title="php" desc="Web Development"/></div>
            <div className='col-md-3'><Webphp title="php" desc="Web Development"/></div>
            <div className='col-md-3 bg-warning'><Webphp title="php" desc="Web Development"/></div>
            <div className='col-md-3'><Webphp title="php" desc="Web Development"/></div> */}
        </div>
        {/* <div className='row mt-5'>
            <div className='col-md-3'><Webphp title="php" desc="Web Development"/></div>
            <div className='col-md-3 bg-secondary'><Webphp title="php" desc="Web Development"/></div>
            <div className='col-md-3'><Webphp title="php" desc="Web Development"/></div>
            <div className='col-md-3'><Webphp title="php" desc="Web Development"/></div>
        </div> */}
      </div>
    );
  }
}

export default Web;