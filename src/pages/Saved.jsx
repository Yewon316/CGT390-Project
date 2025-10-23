import React from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext.jsx";
import recipes from "../data/recipes.js";
import List from "../components/List.jsx";

export default function Saved(){
  const { favs = [] } = useFavorites();
  const items = recipes.filter(function(r){
    return favs.indexOf(r.id) !== -1;
  });

  if (!items.length) {
    return (
      <div className="detail">
        <h2>Saved</h2>
        <p className="empty">No saved recipes</p>
        <p><Link to="/" className="btn">find recipes</Link></p>
      </div>
    );
  }

  return (
    <div className="detail">
      <h2>Saved</h2>
      <List items={items} />
      <p style={{textAlign:"center", marginTop: 12}}>
        <Link to="/" className="btn">Back to Home</Link>
      </p>
    </div>
  );
}
