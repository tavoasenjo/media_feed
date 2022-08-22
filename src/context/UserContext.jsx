import { createContext, useReducer, useEffect, useState } from "react";
import userReducer from "./UserReducer";

const UserContext = createContext();

export const UserProvider = ({children}) => {

  /********** State with useReducer ***********/
  const initialUser = {
    user: 'tavo'
  }

  // useReducer Hook
  const [state, dispatch] = useReducer(userReducer, initialUser);

  useEffect(() => {
    document.title = state.user ? `${state.user}'s feed` : 'Please Login';
  }, [state.user])


  return (
    <UserContext.Provider value={{ user: state.user, dispatch }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext;
