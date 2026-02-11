import RestaurantCard from "./RestaurantCard";
import { swiggyUrl } from "../utils/config";
import { useEffect, useState } from "react";
import SliderFilter from "./SliderFilter"
import Shimmer from "./Shimmer";
import Location from "./Location";
import { Link } from "react-router-dom";

const Body = () =>{
    const [restaurant, setRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [coords, setCoords] = useState({latitude: 12.9367143, longitude: 77.6237713});
    let filteredList =[];

    useEffect(() => {

        const fetchData = async () => {
            const data = await fetch(swiggyUrl(coords.latitude, coords.longitude));
            const result = await data.json();
            setRestaurant(result.data.cards.slice(2));
            setFilteredRestaurant(result.data.cards.slice(2));
        }

        fetchData();
    }, [coords]);

    const updatedCoordinates = ({ latitude, longitude }) =>{
       setCoords({ latitude, longitude });
    }
    

    const handleChange = (e) =>{
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
                <Location updatedCoordinates={updatedCoordinates}/>
                <div className="search">
                    <input className="input-box" onChange={handleChange}/>
                    <button className="search-button">search</button>
                </div>
                <div className="filter">
                    <button className="filter-btn" onClick={() => {
                        filteredList = restaurant.filter((res) => res.info.name.includes("La Pino'z Pizza"))
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
                            (
                                <Link
                                    to={"/restaurant/" + res.card.card.info.id}
                                    state={{lat: coords.latitude, lng: coords.longitude}}
                                    key={res.card.card.info.id}>
                                        <RestaurantCard resData={res}/>
                                </Link>
                            )
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Body;