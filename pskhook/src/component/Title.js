import React from 'react';

function Title() {
    console.log("rendring title")
  return (
    <div>
      <h1>PSK CALLBACK</h1>
    </div>
  );
}

export default React.memo(Title);
