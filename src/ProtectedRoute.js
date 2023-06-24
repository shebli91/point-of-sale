import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";
import { Navigate } from "react-router-dom";
import { checkToken } from "./services/auth";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(UserContext);

  const token = checkToken();

  return token ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
