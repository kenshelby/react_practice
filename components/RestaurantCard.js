import RatingIcon from "./RatingIcon";
import { resImg } from "../utils/config";

const RestaurantCard = (props) => {
    console.log(props.resData.card.card.info)
    const { id, name, cloudinaryImageId, costForTwo, cuisines, avgRating } = props.resData.card.card.info;
    return(
        <div className="res-card">
            <img className="res-img" src={resImg + cloudinaryImageId}></img>
            <h4 className="res-name">{name}</h4>
            <div className="res-rating">
                <RatingIcon size={14} />
                <span className="rating-value">{avgRating}</span>
            </div>
            <div className="cuisine">{cuisines.join(", ")}</div>
        </div>
    )
}

export default RestaurantCard;