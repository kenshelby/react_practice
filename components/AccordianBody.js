import RatingIcon from "./RatingIcon";
import { resImg } from "../utils/config";

const AccordianBody = ({data}) => {
    return(
        <div>
            <div className="menu-parent">
                <div className="menu-text">
                    <div>{data.card ? data.card.info.name : data.title}</div>            
                    <div>₹ {data.card.info.price ? data.card.info.price/100 : data.card.info.defaultPrice /100}</div>
                    <div>{data.card.info.ratings ? <RatingIcon/> : ""} {data.card.info.ratings.aggregatedRating.rating}</div>
                    <div>{data.card.info.description}</div>
                </div>
                <div className="menu-img">
                    <img src={resImg+data.card.info.imageId}></img>
                    <button className="add-button"> ADD </button>
                </div>
            </div>
            <div className="horizontal-line"></div>            
        </div>
    )
}
export default AccordianBody;