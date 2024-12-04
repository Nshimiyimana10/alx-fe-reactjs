import React from 'react';
import {useState} from 'react';

function AddRecipeForm() {
  const [addRecipe, setAddRecipe] = useState("");
  const newInfo =[handleSubmit];

  function ingredients(e){
   preventDefault(e.target.value);
   const steps = "newSteps";
   const title ="newTitle";
  }

  return (
    <div >
    
    <form action="" onSubmit={ingredients}>
        <input type="text" />
        <textarea name="" id=""></textarea>
        <textarea name="" id=""></textarea>
       <button>SUBMIT</button>
    </form>
       
    </div>
  )
}

export default AddRecipeForm