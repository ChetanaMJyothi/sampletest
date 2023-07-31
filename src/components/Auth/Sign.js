import React, { useRef } from 'react';
import axios from 'axios';

const Sign = () => {
    const nameRef =useRef();
    const emailRef =useRef();
    const passwordRef =useRef();

    const submitHandler=(e)=>{
        e.preventDefault();
        axios({
            method: 'post',
            url: 'http://localhost:3000/api/user/signup',
            data: {
              name: nameRef.current.value,
              email: emailRef.current.value,
              password: passwordRef.current.value,
            }
          });
    }
  return (
    <div>
        <h2>Sign Up Page</h2>
      <form onSubmit={submitHandler}>
    <label>Name</label>
    <input type='text' ref={nameRef} placeholder='Ex: John'/>
    <label>Email</label>
    <input type='email' ref={emailRef} placeholder='Ex: abcd@gmail.com'/>
    <label>Password</label>
    <input type='password' ref={passwordRef} />
    <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Sign
