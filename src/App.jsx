import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import {
  About,
  Electronics,
  Home,
  Jewelry,
  Men,
  Women,
  ProductDetail,
} from "./pages";
import Layout from "./pages/Layout";

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
        path: ":category/",
        element: <Electronics />,
      },
      {
        path: ":category/:id",
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
