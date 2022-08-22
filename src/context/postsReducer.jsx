const postsReducer = (state, action) => {
  switch(action.type){
    case 'ADD_POST':
      const newPost = action.payload.post;
      return { posts: [ newPost, ...state.posts ] };
    case 'DELETE_POST':
      const deletePostId = action.payload.id;
      return { posts: state.posts.filter(post => post.id !== deletePostId) };
    case 'CREATE_POST':
      return { posts: state.posts, createPost: true }
    case 'CLOSE_CREATE_POST':
      return { posts: state.posts, createPost: false }
    default:
      return state;
  }
}

export default postsReducer;