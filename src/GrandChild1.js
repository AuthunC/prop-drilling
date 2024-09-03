import React from 'react';

function GrandChild1(props) {
  return (
    <div>
      <h2>Grandchild Component</h2>
      <p>Count: {props.count}</p>
      <button onClick={props.incrementCount}>Increment</button>
    </div>
  );
}

export default GrandChild1;
