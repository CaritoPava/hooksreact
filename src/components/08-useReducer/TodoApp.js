import React from 'react'
import './styles.css'
import { useReducer } from 'react'
import { todoReducer } from './Todoreducer'
import { useEffect } from 'react'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'

import { caroDay, caroMonth } from 'carotas_date'

// const initialState = [{
//   id: new Date().getTime(),
//   desc: 'Aprender Rect',
//   done: false
// }]
const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
  // return [{
  //   id: new Date().getTime(),
  //   desc: 'Aprender Rect',
  //   done: false
  // }]
}
export const TodoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer, [], init)


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleDelet = (todoId) => {
    const action = {
      type: 'delete',
      payload: todoId
    }
    dispatch(action)
  }
  const handleToggle = (todoId) => {
    console.log('llega ', todoId)
    dispatch({
      type: 'toggle',
      payload: todoId
    })
  }
  const handleAddTodo = (newTodo) => {
    const action = {
      type: 'add',
      payload: newTodo
    }
    dispatch(action)

  }

  return (
    <div>
      <h1>TodoApp ({todos.length}) and today is {caroDay()}/{caroMonth()}</h1>
      <hr />
      <div className='row'>
        <div className='col-7'>
          <TodoList
            todos={todos}
            handleDelet={handleDelet}
            handleToggle={handleToggle}
          />
        </div>
        <div className='col-5'>
          <TodoAdd
            handleAddTodo={handleAddTodo}
          />
        </div>
      </div>
    </div>
  )
}
