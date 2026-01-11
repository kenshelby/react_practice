


// const heading = React.createElement("h1", {}, "Text inside h1");    
const parent = React.createElement("div", { id: "parent" }, 
    [
      "this text is for the parent div", 
      React.createElement("div", {class: "child1"}, [
            "text of child1 div", 
            React.createElement("h1", {}, "Text inside h1"), 
            React.createElement("h2", {}, "Text inside h2")]
        ), 
      React.createElement("div", {class: "child2"}, [
            "text of child2 div", 
            React.createElement("h1", {}, "Text inside h1"), 
            React.createElement("h2", {}, "Text inside h2")]
        )
    ]
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);