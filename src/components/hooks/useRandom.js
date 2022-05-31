import { useState } from "react"

export const useRandom = () => {
  let initialState = Math.floor(Math.random() * (10 - 1)) + 1
  const [random, setRandom] = useState(initialState)
  const increment = () => {
    setRandom(Math.floor(Math.random() * (10 - 1)) + 1)
  }
  const reset = () => {
    setRandom(initialState)
  }
  return {
    reset,
    random,
    increment
  }

}
