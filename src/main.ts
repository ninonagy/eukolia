import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

console.log("Hello, sourcemaps!");

ReactDOM.render(
    React.createElement(App, { who: "Cédric" }),
    document.querySelector("#app"),
);
