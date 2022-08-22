import { useContext } from 'react';
import Login from './components/Login';
import Header from './components/Header';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';

// Style
import './styles.css';

//Context
import UserContext  from './context/UserContext';
import PostsContext from './context/PostsContext';

function App() {
  
  //Context
  const {user, setUser } = useContext(UserContext); 
  const { posts } = useContext(PostsContext)

  if(!user) {
    return <Login setUser={setUser} />
  }  

  return (
    <div className="container">
      <Header user={user} setUser={setUser} />
      <CreatePost username={user} />
      <PostList posts={posts} user={user} />
    </div>
  )
}

export default App