import React from 'react';
import GrandChild1 from './GrandChild1';

function Child1(props) {
  return (
    <div>
      <h2>Child Component</h2>
      <GrandChild1 count={props.count} incrementCount={props.incrementCount} />
    </div>
  );
}

export default Child1;
