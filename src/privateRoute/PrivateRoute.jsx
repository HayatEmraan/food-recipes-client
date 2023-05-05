import React, { useContext } from "react";
import { authContext } from "../context/Auth";
import Loading from "../libs/loading/Loading";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);
  const location = useLocation();
  console.log(location);
  if (loading) {
    return <Loading />;
  }
  if (user) {
    return children;
  } else {
      return <Navigate to="/login" state={location} replace={true} />;
  }
};

export default PrivateRoute;
