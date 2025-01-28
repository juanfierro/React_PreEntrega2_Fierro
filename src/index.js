import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bulma/css/bulma.min.css";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);
root.render(<App />);
