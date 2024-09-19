import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { PageWrapper } from "@/pages/PageWrapper";
import { HomeContent } from "@/pages/home/components/HomeContent";
import { BasketContent } from "@/pages/basket/components/BasketContent";
import { OrderContent } from "@/pages/order/components/OrderContent";
import { FavoritesContent } from "@/pages/favorites/FavoritesContent";
import { ErrorPage } from "@/pages/error/ErrorPage";

export default function RoutesProvider() {
  const routesProvider = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<PageWrapper />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<HomeContent />} />
          <Route path="basket" element={<BasketContent />} />
          <Route path="order" element={<OrderContent />} />
          <Route path="favorites" element={<FavoritesContent />} />
        </Route>
        <Route path="error" element={<ErrorPage />} />
        <Route path="*" element={<Navigate to="/error" replace />} />
      </>
    )
  );

  return <RouterProvider router={routesProvider} />;
}
