import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About, Electronics, Home, Jewelry, Men, Women } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/electronics",
    element: <Electronics />,
  },
  {
    path: "/jewelry",
    element: <Jewelry />,
  },
  {
    path: "/men",
    element: <Men />,
  },
  {
    path: "/women",
    element: <Women />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
