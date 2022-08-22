const userReducer = (state, action) => {
  switch(action.type){
    case 'LOGIN_USER':
      return {
        user: action.payload.username,
      };
    case 'LOGOUT_USER':
      return {
        user: ''
      }
    default:
      return state;
  }
}

export default userReducer;