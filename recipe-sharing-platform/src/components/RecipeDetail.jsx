import React from 'react'
import {useState, useEffect} from 'react'

function RecipeDetail() {
    const[data, setData] = useState();
    const myData = data.json.map((data) =>{
        data.title
    })
  return (
    <div>

    </div>
  )
}

export default RecipeDetail