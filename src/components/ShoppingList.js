import React, { useState } from "react";

import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const itemsToDisplay = items.filter((item) => {
    const searchLowerCase = search.toLowerCase();
    const itemNameLowerCase = item.name.toLowerCase();

    if (searchLowerCase === "") {
      if (selectedCategory === "All") return true;

      return item.category === selectedCategory;
    }

    if (
      selectedCategory === "All" &&
      itemNameLowerCase.includes(searchLowerCase)
    ) {
      return true;
    } else {
      return (
        itemNameLowerCase.includes(searchLowerCase) &&
        item.category === selectedCategory
      );
    }
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
        searchValue={search}
        selectedCategory={selectedCategory}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;