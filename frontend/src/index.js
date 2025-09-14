import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import Auth0ProviderWithHistory from './auth/Auth0ProviderWithHistory';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Auth0ProviderWithHistory>
  <App />
 </Auth0ProviderWithHistory>
  </BrowserRouter>
);



