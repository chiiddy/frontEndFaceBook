import React, {useState} from 'react'

export default function Counter() {
    const [counter , setCounter] = useState(0);

    const incrementCounter = () => {
        setCounter((preCounter) => preCounter +1);
    }
    const decrementCounter = () => {
        setCounter((preCounter) => preCounter -1);
    }
  return (
    <div>
        <buuton data-testid='increment' onClick={incrementCounter}>+</buuton>
        <p data-testid = 'counter'>{counter}</p>
        <button data-testid = '' onClick={decrementCounter}>-</button>
    </div>
  )
}
