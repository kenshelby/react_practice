import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/config";
import { useState } from "react";
import SliderFilter from "./SliderFilter"

const Body = () =>{
    const [restaurant, setRestaurant] = useState(resList);
    let filteredList =[];
    const handleRatingChange = (rating) => {
        console.log(rating);
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
                    <input className="input-box"/>
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
                    (<RestaurantCard key={res.info.id} resData={res}/>)
                )}
            </div>
        </div>
    )
}

export default Body;