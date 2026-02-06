import RatingIcon from "./RatingIcon";
import { resImg } from "../utils/config";

const RestaurantCard = (props) => {

    const { name, cloudinaryImageId, costForTwo, cuisines, avgRating, locality } = props.resData.card.card.info;
    return(
        <div className="res-card">
            <img className="res-img" src={resImg + cloudinaryImageId}></img>
            <h4 className="res-name">{name}</h4>
            <span>{locality}</span>
            <div className="res-rating">
                <RatingIcon size={14} />
                <span className="rating-value" style={{padding: "4px"}}>{avgRating}</span>
                <span className="cost" style={{padding: "20px"}}>{costForTwo}</span>
            </div>
            <div className="cuisine">{cuisines.join(", ")}</div>
        </div>
    )
}

export default RestaurantCard;