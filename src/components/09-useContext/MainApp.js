import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UsersContext'


export const MainApp = () => {
  // const user = {
  //   id: 1234,
  //   name: 'Carolina',
  //   email: 'carito9018@gmail.com'
  // }
  const [user, setUser] = useState({})
  return (
    <UserContext.Provider value={{
      user,
      setUser
    }}>
      <AppRouter />
    </UserContext.Provider>
  )
}
