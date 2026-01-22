import React from "react";
import ReactDOM from "react-dom/client";

const Header = () =>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo-500x281.png"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>Login</li>
                    <li>
                        <img className="cart-logo" src="https://cdn-icons-png.flaticon.com/512/6000/6000305.png"/>
                    </li>
                </ul>                
            </div>
        </div>
    )
}

const RestaurantCard = () => {
    return(
        <div className="res-card">
            <img className="res-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/xqwpuhgnsaf18te7zvtv"></img>
            <h3 className="res-name">Meghana Foods</h3>
            <h4 className="res-rating">4.5</h4>
        </div>
    )
}
const Body = () =>{
    return(
        <div className="body">
            <div className="search">
                <input className="input-box"></input>
                <button className="search-button">search</button>
            </div>
            <div className="res-container">
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>
    )
}
const Footer = () =>{
    return(
        <div>

        </div>
    )
}


const AppLayout = () => {
    return(
        <div>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);