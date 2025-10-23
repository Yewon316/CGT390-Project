import { useState, useEffect } from "react";
import { Routes, Route, useParams, Link, Navigate } from "react-router-dom";
import Filters from "./components/Filters.jsx";
import List from "./components/List.jsx";
import Header from "./components/Header.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import { useAuth } from "./context/AuthContext.jsx";
import { useFavorites } from "./context/FavoritesContext.jsx"; 
import recipes from "./data/recipes.js";
import Saved from "./pages/Saved.jsx";

function RequireAuth(props){
  var { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return props.children;
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

  function handleReset(){ setSearch(""); setCategory("All"); }

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={
          <Home
            search={search} category={category}
            onSearchChange={setSearch} onCategoryChange={setCategory}
            onReset={handleReset} items={filtered}
          />
        } />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/saved" element={<Saved />} />


        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
    </div>
  );
}

function Home(props){
  const tabs = ["All","Rice","Noodle","Soup","Bread","Vegetables"];

  return (
    <>
      <h1 style={{textAlign:"center"}}>CookAlone</h1>

      <div className="tabs">
        {tabs.map(function(t){
          var active = props.category === t;
          return (
            <button
              key={t}
              className={"tab" + (active ? " active" : "")}
              onClick={function(){ props.onCategoryChange(t); }}
            >
              {t}
            </button>
          );
        })}
      </div>

      <Filters
        search={props.search}
        category={props.category}
        onSearchChange={props.onSearchChange}
        onCategoryChange={props.onCategoryChange}
        onReset={props.onReset}
      />
      <List items={props.items} />
      <p style={{textAlign:"center", marginTop:12}}>
        <Link to="/about">About</Link>
      </p>
    </>
  );
}

function RecipeDetail(){
  const { id } = useParams();
  const item = recipes.find(r => String(r.id) === String(id));

  useEffect(function(){
    if (item) document.title = item.title + " | CookAlone";
    window.scrollTo(0,0);
    return function(){ document.title = "CookAlone"; };
  }, [id, item]);

  if (!item) {
    return (
      <div className="detail">
        <p>Not found</p>
        <Link to="/" className="btn">Back</Link>
      </div>
    );
  }


  const { favs = [], toggle } = useFavorites?.() || {};
  const saved = Array.isArray(favs) ? favs.includes(item.id) : false;


  const prep = (typeof item.prep === "number") ? item.prep : 5;
  const cook = (typeof item.cook === "number") ? item.cook : (item.time || 10);
  const total = prep + cook;
  const ings = Array.isArray(item.ingredients) ? item.ingredients : ["(No ingredients provided)"];
  const steps = Array.isArray(item.steps) ? item.steps : [
    "Prepare ingredients.",
    "Cook according to summary.",
    "Serve and enjoy."
  ];

  return (
    <div className="detail recipe-detail">
      <p><Link to="/" className="btn">Back</Link></p>

      <h1 className="detail-title">{item.title}</h1>
      <p className="lead">{item.summary}</p>


      <div className="actions">
        {toggle && (
          <button className="btn" onClick={function(){ toggle(item.id); }}>
            {saved ? "Saved" : "ADD"}
          </button>
        )}
        <button className="btn" onClick={function(){ window.print(); }}>Print</button>
        <button className="btn" onClick={async function(){
          try { await navigator.clipboard.writeText(location.href); alert("Link copied!"); }
          catch { alert("Copy failed"); }
        }}>Share</button>
      </div>


      {item.image && (<img className="hero" src={item.image} alt={item.title} />)}

      <div className="times">
        <span className="chip">Prep: {prep} min</span>
        <span className="chip">Cook: {cook} min</span>
        <span className="chip total">Total: {total} min</span>
      </div>

      <section className="panel">
        <h3>Ingredients</h3>
        <ul>
          {ings.map(function(x, i){ return <li key={i}>{x}</li>; })}
        </ul>
      </section>

      <section className="panel">
        <h3>Steps</h3>
        <ol>
          {steps.map(function(x, i){ return <li key={i}>Step {i+1}. {x}</li>; })}
        </ol>
      </section>
    </div>
  );
}

function About() {
  return (
    <div className="detail">
      <h2>About</h2>
      <p>CookAlone: simple recipes for studnet</p>
      <p><Link to="/" className="btn">Home</Link></p>
    </div>
  );
}
