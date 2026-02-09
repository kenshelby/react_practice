import { cartLogo, swiggyLogo } from "../utils/config";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () =>{

    const [isLogin, setIsLogin] = useState("Login")
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
                    <li>
                        <img className="cart-logo" src={cartLogo}/>
                    </li>
                </ul>                
            </div>
        </div>
    )
}

export default Header;