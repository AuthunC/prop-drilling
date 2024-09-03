import React from 'react';
import GrandChild from './GrandChild';

function Child(props) {
  return (
    <div>
      <h2>Child Component</h2>
      <GrandChild message={props.message} />
    </div>
  );
}

export default Child;
