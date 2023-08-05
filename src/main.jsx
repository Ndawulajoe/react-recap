import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Quotes from "./quotes.jsx";
import ErrorPage from "./error-page.jsx";
import RootLayout from "./routes/Root-layout.jsx";
import DashboardLayout from "./routes/Dashboard-layout.jsx";
import GitProfile from "./git-profile.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <App />,
  // },
  // {
  //   path: '/quotes',
  //   element: <Quotes />,
  // }
  {
    path: '/git-profile/:gitUsername',
    element: <GitProfile />,
    loader: () => alert("works")  
  },
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/quotes",
        element: <Quotes />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: '/dashboard',
        element: <App />
      },
      {
        path: "/dashboard/quotes",
        element: <Quotes />,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
