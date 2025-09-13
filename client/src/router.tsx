import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Products, { loader as productsLoader } from "./views/Products";
import NewProducts, { action as newProductsAction } from "./views/NewProducts";
import EditProduct from "./views/EditProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Products />,
        loader: productsLoader,
      },
      {
        path: "productos/nuevo",
        element: <NewProducts />,
        action: newProductsAction,
      },

      {
        path: "productos/:id/editar",
        element: <EditProduct />,
      },
    ],
  },
]);
