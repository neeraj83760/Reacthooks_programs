import React, {useState} from 'react';
import './App.css';

function App() {
const [count, setCount] = useState(0);  

// If u want the counter update the value in browser and console as well so for that setCount
// takes a callback so we need to use the callback here to make the seCount sync so inside the
// callback it takes previous state as a prop 
function increment(){
  
  // console.log(count) // this will show the count value one less than in the console which is showing in the browser because it's Async 
  // setCount(count + 1);  // the state of the count updating here is not syncronus it asyncronus 

  setCount((prev)=> prev + 1) // so  now if we dupicate this line of code it will increment the value by two
  setCount((prev)=> prev + 1) // passing the callback will help in updating the value syncronusly 
  
}

function decrement(){
// setCount(count - 1);
setCount((prev)=> prev - 1)
  
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
