import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContext";
import { ToastProvider } from "react-toast-notifications";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ToastProvider>
        <AuthContextProvider>
        <App />
      </AuthContextProvider>
      </ToastProvider>
      
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
