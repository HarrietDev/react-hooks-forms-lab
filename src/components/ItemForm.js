import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm ({onItemFormSubmit}) {
const [name, setName] = useState("");
const [category, setCategory] = useState("Produce");

function handleSubmit(e) {
  e.preventDefault();

  const newItem ={
    id: uuid(),
    name,
    category,
  };
 onItemFormSubmit (newItem);

 setName ("");
 setCategory("Produce");
 }
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name
        <input id="name"  type="text" name="name" 
        value={name}
        onChange={(e)=> setName(e.target.value)}
        />
      </label>

      <label htmlFor="category">
        Category
        <select  id="category" name="category"
        value={category}
        onChange={(e)=>setCategory(e.target.value)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
