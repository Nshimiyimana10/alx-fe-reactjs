import React from 'react'
import{useState, useEffect} from 'react';

function HomePage() {
    const [data, setData] = useState("");
    const newData = data.json.map((data) =>{
        data.title
    })
  return (
    <div>
      
    </div>
  )
}

export default HomePage;