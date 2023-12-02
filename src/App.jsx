import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { About, Electronics, Home, Jewelry, Men, Women } from "./pages";
import Layout from "./pages/Layout";
import ProductDetail from "./pages/product-detail/ProductDetail";

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
        path: "electronics",
        element: <Electronics />,
      },
      {
        path: "jewelry",
        element: <Jewelry />,
      },
      {
        path: "men",
        element: <Men />,
      },
      {
        path: "women",
        element: <Women />,
      },
      {
        path: "/:title",
        element: <ProductDetail />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
