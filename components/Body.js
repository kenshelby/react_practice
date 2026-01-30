import RestaurantCard from "./RestaurantCard";
import { resList, swiggyUrl } from "../utils/config";
import { useEffect, useState } from "react";
import SliderFilter from "./SliderFilter"

const Body = () =>{
    const [restaurant, setRestaurant] = useState([]);
    let filteredList =[];

    useEffect(() => {

        const fetchData = async () => {
            const data = await fetch(swiggyUrl);
            const result = await data.json();
            console.log(result.data.cards.slice(2));
            setRestaurant(result.data.cards.slice(2));
        }

        fetchData();
    }, []); //add fetching using api

    

    const handleChange = (e) =>{
        console.log(e.target.value);
        const value = e.target.value.toLowerCase();
        filteredList = resList.filter( 
            res => 
                res.info.name.toLowerCase().includes(value) || res.info.cuisines.some( cuisine => cuisine.toLowerCase().includes(value))
        );
        setRestaurant(filteredList);
    }
    const handleRatingChange = (rating) => {
        filteredList = resList.filter(
            (res) => res.info.avgRating >= rating
        );
        setRestaurant(filteredList);
    }
    return(
        <div className="body">
            <div className="top-container">
                <div className="empty-element"></div>
                <div className="search">
                    <input className="input-box" onChange={handleChange}/>
                    <button className="search-button">search</button>
                </div>
                <div className="filter">
                    <button className="filter-btn" onClick={() => {
                        filteredList = resList.filter((res) => res.info.name.includes("La Pino'z Pizza"))
                        setRestaurant(filteredList);
                    }}>filter</button>
                    <SliderFilter onRatingChange={handleRatingChange}/>
                </div>
            </div>
            <div className="res-container">
                {restaurant.map(
                    (res) => 
                    (<RestaurantCard key={res.card.card.info.id} resData={res}/>)
                )}
            </div>
        </div>
    )
}

export default Body;