import { createContext, useContext, useReducer } from 'react';
import postsReducer from './postsReducer';

//Note, we can pass an initial value to our context
const PostsContext = createContext({
  posts: [],
  createPost: false
});

export const PostsProvider = ({children}) => {  

  const initialPostsState = useContext(PostsContext);

  //useReducer
  const [state, dispatch] = useReducer(postsReducer, initialPostsState);

  const handleCreatePost = () => {
    dispatch({
      type: 'CREATE_POST'
    })
  }

  return (
    <PostsContext.Provider value={{ posts: state.posts, dispatch, createPost: state.createPost, handleCreatePost }}>
      {children}
    </PostsContext.Provider>
  )
}

export default PostsContext;

