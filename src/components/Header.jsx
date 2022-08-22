import React, { useContext } from 'react';
import PostsContext from '../context/PostsContext';
import UserContext from '../context/UserContext';

function Header() {

  //context
  const { handleCreatePost } = useContext(PostsContext);
  const { user, dispatch } = useContext(UserContext);

  const handleLogout = () => {
    dispatch({
      type: 'LOGOUT_USER'
    })
  }
  

  return (
    <div className="header">
      <h1>Welcome, {user}!</h1>
      <div className="headerButtons">
        <button onClick={handleCreatePost} className="newPostBtn">New Post</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}

export default Header