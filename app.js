import React from "react";
import ReactDOM from 'react-dom/client'
// the blank object is use to give attributes to tags.
const heading = React.createElement("h1",{id:"heading"},"hello react!");

const nesteDiv = React.createElement('div', {id:'parent'}, 
    // we have to pass array to create multiple childrens
   [React.createElement('div', {id:'child', key:1}, 
        [React.createElement('h1',{id:'heading', key:1},"Hi I am Heading Tag"),
        React.createElement('h2',{id:'heading', key:2},"Hi I am Heading2 Tag")]
    ),

    React.createElement('div', {id:'child', key:2}, 
        [React.createElement('h1',{id:'heading', key:1},"Hi I am Heading Tag"),
        React.createElement('h2',{id:'heading', key:2},"Hi I am Heading2 Tag")]
    )]
)
// this is the core react. we can write code with react and js only. but. 
// the code looks so messy. if we add more nested elements and stuff
// the code is become almost unreadable.
// That's why we use the JSX. JSX makes this complex looking code easy.

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
    root.render(nesteDiv);

// console.log(heading); // returns an object 
console.log(nesteDiv); // returns an object 

// behind the scenes
// the job of render or here root.render is to take the object 
// and create the tag which we passed. in our case.
// create h1 tag which browser understand and put it inside the root element

