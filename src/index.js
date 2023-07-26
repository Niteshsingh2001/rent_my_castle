import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { UserContextProvider } from './context/user.context';
import { PropertiesContextProvider } from './context/properties.context';
import { AlertBoxContextProvider } from './context/alertbox.context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <AlertBoxContextProvider>
        <UserContextProvider>
          <PropertiesContextProvider>
            <App />
          </PropertiesContextProvider>
        </UserContextProvider>
      </AlertBoxContextProvider>
    </React.StrictMode>
  </BrowserRouter>
);
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals