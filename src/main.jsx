import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { JobContextProvider } from "./context/JobsContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <JobContextProvider>
      <App />
    </JobContextProvider>
  </React.StrictMode>
);
