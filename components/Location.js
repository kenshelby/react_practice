import { useEffect, useState } from "react";
import React from 'react'
import { mapUrl } from "../utils/config";
import AddressCard from "./AddressCard";

const Location = () => {

  const [query, setQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);

  useEffect(() => {

    if (query.length < 3) {
        setSuggestion([]);
        return;
    }

    const timer = setTimeout( async () => {
        const res = await fetch(mapUrl(query));
        const data = await res.json();
        setSuggestion(data.features);
    }, 2000);

    return () => { clearTimeout(timer) }

  }, [query]);

  return (
    <div className="location-container">
        <form>
            <input 
               className="location-input" placeholder="Enter Your City" onChange={(e) => {setQuery(e.target.value)}}>
            </input>
        </form>
        <ul>
            {suggestion.map(loc => (
                <AddressCard key={loc.id} loc={loc}/> 
            ))}
        </ul>
    </div>
  )
}

export default Location;
