import React from 'react';

const Alert = (props) => {
  return (
    <div>
      <div class="alert alert-success">
<strong>{props.message}</strong>
      </div>
    </div>
  );
}

export default Alert;
