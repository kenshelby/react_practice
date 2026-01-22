import React from "react";
import ReactDOM from "react-dom"
// const heading = React.createElement("h1", {}, "Text inside h1");    
// const parent = React.createElement("div", { id: "parent" }, 
//     [
//       "this text is for the parent div", 
//       React.createElement("div", {className: "child1", key: "child1"}, [
//             "text of child1 div", 
//             React.createElement("h1", {key: "child1-h1"}, "Text inside h1"), 
//             React.createElement("h2", {key: "child1-h2"}, "Text inside h2")]
//         ), 
//       React.createElement("div", {className: "child2", key: "child2"}, [
//             "text of child2 div", 
//             React.createElement("h1", {key: "child2-h1"}, "Text inside h1"), 
//             React.createElement("h2", {key: "child2-h2"}, "Text inside h2")]
//         )
//     ]
// )

// *** we will use just jsx now //

//const heading = <h1>this is heading using jsx</h1>  we will convert this react element to a functional comp by using uppercase name aand arrow func
// const Heading = () => (<h1>this is heading using jsx</h1>)

// const HeadingComponent = () => (
//                     <div>
//                         <Heading/>
//                         <h2>this is function comp heading</h2>
//                     </div>
//                 );

const heading = <h1>This is a  react element jsx</h1> //this will be treated as normal js variable
const Heading = () => {
    return(
        <h1>this is component heading</h1>
    )
};

const HeadingComponent = () => {
    return(
        <div id="container">
            {heading}
            <Heading/>
            <h2>this is inside func component</h2>
        </div>
    )
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<HeadingComponent></HeadingComponent>)
};