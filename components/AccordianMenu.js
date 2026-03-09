import { useState } from "react";
import AccordianBody from "./AccordianBody";

const AccordianMenu = ({data}) => {
    const [showItems, setShowItems] = useState(false);
    const itemsList = data.card.card.itemCards ? data.card.card.itemCards : data.card.card.categories;
    const handleClick = () => {
        setShowItems(!showItems);
    }
    return(
        <div className="accordian-menu" style={{backgroundColor:"white"}}>
            <div className="accordian-header">
                <h3 className="accordian-menu-title" onClick={handleClick}>{data.card.card.title} ({data.card.card.itemCards ? data.card.card.itemCards?.length : data.card.card.categories?.length})
                  <span className="open-close">+</span>
                </h3>
                {showItems && itemsList.map(list => (<AccordianBody key = {list.card ? list.card.info.id : list.categoryId} data = {list}/>))}      
            </div>
        </div>
    )
}

export default AccordianMenu;