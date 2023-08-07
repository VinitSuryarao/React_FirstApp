import React from "react"; // React Lib for React elements and Babel Compiler
import ReactDOM from "react-dom"; // React dom for render element.
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";

var element = <button class="btn btn-danger"> Welcome React JS</button>;

// Render element on Root Div in Index.html
ReactDOM.render(element, document.getElementById("root"));

console.log(element);
