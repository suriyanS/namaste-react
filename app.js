const heading = React.createElement("div", { id: "parent" },[
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", { id: "heading" }, "Namaste Suriyan!"),
        React.createElement("h2", { id: "heading" }, "Namaste Kaviya!"),
        React.createElement("h2", { id: "heading" }, "Namaste Rishi!"),
    ]),
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", { id: "heading" }, "Namaste Suriyan!"),
        React.createElement("h2", { id: "heading" }, "Namaste Kaviya!"),
        React.createElement("h2", { id: "heading" }, "Namaste Rishi!"),
    ])]);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(heading);