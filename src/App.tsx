import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import { HomePage } from "./pages"

const router = createBrowserRouter([
  {
    path: "/",
    element: (<HomePage />),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

export default function App() {

  return (
    <RouterProvider router={router} />
  )
}
