import React from 'react'
import{useState, useEffect} from 'react';

function HomePage() {
    const [data, setData] = useState("");
    const newData = data.json.map((data) =>{
        data.title
    })
  return (
    <div className='shadow-sm text-sm hover:before rounded-md grid grid-cols-1,grid-cols-2,grid-cols-3'>
      {newData}
    </div>
  )
}

export default HomePage;