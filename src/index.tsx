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
import "reveal.js/plugin/markdown/markdown";

import "./index.css";
import "./github-dark-dimmed.css";

import TableOfContents from "./home/TableOfContents";
import Lesson01 from "./presentations/module-01-variables/Lesson01-primitives";
import Lesson02 from "./presentations/module-01-variables/Lesson02-arrays-and-objects";
import Lesson03 from "./presentations/module-01-variables/Lesson03";
import { PresentationRoutes } from "./presentations";
import ErrorPage from "./ErrorPage";
import Module from "./atoms/Module";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TableOfContents />,
    errorElement: <ErrorPage />,
  },
  ...PresentationRoutes,
  {
    path: "/module-01",
    element: <Module />,
    children: [
      {
        path: "lesson-01",
        element: <Lesson01 />,
      },
    ]
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
