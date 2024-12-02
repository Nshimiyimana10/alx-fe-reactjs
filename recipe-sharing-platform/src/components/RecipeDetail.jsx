import React from 'react'
import {useState, useEffect} from 'react'

function RecipeDetail() {
    const[data, setData] = useState();
    const myData = data.json.map((data) =>{
        data.title
    })
    const result = [useParams, ingredients,instructions,image];
  return (
    <div className= "text-sm shadow-sm font-bold">
      {myData}
    </div>
  )
}

export default RecipeDetail