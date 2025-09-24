import React, { useState } from "react";
import RecipeCard from "./components/RecipeCard.jsx";
import Filters from "./components/Filters.jsx";
import List from "./components/List.jsx"

// 1. need to add the filter for the level
// 2. add more recipes
// 3. work on the detail.

// Sample data(will add more later)
const recipes = [
    {
      "id": 1,
      "title": "Kimchi Rice",
      "category": "Rice",
      "difficulty": "Easy",
      "time": 15,
      "summary": "Rice + kimchi stir-fried with egg and sesame oil."
    },
    {
      "id": 2,
      "title": "Fried Rice",
      "category": "Rice",
      "difficulty": "Easy",
      "time": 15,
      "summary": "Leftover rice stir-fried with vegetables, egg, and soy sauce."
    },
    {
      "id": 3,
      "title": "Pasta with Tomato Sauce",
      "category": "Noodle",
      "difficulty": "Easy",
      "time": 20,
      "summary": "Boiled pasta mixed with canned tomato sauce, garlic, and olive oil."
    },
    {
      "id": 4,
      "title": "Omelette",
      "category": "Rice",
      "difficulty": "Easy",
      "time": 10,
      "summary": "Eggs cooked with onion, cheese, or vegetables folded inside."
    },
    {
      "id": 5,
      "title": "Ramen Upgrade",
      "category": "Noodle",
      "difficulty": "Easy",
      "time": 10,
      "summary": "Instant ramen with extra egg, green onion, or cheese for better taste."
    },
    {
      "id": 6,
      "title": "Grilled Cheese Sandwich",
      "category": "Bread",
      "difficulty": "Easy",
      "time": 10,
      "summary": "Bread with butter and cheese toasted until golden brown."
    },
    {
      "id": 7,
      "title": "Stir-fried Vegetables",
      "category": "Vegetables",
      "difficulty": "Medium",
      "time": 12,
      "summary": "Quick stir-fry of vegetables with garlic and soy sauce."
    },
    {
      "id": 8,
      "title": "Chicken Salad",
      "category": "Vegetables",
      "difficulty": "Easy",
      "time": 15,
      "summary": "Cooked chicken breast mixed with lettuce, cucumber, and dressing."
    },
    {
      "id": 9,
      "title": "Tomato Soup",
      "category": "Soup",
      "difficulty": "Medium",
      "time": 20,
      "summary": "Soup made with Tomato"
    }
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
