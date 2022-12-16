import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [newItem, setNewItem] = useState({
    name: "",
    category: "Produce",
  });

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setNewItem({ ...newItem, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem.name === "") return;
    onItemFormSubmit({ ...newItem, id: uuid() });
    setNewItem({ ...newItem, name: "" });
  };

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={newItem.name}
          onChange={handleOnChange}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={newItem.category}
          onChange={handleOnChange}
        >
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