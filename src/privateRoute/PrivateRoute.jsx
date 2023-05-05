import React, { useContext } from "react";
import { authContext } from "../context/Auth";
import Loading from "../libs/loading/Loading";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);
    const location = useLocation();
    
  if (loading) {
    return;
  }
  if (user) {
    return children;
  } else {
      return <Navigate to="/login" state={location} replace />;
  }
};

export default PrivateRoute;
