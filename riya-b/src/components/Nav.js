import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

// export default function Nav() {
//   return (
//     <div>
      
//     </div>
//   )
// }


export default function Nav(props){
    return(
<ul className="nav nav-tabs">
  {/* <li className="nav-item">
    <a className="nav-link active" to="/">{Props.page1}</a>
  </li> */}
  <li className="nav-item">
    <Link className="nav-link active" aria-current="page" to="/">home</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/about">About</Link>
  </li>
  <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">Dropdown</a>
    <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="#">Link 1</a></li>
      <li><a className="dropdown-item" href="#">Link 2</a></li>
      <li><a className="dropdown-item" href="#">Link 3</a></li>
    </ul>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/contact">Contact</Link>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" href="#">{props.page2}</a>
  </li>
</ul>
    );
}
Nav.propTypes={Page1:PropTypes.string.isRequired,page2:PropTypes.string}
Nav.defaultProps={page1:"prolific", page2:"done"}
