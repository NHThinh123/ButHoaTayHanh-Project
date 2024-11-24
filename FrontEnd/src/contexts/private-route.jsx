import { useContext } from "react";
import { AuthContext } from "./auth.context";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { auth } = useContext(AuthContext);
  console.log(auth);
  return auth?.user?.id !== "" ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
