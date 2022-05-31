import React, { useState } from 'react'
import '../01-useState/counter.css'
import { MultipleCustomHooks2 } from '../03-examples/MultipleCustomHook2'


export const RealExampleRef = () => {
  const [hidden, setHidden] = useState(false)
  return (
    <div>
      <h1>RealExampleRef</h1>
      <h3 hidden={hidden}>
        {<MultipleCustomHooks2 />}
      </h3>
      <button
        className='btn btn-primary nt-5'
        onClick={() => {
          setHidden(!hidden)
        }}
      >
        Show/Hide
      </button>
    </div>
  )
}
