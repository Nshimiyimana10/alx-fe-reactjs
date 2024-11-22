import React from 'react';
import {useState} from 'react';

function RegistrationForm() {

    const[errors, setErrors]=useState("");

    if(!username){
        return setErrors("Please enter your username");
    }
    if(!password){
        return setErrors("Please enter your password");
    }
    if(!email){
        return setErrors("Please enter your email");
    }
  return (
    <div>
        <form action="">
            <input type="text" value={username}  />
            <input type="password" value={password} />
            <input type="email" value={email}/>

        </form>
    </div>
  )
}

export default RegistrationForm