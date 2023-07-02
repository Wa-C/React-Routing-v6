import React, { createContext, useState } from 'react'
import Home from './Home'
import AddRecipe from './AddRecipe'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom" ;
import SubmitForm from './SubmitForm';
import PrivateRoute from './PrivateRoute';


export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState();
  return (
    <div className="container main">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <h1>email: {loggedInUser}</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path='/recipe' element={<PrivateRoute/>}>
          <Route path="/recipe" element={<AddRecipe />}>
          </Route>
          </Route>
          
          
          <Route path="/login" element={<SubmitForm />} />
          
        </Routes>
        </BrowserRouter>
        </UserContext.Provider>
      </div>
  )
}

export default App