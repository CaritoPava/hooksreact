import React, { useEffect, useState } from 'react'
import '../01-useState/counter.css'
import { useForm } from '../hooks/useForm'

export const FormWhithCustomHook = () => {
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    pasword: ""
  })
  const { name, email, pasword } = formValues
  useEffect(() => {
    console.log('email cambio')
  }, [email])
  const handleSumit = (e) => {
    e.preventDefault()
    console.log(formValues)
  }
  return (
    <form onSubmit={handleSumit}>
      <h1>FormWhithCustomHook</h1>
      <hr />
      <div className='form-group'>
        <input
          type="text"
          name="name"
          className='form-control'
          placeholder='Tu nombre'
          autoComplete='off'
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className='form-group'>
        <input
          type="text"
          name="email"
          className='form-control'
          placeholder='Tu email'
          autoComplete='off'
          value={email}
          onChange={handleInputChange}
        />
      </div>
      <div className='form-group'>
        <input
          type="pasword"
          name="pasword"
          className='form-control'
          placeholder='****'
          value={pasword}
          onChange={handleInputChange}
        />
      </div>
      <button type='sumit' className='btn btn-primary'>
        guardar
      </button>

    </form>
  )
}
