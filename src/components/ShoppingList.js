import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState ("");
  const [itemsList, setItemsList] = useState (items);

  // function handleItemFormSubmit (newItem){
  //   setItemsList([...itemsList, newItem]);
  // }


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay =items.filter((item) =>{
    const matchesCategory = 
    selectedCategory === "All"  || item.category ===selectedCategory;

    const matchesSearch = item.name
    .toLowerCase()
    .includes(searchText.toLowerCase());
    return matchesCategory && matchesSearch
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter 
      onCategoryChange={handleCategoryChange} 
      search={searchText} 
      onSearchChange= {(e) => setSearchText(e.target.value)}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
