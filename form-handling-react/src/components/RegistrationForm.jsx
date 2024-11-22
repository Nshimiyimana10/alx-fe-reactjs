import React from 'react';
import {useState} from 'react';

function RegistrationForm() {
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