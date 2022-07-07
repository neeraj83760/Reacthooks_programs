import React, {useState} from 'react';
import './App.css';

function App() {
const [count, setCount] = useState(0);  

function increment(){
  
  console.log(count) // this will show the count value one less than in the console which is showing in the browser 
  setCount(count + 1);  // the state of the count updating here is not syncronus it asyncronus 
  
}

function decrement(){
setCount(count - 1);  
}

  return (
<div className='App m-5'>

<div className='p-2'><button onClick={increment}>+</button></div>

<div>{count} </div>  

<div className='p-2'><button onClick={decrement}>-</button></div>
</div>

  );
}

export default App;
