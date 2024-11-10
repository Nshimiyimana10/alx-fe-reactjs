import React, {useContext} from 'react'
import {userDataContext} from './components/UserContext.jsx'


function UserDetails(){
    const userData = useContext(userDataContext);
    return(
        <div>
            <h3>UserDetails</h3>
             <h4>{userData}</h4>
        </div>
    )
}

export default UserDetails