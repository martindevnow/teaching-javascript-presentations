import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";
import "reveal.js/plugin/highlight/highlight";

import "./index.css";
import "./github-dark-dimmed.css";

import Lesson01 from "./lesson-01/Lesson01";
import TableOfContents from "./TableOfContents";
import Lesson02 from "./lesson-02/Lesson02";
import Lesson03 from "./lesson-03/Lesson03";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TableOfContents />,
  },
  {
    path: "/lesson-01",
    element: <Lesson01 />,
  },
  {
    path: "/lesson-02",
    element: <Lesson02 />,
  },
  {
    path: "/lesson-03",
    element: <Lesson03 />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <div className="App">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
