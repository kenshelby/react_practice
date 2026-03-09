import { useState } from "react";
import AccordianBody from "./AccordianBody";

const AccordianMenuNested = ({data}) => {
    const {categories} = data.card.card;
    const [openCategoryId, setOpenCategoryId] = useState(null);
    const handleClick = (categoryId) => {
        setOpenCategoryId((prev) => prev === categoryId ? null : categoryId);
    }
  return (
    <div className="accordian-menu-nested" style={{backgroundColor:"white"}}>
        <div className="accordian-header-nested">
            <h3 className="accordian-menu-title">{data.card.card.title}</h3>
            {categories.map(
                c => {
                    const isOpen = openCategoryId === c.categoryId;
                    return (
                    <div key={c.categoryId}>
                        <h4 className="child-title" onClick={() => handleClick(c.categoryId)}>{c.title}
                            <span className="open-close"> + </span>
                        </h4>                        
                        { isOpen && c.itemCards.map(m => <AccordianBody key={m.card.info.id} data={m}/>)}
                    </div>
            )}
            )}
        </div>
    </div>
  )
}

export default AccordianMenuNested;