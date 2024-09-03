import React, { useState } from 'react';
import Parent from './Parent';
import Parent1 from './Parent1';
import './App.css';
import { FaBaby } from 'react-icons/fa6';

function App() {

  //Example for prop-drilling with functions
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };

  //Example for prop-drilling with Plain Message display
  const [message, setMessage] = useState('Hello');
  const name=" Authun !";
  const handleNameChange=(name)=>{
    message==="Hello" ? setMessage(message + name) : setMessage(message)
  }
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 >Prop Drilling with message display <FaBaby /> </h1>
      <Parent message={message} />
      <button onClick={()=>handleNameChange(name)}>Click Me</button>
      <h1>Prop Drilling with Increment function</h1>
      <Parent1 count={count} incrementCount={incrementCount} />
    </div>
  );
}

export default App;
