import React, {useState} from 'react';
import './App.css';

function HookUseState() {
// if we want the state and we want to update the state of the object 
// We need to pass the object first     
const [count, setCount] = useState({

  num: 1
});

// It usually said please use diffrent diffrent state of each keys of the object 

const [id, setId] = useState({

  id:'abc'
})

function increment(){
  
  setCount((prev)=> {

    return{ // ...prev means previous state 
      ...prev,
      num:prev.num +1, 

    }
  }) 

  
}

function decrement(){
// setCount(count - 1);
setCount((prev)=> {

  return{ // ...prev means previous state 
    ...prev,
    num:prev.num - 1, 

  }
})
  
}

  return (
<div className='App m-5'>

<div className='p-2'><button onClick={increment}>+</button></div>

<div>{count.num} </div>
<div>{count.id} </div>  

<div className='p-2'><button onClick={decrement}>-</button></div>
</div>

  );
}

export default UseStateHook;
