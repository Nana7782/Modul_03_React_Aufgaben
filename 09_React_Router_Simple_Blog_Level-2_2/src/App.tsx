import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Article from "./pages/Article";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:article",
        element: <Article />,
      },
      {
        path: "*",
        element: <h4>Oh no, nothing found - 404</h4>,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
