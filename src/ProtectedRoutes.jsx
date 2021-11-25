import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

const ProtectedRoute = (props) => {
  const { currentUser } = useAuth();

  if (currentUser) {
    return <Route {...props} />;
  }

  return <Navigate to="/" />;
};

export default ProtectedRoute;
