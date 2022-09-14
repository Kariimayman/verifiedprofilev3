import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { initializeContract } from "./components/utils/near";

import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Buffer } from 'buffer';

// @ts-ignore
window.Buffer = Buffer;

window.nearInitPromise = initializeContract()
  .then(() => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      // <React.StrictMode>
          <App />
      // </React.StrictMode>
    );
  })
  .catch(console.error);