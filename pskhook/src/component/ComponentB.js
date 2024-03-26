import React,{useContext} from 'react';
import ComponentC from './ComponentC';
import { UserContext, PskContext } from '../App';

function ComponentB() {
    // const user=useContext(UserContext)
    // const psk=useContext(PskContext)
  return (
    <div>
      {/* {user}-{psk} */}
      <ComponentC/>
    </div>
  );
}

export default ComponentB;
