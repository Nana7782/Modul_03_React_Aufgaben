import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Car from "./pages/Car";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/:car",
      element: <Car />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
