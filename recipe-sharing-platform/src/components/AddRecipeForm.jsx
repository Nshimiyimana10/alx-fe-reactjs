import React from 'react';
import {useState} from 'react';

function AddRecipeForm() {
  const [addRecipe, setAddRecipe] = useState("");
  return (
    <div>
       <input type="text" />
       <textarea name="" id=""></textarea>
       <textarea name="" id=""></textarea>
       <button>SUBMIT</button>
    </div>
  )
}

export default AddRecipeForm