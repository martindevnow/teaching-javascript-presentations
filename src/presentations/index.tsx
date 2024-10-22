import Module from "../atoms/Module";
import ErrorPage from "../ErrorPage";
import { Module00Routes } from "./module-00-introduction";
import { Module01Routes } from "./module-01-variables";
import { Module02Routes } from "./module-02-control-flow";

export const PresentationRoutes = [
  {
    path: "/module-00",
    element: <Module />,
    errorElement: <ErrorPage />,
    children: [
      ...Module00Routes
    ]
  },
  {
    path: "/module-01",
    element: <Module />,
    errorElement: <ErrorPage />,
    children: [
      ...Module01Routes
    ]
  },
  {
    path: "/module-02",
    element: <Module />,
    errorElement: <ErrorPage />,
    children: [
      ...Module02Routes
    ]
  },


]