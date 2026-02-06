import { useEffect, useState } from "react";
import React from 'react'
import { mapUrl } from "../utils/config";
import AddressCard from "./AddressCard";

const Location = (props) => {

  const {updatedCoordinates} = props;
  const [query, setQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [suggestion, setSuggestion] = useState([]);

  useEffect(() => {
    if (selectedLocation) return;
    if (query.length < 3) {
        setSuggestion([]);
        return;
    }

    const timer = setTimeout( async () => {
        const res = await fetch(mapUrl(query));
        const data = await res.json();
        setSuggestion(data.features);
    }, 1200);

    return () => { clearTimeout(timer) }

  }, [query]);

  const handleLocationSelect = (loc) => {
    updatedCoordinates(loc.properties.coordinates);
    setSelectedLocation(loc);
    setQuery(loc.properties.name);
    setSuggestion([]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="location-container">
        <form onSubmit={handleSubmit}>
            <input 
               className="location-input" 
               placeholder="Enter Your City" 
               value={query} 
               onChange={(e) => {
                setSelectedLocation(null);
                setQuery(e.target.value);
                }}>
            </input>
        </form>
        <ul>
            {suggestion.map(loc => (
                <AddressCard key={loc.id} loc={loc} onClick={() => handleLocationSelect(loc)} />
            ))}
        </ul>
    </div>
  )
}

export default Location;
