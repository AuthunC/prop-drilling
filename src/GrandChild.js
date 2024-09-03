import React from 'react';

function GrandChild(props) {
  return (
    <div>
      <h2>Grandchild Component</h2>
      <p>{props.message}</p>
    </div>
  );
}

export default GrandChild;
