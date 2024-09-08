import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  RouterProvider,
} from "react-router-dom";

export default function RoutesProvider() {
  const routesProvider = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<>Home</>} />
        <Route path="basket" element={<>Basket</>} />
        <Route path="error" element={<>Error</>} />
        <Route path="*" element={<Navigate to="/error" replace />} />
      </>
    )
  );

  return <RouterProvider router={routesProvider} />;
}
