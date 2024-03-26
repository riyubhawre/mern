import React from 'react';

function Button({handleclick,psk}) {
    console.log("rendering button")
  return (
    <div>
      <button onClick={handleclick}>age ,salary</button>
      
    </div>
  );
}

export default React.memo(Button);
