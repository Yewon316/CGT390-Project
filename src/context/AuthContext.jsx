import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider(props){
  const [user, setUser] = useState(null);

  useEffect(function(){
    var raw = localStorage.getItem("auth:user");
    if (raw) setUser(JSON.parse(raw));
  }, []);

  useEffect(function(){
    if (user) localStorage.setItem("auth:user", JSON.stringify(user));
    else localStorage.removeItem("auth:user");
  }, [user]);

  function login(info){ setUser({ email: info.email, name: info.name || info.email }); }
  function signup(info){ setUser({ email: info.email, name: info.name || info.email }); }
  function logout(){ setUser(null); }

  var value = { user, login, signup, logout };
  return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>;
}

export function useAuth(){ return useContext(AuthContext); }
