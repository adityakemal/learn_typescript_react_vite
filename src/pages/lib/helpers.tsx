import { ReactNode } from "react";
import { useAuthStore } from "../store/auth.store";
import { Navigate } from "react-router-dom";

export const privateRoutes = (children: ReactNode) => {
  const token = useAuthStore.getState().token;
  console.log(token);
  if (token) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export const removeRouteIfLogin = (children: ReactNode) => {
  const token = useAuthStore.getState().token;
  console.log(token?.length);
  if (token) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};
