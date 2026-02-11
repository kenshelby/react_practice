import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/Header.js";
import Body from "../components/Body.js";
import Footer from "../components/Footer.js";
import Contact from "../components/Contact.js";
import Menu from "../components/Menu.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
    return(
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
            <Router>
                <Routes>
                    <Route path="/" element={<AppLayout/>}>
                        <Route index element={<Body/>}></Route>
                        <Route path="/contact" element={<Contact/>}></Route>
                        <Route path="/restaurant/:resId" element={<Menu/>}></Route>
                    </Route>
                </Routes>
            </Router>
);