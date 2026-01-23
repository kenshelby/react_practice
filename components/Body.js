import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/config";

const Body = () =>{
    return(
        <div className="body">
            <div className="search">
                <input className="input-box"/>
                <button className="search-button">search</button>
            </div>
            <div className="res-container">
                {resList.map(
                    (res) => 
                    (<RestaurantCard key={res.info.id} resData={res}/>)
                )}
            </div>
        </div>
    )
}

export default Body;