import {useState, useContext} from 'react';
import UserContext from '../context/UserContext';

function Login() {

  const [username, setUsername] = useState('');
  const [message, setMessage] = useState(false);

  //Context
  const { dispatch } = useContext(UserContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setUsername(value.toUpperCase());
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(username.trim().length === 0){
      setMessage(true);
    }else {
      // setUser(username);
      dispatch({
        type: 'LOGIN_USER',
        payload: { username: username }
      })
    }
  }

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="name" onChange={handleChange} />
        <button type="submit">submit</button>
      </form>
      {
        message && <p className="loginMessage">You need to put a name to enter!</p>
      }
    </div>
  )
}

export default Login;