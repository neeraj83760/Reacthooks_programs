import React, {useState} from 'react';
import './App.css';

function App() {
const [count, setCount] = useState(0);  

function increment(){
  return setCount(count + 1);  
}

function decrement(){
  return setCount(count - 1);  
}

  return (
<div className='App m-5'>

<div className='p-2'><button onClick={increment}>+</button></div>

<div>{count} </div>  

<div className='p-3'><button onClick={decrement}>-</button></div>
</div>

  );
}

export default App;
