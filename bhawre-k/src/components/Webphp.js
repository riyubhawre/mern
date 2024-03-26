import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class Webphp extends Component {
  render() {
    var {title,desc,url}=this.props;
    return (
      <div>
        <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src="img_avatar.png" alt="Avatar" style={{width:"300px;",height:"300px"}}/>
    </div>
    <div className="flip-card-back">
      <h1>{title}</h1>
      <p>{desc}</p>
      <a href={url} target="_blank" className="btn btn-secondary">more info</a>
    </div>
  </div>
</div>
      </div>
    );
  }
}

export default Webphp;

