import React from 'react';
import Column from './Column';

function TableDemo(){
  return (
    <React.Fragment>
      <table>
        <tbody>
            <tr>
                <Column/>
            </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default TableDemo;
