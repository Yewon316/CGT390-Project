import React from "react";
import RecipeCard from "./RecipeCard.jsx";

function List(props) {
  if (!props.items || props.items.length === 0) {
    return <div className="empty">No results.</div>;
  }
  return (
    <div className="grid">
      {props.items.map(function(item){
        return <RecipeCard key={item.id} item={item} />;
      })}
    </div>
  );
}
export default List;
