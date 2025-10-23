import { createContext, useContext, useEffect, useState } from "react";
const FavCtx = createContext(null);
export function FavoritesProvider({ children }){
    const [favs, setFavs] = useState([]);
    useEffect(()=>{ const raw = localStorage.getItem("favorites"); if (raw) setFavs(JSON.parse(raw)); },[]);
    useEffect(()=>{ localStorage.setItem("favorites", JSON.stringify(favs)); },[favs]);
    function toggle(id){ setFavs(prev => prev.includes(id) ? prev.filter(x=>x!==id) : [...prev, id]); }
    return <FavCtx.Provider value={{ favs, toggle }}>{children}</FavCtx.Provider>;
}
export function useFavorites(){ return useContext(FavCtx); }
