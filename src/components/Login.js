import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const initialState = {
  credentials:{
    username:'',
    password:''
  }
}
const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
const { push } = useHistory()

  const [credentials, setCredentials] = useState(initialState)

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const login = e =>{
    e.preventDefault()
    axios
    .post("http://localhost:5000/api/login", credentials)
    .then(res=>{
      localStorage.setItem('token', res.data.payload)
      push('/bubble-page')
    })
  }

  return (
    <>
      <h1>
        Welcome to the Bubble App!
      </h1>
      <form onSubmit={login}>
        <label>Username: 
          <input
          type="text"
          name="username"
          onChange={handleChange}
          />
        </label>
        <label>Password:
          <input
          type="text"
          name="password"
          onChange={handleChange}
          />
        </label>
        <button>log in!</button>
      </form>
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEST "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.