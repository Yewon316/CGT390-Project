import React from "react";

function RecipeCard(props) {
  var r = props.item;
  return (
    <div className="card">
      <h3 className="title">{r.title}</h3>
      <div className="meta">
        <span>{r.category}</span>
        <span> • {r.difficulty}</span>
        <span> • {r.time} min</span>
      </div>
      <p className="desc">{r.summary}</p>
      <button onClick={function(){ alert("Not yet"); }}>Detail</button>
    </div>
  );
}
export default RecipeCard;
