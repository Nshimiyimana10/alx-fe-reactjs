import React from 'react';
import {useState} from 'react';

function RegistrationForm() {

    const[errors, setErrors] = useState("")

    if (!username) if (!password) if (!email);
        setErrors
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