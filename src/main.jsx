import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ContextData from "./Components/Context/ContextData.jsx";
// import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextData>
    <App />
  </ContextData>
);
