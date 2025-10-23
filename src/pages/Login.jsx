import React, { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate, Link } from "react-router-dom";

export default function Login(){
  var [email, setEmail] = useState("");
  var [name, setName] = useState("");
  var { login } = useAuth();
  var nav = useNavigate();

  function onSubmit(e){
    e.preventDefault();
    if (!email) return;
    login({ email: email, name: name });
    nav("/", { replace: true });
  }

  return (
    <div className="auth">
      <h2>Log in</h2>
      <form onSubmit={onSubmit} className="auth-form">
        <label>Email
          <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="@purdue.edu" />
        </label>
        <label>Name
          <input value={name} onChange={e=>setName(e.target.value)} placeholder="name" />
        </label>
        <button type="submit" className="btn primary">Log in</button>
      </form>
      <p className="muted">No account <Link to="/signup">Sign up</Link></p>
    </div>
  );
}
