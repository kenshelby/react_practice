import { cartLogo, swiggyLogo } from "../utils/config";

const Header = () =>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={swiggyLogo}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>Login</li>
                    <li>
                        <img className="cart-logo" src={cartLogo}/>
                    </li>
                </ul>                
            </div>
        </div>
    )
}

export default Header;