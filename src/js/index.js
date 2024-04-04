//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import SecondsCounter from "./SecondsCounter.js";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let seconds1 = 0;
let seconds2 = 0;
let minutes1 = 0;
let minutes2 = 0;
let hour1 = 0;
let hour2 = 0;
setInterval(()=> {
    ReactDOM.render(<SecondsCounter seconds1={seconds1} seconds2={seconds2} minutes1={minutes1} minutes2={minutes2} hour1={hour1} hour2={hour2}/>, document.querySelector("#app"));
    seconds1++;
      if (seconds1 === 10) {
        seconds2++;
        if (seconds2 === 10) {
            minutes1++;
            seconds2 = 0;
        }
        if (minutes1 === 10) {
            minutes2++;
            minutes1 = 0;
        }
        if (minutes2 === 10) {
            hour1++;
            minutes2 = 0;
        }
        if (hour1 === 10) {
            hour2++;
            hour1 = 0; 
                }
        seconds1 = 0;
    
    }
}, 1000);

