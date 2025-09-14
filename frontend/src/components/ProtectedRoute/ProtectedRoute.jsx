import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const ProtectedRoute = ({ component: Component }) => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect();
    }
  }, [isLoading, isAuthenticated, loginWithRedirect]);

  if (isLoading) return <p>Loading...</p>;
  if (!isAuthenticated) return <p>Redirecting to login...</p>;

  return <Component />;
};

export default ProtectedRoute;
