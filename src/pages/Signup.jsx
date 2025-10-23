import React, { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate, Link } from "react-router-dom";

export default function Signup(){
  var [email, setEmail] = useState("");
  var [name, setName] = useState("");
  var { signup } = useAuth();
  var nav = useNavigate();

  function onSubmit(e){
    e.preventDefault();
    if (!email) return;
    signup({ email: email, name: name });
    nav("/", { replace: true });
  }

  return (
    <div className="auth">
      <h2>Sign up</h2>
      <form onSubmit={onSubmit} className="auth-form">
        <label>Email
          <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="@purdue.edu" />
        </label>
        <label>Name
          <input value={name} onChange={e=>setName(e.target.value)} placeholder="name" />
        </label>
        <button type="submit" className="btn primary">Create account</button>
      </form>
      <p className="muted">Already have an account? <Link to="/login">Log in</Link></p>
    </div>
  );
}
