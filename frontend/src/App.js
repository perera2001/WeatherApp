import React from "react";
import { Routes, Route , Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Weather from "./components/weather/Weather";
import LogoutButton from "./components/Logout/LogoutButton"
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <header  className="app-header">
        <h1 className="app-title">🌤️ Weather App</h1>
         <div className="header-actions">
          <LogoutButton/>
          
          
        </div>

      </header>
      <Routes>
        {/* Redirect / to /weather automatically */}
        <Route path="/" element={<Navigate to="/weather" replace />} />
        <Route path="/weather" element={<ProtectedRoute component={Weather} />} />
      </Routes>
    </div>
   
  );
}

export default App;
