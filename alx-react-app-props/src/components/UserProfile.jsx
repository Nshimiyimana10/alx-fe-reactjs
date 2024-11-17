import React from 'react'

function UserProfile() {
    const[context, UserContext] = useContext('Peter');
  return (
    <div>
        <h1>This is userProfile page {useContext}</h1>
    </div>
  )
}

export default UserProfile