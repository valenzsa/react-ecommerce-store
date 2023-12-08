import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { About, Home, Category, ProductDetail } from "./pages";
import Layout from "./pages/Layout";
import { useState } from "react";

function App() {
  const [categoryName, setCategoryName] = useState("");

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <Home
              categoryName={categoryName}
              setCategoryName={setCategoryName}
            />
          ),
        },
        {
          path: ":category/",
          element: (
            <Category
              categoryName={categoryName}
              setCategoryName={setCategoryName}
            />
          ),
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

  return (
    <RouterProvider router={router} fallbackElement={<h2>Loading...</h2>} />
  );
}

export default App;
