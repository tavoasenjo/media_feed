import {useContext} from 'react';
import Post from './Post';
import PostsContext from '../context/PostsContext';

function PostList() {
  const { posts } = useContext(PostsContext);
  
  return (
    <div className="postsFeed">
      { (posts.length !== 0) ? <h2>Your Feed</h2> : <h2>Your Feed is empty</h2> }
      {
        posts.map((post) => (
          <Post key={post.id} post={post} />
          )
        )
      }
    </div>
  )
}

export default PostList