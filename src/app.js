import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/Header.js";
import Body from "../components/Body.js";
import Footer from "../components/Footer.js";
import Contact from "../components/Contact.js";
import Menu from "../components/Menu.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore.js";
import CartPage from "../components/CartPage.js";

const AppLayout = () => {
    return(
        <Provider store={appStore}>
            <div>
                <Header/>
                <Outlet/>
                <Footer/>
            </div>
        </Provider>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
            <Router>
                <Routes>
                    <Route path="/" element={<AppLayout/>}>
                        <Route index element={<Body/>}></Route>
                        <Route path="/contact" element={<Contact/>}></Route>
                        <Route path="/restaurant/:resId/:resName" element={<Menu/>}></Route>
                        <Route path="/checkout" element={<CartPage/>}></Route>
                    </Route>
                </Routes>
            </Router>
);