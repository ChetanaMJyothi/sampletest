import React,  { useRef } from 'react';
import axios from 'axios';

const Login = () => {
    const emailRef =useRef();
    const passwordRef =useRef();
    const submitHandler=(e)=>{
        e.preventDefault();
        axios({
            method: 'post',
            url: 'http://localhost:3000/api/user/login',
            data: {
              email: emailRef.current.value,
              password: passwordRef.current.value,
            }
          })
          .then(function(response){
            console.log(response)
          })
          .catch((error)=>{
            console.log(error);
          })
    }
  return (
    <div>
        <h2>Login Page</h2>
      <form onSubmit={submitHandler}>
    
    <label>Email</label>
    <input type='email' ref={emailRef} placeholder='Ex: abcd@gmail.com'/>
    <label>Password</label>
    <input type='password' ref={passwordRef} />
    <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Login
