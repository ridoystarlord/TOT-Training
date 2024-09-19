import { createBrowserRouter } from "react-router-dom";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import ProductsPage from "../pages/ProductsPage";
import { ROUTES } from "../routes";
import CommonLayout from "../layout/CommonLayout";
import Homepage from "../pages/Homepage";

const router = createBrowserRouter([
  {
    path: `${ROUTES.HOME}`,
    element: <CommonLayout />,
    children: [
      {
        path: `${ROUTES.HOME}`,
        element: <Homepage />,
      },
      {
        path: `${ROUTES.PRODUCTS}`,
        element: <ProductsPage />,
      },
      {
        path: `${ROUTES.SINGLE_PRODUCTS.STATIC}`,
        element: <ProductDetailsPage />,
      },
    ],
  },
]);

export default router;
