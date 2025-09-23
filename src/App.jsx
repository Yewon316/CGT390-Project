import React, { useState } from "react";
import RecipeCard from "./components/RecipeCard.jsx";
import Filters from "./components/Filters.jsx";
import List from "./components/List.jsx"


// Sample data(will add more later)
const recipes = [
  { id: 1, title: "Kimchi Rice", category: "Rice", difficulty: "Easy", time: 15,
    summary: "rice + kimchi. " },
  { id: 2, title: "Garlic Noodles", category: "Noodle", difficulty: "Easy", time: 12,
    summary: "Noodles with garlic " },
  { id: 3, title: "Egg Soup", category: "Soup", difficulty: "Easy", time: 10,
    summary: "soup with egg" },
  { id: 4, title: "Tuna Mayo rice", category: "Rice", difficulty: "Easy", time: 8,
    summary: "Tuna + mayo rice" },
  { id: 5, title: "Tomato Pasta", category: "Noodle", difficulty: "Medium", time: 20,
    summary: "Tomato noodle that can make in one pot" }
];

function Header() {
  return (
    <div className="header">
      <h1>CookAlone</h1>
      <p className="sub">Simple recipes</p>
    </div>
  );
}

export default function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = recipes.filter(function(item){
    var ok = true;
    if (category !== "All" && item.category !== category) ok = false;
    if (search.trim() !== "") {
      var text = (item.title + " " + item.summary).toLowerCase();
      if (text.indexOf(search.toLowerCase()) === -1) ok = false;
    }
    return ok;
  });

  function handleReset() {
    setSearch("");
    setCategory("All");
  }

  return (
    <div className="app">
      <Header />
      <Filters
        search={search}
        category={category}
        onSearchChange={setSearch}
        onCategoryChange={setCategory}
        onReset={handleReset}
      />
      <List items={filtered} />
    </div>
  );
}
