import { useEffect, useState } from "react";

const useMenu = () => {

    const[menuInfo, setMenuInfo] = useState(null);
    
    useEffect(() => {
        const getData = async () => {
            const res = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5642452&lng=73.7768511&restaurantId=811585");
            const data = await res.json();
            setMenuInfo(data);
        }
        getData();
    }, []);

    return menuInfo;
}

export default useMenu;