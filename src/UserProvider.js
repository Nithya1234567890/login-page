import React, { useState } from 'react'
import UserContext from './UserContext';

const UserProvider = (props) => {
    const [data,setData]=useState([]);
  return (
    <UserContext.Provider value={{data,setData}}>
        {props.children}
    </UserContext.Provider>
  )
}

export default UserProvider
