import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router/routes.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import AuthProvider from "./providers/AuthProvider.jsx";
import { ToastWrapper } from "keep-react";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastWrapper
        richColors={true}
        toastOptions={{
          classNames: {
            title: "text-body-3 font-medium",
            toast: "rounded-xl shadow-large",
            description: "text-body-4 font-normal",
          },
        }}
      />
    </AuthProvider>
  </React.StrictMode>
);
