import { cartLogo, swiggyLogo } from "../utils/config";
import { useState } from "react";
import { Link } from "react-router-dom";
import CartDialogBox from "./cartDialogBox";
import { useSelector } from "react-redux";

const Header = () =>{

    const [isLogin, setIsLogin] = useState("Login");
    const [showDialogbox, setShowDialogBox] = useState(false);
    const handleMouseEnter = () => {
        setShowDialogBox(true);
    }

    const handleMouseLeave = () => {
        setShowDialogBox(false);
    }

    const cartItems = useSelector((store) => store.cart.items);
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={swiggyLogo}/>
            </div>
            <div className="nav-items">
                <ul>                    
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li className="login-button" style={{cursor: "pointer"}} onClick={() => {
                        isLogin === "Login" ? setIsLogin("Logout") : setIsLogin("Login");
                    }}>{isLogin}</li> 
                    <li className="cart-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <img className="cart-logo" src={cartLogo}/>
                        <span>{cartItems.length}</span>
                        {showDialogbox && <CartDialogBox/>}
                    </li>                   
                </ul>
            </div>
        </div>
    )
}

export default Header;