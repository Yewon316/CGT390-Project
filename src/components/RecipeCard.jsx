import React from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext.jsx";

export default function RecipeCard(props) {
  const r = props.item;
  let favs = [];
  let toggle;
  try {
    const ctx = useFavorites();
    if (ctx) { favs = ctx.favs || []; toggle = ctx.toggle; }
  } catch (_) {

  }

  const saved = Array.isArray(favs) ? favs.includes(r.id) : false;

  return (
    <div className="card">
      <h3 className="card-title">{r.title}</h3>

      <div className="meta">
        <span>{r.category}</span>
        <span> - {r.difficulty}</span>
        <span> - {r.time} min</span>
      </div>

      <p className="desc">{r.summary}</p>

      <div style={{ display: "flex", gap: 8 }}>
        <Link to={"/recipe/" + r.id} className="btn">Detail</Link>

        {typeof toggle === "function" && (
          <button
            type="button"
            className="btn"
            onClick={function(){ toggle(r.id); }}
          >
            {saved ? "Saved!" : "ADD"}
          </button>
        )}
      </div>
    </div>
  );
}
