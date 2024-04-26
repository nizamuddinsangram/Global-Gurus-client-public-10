import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
