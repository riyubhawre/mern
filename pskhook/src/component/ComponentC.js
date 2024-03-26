import React from 'react';
import { UserContext,PskContext } from '../App';

function ComponentC() {
     return (
    <div>
      <UserContext.Consumer>{
    user => {  return(
           <PskContext.Consumer>
            {
              psk=>{
                return<div>Data {user} - {psk}</div>
                   }  
            }
           </PskContext.Consumer>      
                     )
             }
                            }
        
      </UserContext.Consumer>
    </div>
              )
                      }


export default ComponentC;
