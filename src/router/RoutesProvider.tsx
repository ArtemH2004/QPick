import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { HomePage } from "@/pages/home/HomePage";
import { BasketPage } from "@/pages/basket/BasketPage";

export default function RoutesProvider() {
  const routesProvider = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<HomePage />} />
        <Route path="basket" element={<BasketPage />} />
        <Route path="error" element={<>Error</>} />
        <Route path="*" element={<Navigate to="/error" replace />} />
      </>
    )
  );

  return <RouterProvider router={routesProvider} />;
}
