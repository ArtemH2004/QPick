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
import { FavoritesContent } from "@/pages/favorites/FavoritesContent";

export default function RoutesProvider() {
  const routesProvider = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<PageWrapper />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<HomeContent />} />
          <Route path="basket" element={<BasketContent />} />
          <Route path="favorites" element={<FavoritesContent />} />
        </Route>
        <Route path="error" element={<>Error</>} />
        <Route path="*" element={<Navigate to="/error" replace />} />
      </>
    )
  );

  return <RouterProvider router={routesProvider} />;
}
