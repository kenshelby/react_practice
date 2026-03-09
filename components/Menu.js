import { useEffect } from "react";
import { useLocation, useMatch, useParams } from "react-router";
import { menuUrl } from "../utils/config";
import useMenu from "../utils/useMenu";
import { menuList } from "../utils/menuItems";
import AccordianMenu from "./AccordianMenu";
import AccordianMenuNested from "./AccordianMenuNested";

const Menu = () => {

    const location = useLocation();
    const {lat, lng} = location.state;
    const {resId, resName} = useParams();
    const items = menuList.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter( c => c.card.card["@type"].includes("ItemCategory"));
    // const menuInfo = useMenu(resId);
    return(
        <div>
            <div className="menu-top-section">
                <div className="restaurant-name">{resName.split("-").join(" ")}</div>                
            </div>
            <div className="menu-start">
                    {items.map((eachItem) => 
                        (
                            eachItem.card.card.itemCards ? 
                            <AccordianMenu key ={eachItem.card.card.categoryId} data= {eachItem}/> : 
                            <AccordianMenuNested key ={eachItem.card.card.categoryId} data= {eachItem}/>
                        )
                    )}
            </div>
        </div>
    )
}

export default Menu;