import { createBrowserRouter, RouterProvider } from "react-router";

import Layout from "./components/Layout/components/index.jsx";
import { PrivateRoute } from "./private-route/index.jsx";
import MaintenancePage from "./pages/maintenance/index.jsx";

import Login from "./pages/login/components/index.jsx";
import SignUp from "./pages/sign-up/components/index.jsx";
import Cart from "./pages/cart/components/index.jsx";
import Home from "./pages/home/components/Home.jsx";
import Shop from "./pages/shop/components/index.jsx";
import FavoritePlants from "./pages/favorite-plants/components/index.jsx";
import PlantsCart from "./pages/plantsCart/components/index.jsx";
import NotFound from "./pages/404/index.jsx";
import { PlantLoader } from "./components/Loader/plantLoader/componets/PlantLoaderId.jsx";

import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'shop', element: <MaintenancePage/> },
      { path: 'My-chosen-plants', element: <FavoritePlants /> },
      { path: 'blogs', element: <MaintenancePage/> },
    ],
  },
  { path: 'login', element: <Login /> },
  { path: 'signup', element: <SignUp /> },
  { path: '*', element: <NotFound /> },
  {path : 'plants/:id', element : <PlantsCart/>, loader: PlantLoader},
  {
    path: 'cart', element:
      <PrivateRoute>
        <Cart />
      </PrivateRoute>
  }
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
