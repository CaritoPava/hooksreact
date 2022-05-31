import React from 'react'
import { useCounter } from '../hooks/useCounter'
import './counter.css'

export const CounterWhithCustomHook = () => {
  const { reset, state, increment, decrement } = useCounter(100)
  return (
    <>
      <h1>Counter Whith Custom Hook {state}</h1>
      <hr />
      <button onClick={() => increment(2)} className='btn'>
        +1
      </button>
      <button onClick={reset} className='btn'>
        Reset
      </button>
      <button onClick={() => decrement(2)} className='btn'>
        -1
      </button>
    </>
  )
}
