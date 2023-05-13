import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_DOMAIN_ID;
const clientId = process.env.REACT_APP_CLIENTS_ID;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain={domain}
  clientId={clientId}
  redirectUri={ window.location.origin }>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Auth0Provider>
);