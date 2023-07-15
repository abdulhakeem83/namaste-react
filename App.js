// const heading = React.createElement("h1",{id:'heading'},"Hello World from React! ");
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


// creating nested element structure:
//  <div id="parent">
//     <div id="child">
//         <h1>This is h1 Tag!</h1>

//     </div>

//  </div>



const parent = React.createElement("div",{id:'parent'},
React.createElement("div",{id:'child'},
[
    React.createElement("div",{},"This is h1 Tag!"),
    React.createElement("div",{},"This is h2 Tag!")


]
)
);
console.log(parent) //it is object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);