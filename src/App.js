import React, {useState} from 'react';
import './App.css';

function App() {
const [name, setName] = useState("Neeraj"); 

// let a = "Neeraj" 

function changeName(){
  console.log('Clicked!!')
  // a = "Rakesh"
  // return a; 
  return setName('Johnny!');
}

  return (
<div className='App m-5'>
<div>Hello, {name} </div>  
<button onClick={changeName}>Click Me!!</button>
</div>

  );
}

export default App;
