import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Provider/AuthProvider.jsx";
import router from "./Router/Route.jsx";

import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <div className="w-11/12 mx-auto">
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </div>
    </HelmetProvider>
  </React.StrictMode>
);
