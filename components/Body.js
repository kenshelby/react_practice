import RestaurantCard from "./RestaurantCard";
import { resList, swiggyUrl } from "../utils/config";
import { useEffect, useState } from "react";
import SliderFilter from "./SliderFilter"
import Shimmer from "./Shimmer";

const Body = () =>{
    const [restaurant, setRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    let filteredList =[];

    useEffect(() => {

        const fetchData = async () => {
            const data = await fetch(swiggyUrl);
            const result = await data.json();
            console.log(result.data.cards.slice(2));
            setRestaurant(result.data.cards.slice(2));
            setFilteredRestaurant(result.data.cards.slice(2));
        }

        fetchData();
    }, []); //add fetching using api

    

    const handleChange = (e) =>{
        console.log(e.target.value);
        const value = e.target.value.toLowerCase();
        filteredList = restaurant.filter( 
            res => 
                res.card.card.info.name.toLowerCase().includes(value) || res.card.card.info.cuisines.some( cuisine => cuisine.toLowerCase().includes(value))
        );
        setFilteredRestaurant(filteredList);
    }
    const handleRatingChange = (rating) => {
        filteredList = restaurant.filter(
            (res) => res.card.card.info.avgRating >= rating
        );
        setFilteredRestaurant(filteredList);
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
                {
                    restaurant.length === 0 ? 
                    ( <Shimmer />) :

                    (
                        filteredRestaurant.map(
                            (res) => 
                            (<RestaurantCard key={res.card.card.info.id} resData={res}/>)
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Body;