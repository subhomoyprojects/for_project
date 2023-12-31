import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { store } from "./Reduxitems/Store.jsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      
    <Provider store={store}>
    <ToastContainer />
      <App />
    </Provider>
    
  </React.StrictMode>
);