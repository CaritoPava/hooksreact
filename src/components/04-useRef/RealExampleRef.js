import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'
import '../01-useState/counter.css'


export const RealExampleRef = () => {
  const [show, setShow] = useState(false)
  return (
    <div>
      <h1>RealExampleRef</h1>
      {show && <MultipleCustomHooks />}
      <button
        className='btn btn-primary nt-10'
        onClick={() => {
          setShow(!show)
        }}
      >
        Show/Hide
      </button>
    </div>
  )
}
