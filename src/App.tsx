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

const router = createBrowserRouter([
  {
    path: "/",
    element: (<HomePage />),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
  {
    path: "auth/signup",
    element: <SignupPage />
  },
  {
    path: "auth/login",
    element: <LoginPage />
  },
]);

export default function App() {

  return (
    <RouterProvider router={router} />
  )
}
