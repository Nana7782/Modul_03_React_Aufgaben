import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import AllBeers from "./pages/AllBeers";
import RandomBeer from "./pages/RandomBeer";
import BeerDetail from "./pages/BeerDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Homepage /> },
      {
        path: "/beers/",
        element: <AllBeers />,
      },
      { path: "/beers/random", element: <RandomBeer /> },
      {
        path: "/beers/:id",
        element: <BeerDetail />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
