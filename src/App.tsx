import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import { HomePage } from "./pages"
import { SignupPage, LoginPage } from "./pages/auth"
import { PATH_AFTER_LOGIN, PATH_AUTH, PATH_DASHBOARD } from "./routes/paths";
import DeliveryLocations from "./pages/dashboard/Locations";
import AuthContextProvider from "./context/AuthContext";
import NewLocation from "./pages/dashboard/NewLocation";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<HomePage />),
  },
  {
    path: PATH_AUTH.signup,
    element: <SignupPage />
  },
  {
    path: PATH_AUTH.login,
    element: <LoginPage />
  },
  {
    path: PATH_DASHBOARD.locations.root,
    element: <DeliveryLocations />
  },
  {
    path: PATH_DASHBOARD.locations.new,
    element: <NewLocation />
  },
]);

export default function App() {

  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  )
}
