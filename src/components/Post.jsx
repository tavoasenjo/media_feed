import {useContext} from 'react'
import UserContext from '../context/UserContext';
import PostsContext from '../context/PostsContext';

function Post({post}) {
  const {image, username, content, id} = post;

  //Context
  const {user} = useContext(UserContext);
  const {dispatch} = useContext(PostsContext)

  const isCurrentUser = user === username;

  const handleDelete = () => {
    dispatch({
      type: 'DELETE_POST',
      payload: { id }
    })
  }

  return (
    <div className="singlePost">
      {
        image && <img className="postImage" src={URL.createObjectURL(image)} alt="Post Cover" />
      }
      <div className="postDetails">      
        <p>{content}</p>
          <div className="author">
          <p className="authorName" style={{ 'color': isCurrentUser ? 'yellow' : 'white'}}>By: {username}</p>
          { isCurrentUser && <button className="deleteBtn" onClick={handleDelete}>Delete</button> }
        </div>
      </div>
    </div>
  )
}

export default Post