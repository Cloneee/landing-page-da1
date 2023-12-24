import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Homepage, NotFound } from "../pages/index.js";
import MainLayout from "../layouts/MainLayout/MainLayout.jsx";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    path: "/",
    children: [{ element: <Homepage />, index: true }],
  },
  {
    element: <NotFound />,
    path: "/404",
  },
  {
    element: <Navigate to="/404" replace />,
    path: "*",
  },
]);

export const MainRouter = () => <RouterProvider router={router} />;
