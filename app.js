import React from "react";
import ReactDOM from "react-dom/client";
import { resList } from "./config.js"

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

const RatingIcon = ({ size = 20 }) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="ratingGradient"
            x1="10"
            y1="1"
            x2="10"
            y2="19"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#21973B" />
            <stop offset="1" stopColor="#128540" />
          </linearGradient>
        </defs>
  
        <circle cx="10" cy="10" r="9" fill="url(#ratingGradient)" />
  
        <path
          d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
          fill="white"
        />
      </svg>
    );
  };

const RestaurantCard = (props) => {
    console.log(props.resData.info)
    const { id, name, cloudinaryImageId, costForTwo, cuisines, avgRating } = props.resData.info;
    return(
        <div className="res-card">
            <img className="res-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" + cloudinaryImageId}></img>
            <h4 className="res-name">{name}</h4>
            <div className="res-rating">
                <RatingIcon size={14} />
                <span className="rating-value">{avgRating}</span>
            </div>
            <div className="cuisine">{cuisines.join(", ")}</div>
        </div>
    )
}
const Body = () =>{
    return(
        <div className="body">
            <div className="search">
                <input className="input-box"/>
                <button className="search-button">search</button>
            </div>
            <div className="res-container">
                {resList.map(
                    (res) => 
                    (<RestaurantCard key={res.info.id} resData={res}/>)
                )}
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