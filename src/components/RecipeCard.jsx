import React from "react";
import { Link } from "react-router-dom";

function RecipeCard(props) {
  var r = props.item;
  return (
    <div className="card">
    <h3 className="card-title" >{r.title}</h3>


      <div className="meta">
        <span>{r.category}</span>
        <span> - {r.difficulty}</span>
        <span> - {r.time} min</span>
      </div>

      <p className="desc">{r.summary}</p>
      <Link to={"/recipe/" + r.id} className="btn">Detail</Link>
    </div>
  );
}
export default RecipeCard;
