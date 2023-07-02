import React, { useContext } from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { UserContext } from './App'
import AddRecipe from './AddRecipe';

function PrivateRoute({component:component, ...rest}) {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    loggedInUser ? <Outlet /> : <Navigate to="/login" />
    
  )
}

export default PrivateRoute