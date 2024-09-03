import React from 'react';
import Child1 from './Child1';

function Parent1(props) {
  return (
    <div>
      <h2>Parent Component</h2>
      <Child1 count={props.count} incrementCount={props.incrementCount} />
    </div>
  );
}

export default Parent1;
