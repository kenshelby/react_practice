import { useEffect } from "react";
import { useLocation, useMatch, useParams } from "react-router";
import { menuUrl } from "../utils/config";
import useMenu from "../utils/useMenu";

const Menu = () => {

    const location = useLocation();
    const {lat, lng} = location.state;
    const {resId} = useParams();
    const menuInfo = useMenu(resId);
    
    return(
        <div>This is menu of a hotel</div>
    )
}

export default Menu;