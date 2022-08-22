import {useState, useRef, useContext} from 'react';
import PostsContext from '../context/PostsContext';
import { v4 as uuidv4 } from 'uuid';
import { IoIosClose } from "react-icons/io";

function CreatePost({username}) {

  //Context
  const {dispatch, createPost} = useContext(PostsContext);
  
  //State
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [errorMsg, setErrorMsg] = useState(false);

  //ref
  const imageInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = {
      id: uuidv4(),
      content,
      image,
      username
    }

    if(content.trim().length === 0 || image === null) {
      setErrorMsg(true);
    }else {
      dispatch({
        type: 'ADD_POST',
        payload: { post }
      })
      setErrorMsg(false);
      setContent('');
      setImage(null);
      imageInputRef.current.value = '';
    }
  }

  const handleCloseCreate = () => {
    dispatch({
      type: 'CLOSE_CREATE_POST'
    })
    setErrorMsg(false);
  }

  return (
    <div className={`newPost ${ createPost ? 'showCreate' : '' }`}>
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setContent(e.target.value)} type="text" placeholder="Add Post Content" value={content} />
        <label className="fileUpload">
          <input onChange={(e) => setImage(e.target.files[0])} type="file" ref={imageInputRef} />
          Upload File
        </label>
        {(image?.name.length !== 0) && <p className="fileName">{image?.name}</p>}
        <button className='submitPost' type="submit">Submit Post!</button>
        <p onClick={handleCloseCreate} className="closeCreate"><IoIosClose /></p>
        {errorMsg && <p className="errorMsg">You need to add content and image to your post!</p>}
      </form>
     
    </div>
  )
}

export default CreatePost