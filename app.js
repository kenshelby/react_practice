import React from "react";
import ReactDOM from "react-dom/client";


// const heading = React.createElement("h1", {}, "Text inside h1");    
const parent = React.createElement("div", { id: "parent" }, 
    [
      "this text is for the parent div", 
      React.createElement("div", {className: "child1", key: "child1"}, [
            "text of child1 div", 
            React.createElement("h1", {key: "child1-h1"}, "Text inside h1"), 
            React.createElement("h2", {key: "child1-h2"}, "Text inside h2")]
        ), 
      React.createElement("div", {className: "child2", key: "child2"}, [
            "text of child2 div", 
            React.createElement("h1", {key: "child2-h1"}, "Text inside h1"), 
            React.createElement("h2", {key: "child2-h2"}, "Text inside h2")]
        )
    ]
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);