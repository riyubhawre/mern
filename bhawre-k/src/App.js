import logo from './logo.svg';
import './App.js';
import './App.css';

import React, { Component } from 'react'

import ClickCounter2 from './components/ClickCounter2.js';
import HoverCounter2 from './components/HoverCounter2.js';
import Counter from './components/Counter.js';
import User from './components/User.js';
import { UserProvide } from './components/UserContext.js';
import ComponentA from './components/ComponentA.js';

// export default class App extends Component {
//   render() {
//     return (
//       <div>
        
//       <User render={(isLoggedIn)=> isLoggedIn ? "riya" : "devanshu"}/>
//       <Counter render={(count,incrementCount)=>(<ClickCounter2 count={count} incrementCount={incrementCount}/>)}/>
//       <Counter render={(count,incrementCount)=>(<HoverCounter2 count={count} incrementCount={incrementCount}/>)}/>
//       </div>
//     );
//   }
// }

<UserProvide value="riya"/>
{/* <ComponentA/> */}
// </UserProvider> 


