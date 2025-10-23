import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { useFavorites } from "../context/FavoritesContext.jsx";

export default function Header(){
  var { user, logout } = useAuth();
  const { favs = [] } = useFavorites?.() || {};


  return (
    <header className="nav">
      <Link className="brand" to="/"> CookAlone</Link>
      <nav className="links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        {user && <NavLink to="/profile">Profile</NavLink>}
        <NavLink to="/saved">Saved <span className="pill">{favs.length}</span></NavLink>
      </nav>

      <div className="authbox">
        {!user && (
          <>
            <Link to="/login" className="btn small">Log in</Link>
            <Link to="/signup" className="btn small outline">Sign up</Link>
          </>
        )}
        {user && (
          <>
            <span className="hello">Hi {user.name - "friend"}</span>
            <button type="button" onClick={logout} className="btn small danger">Log out</button>
          </>
        )}
      </div>
    </header>
  );
}
