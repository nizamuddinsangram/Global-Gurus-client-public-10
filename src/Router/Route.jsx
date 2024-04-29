import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddTouristSpot from "../Page/AddTouristSpot/AddTouristSpot";
import AllTouristsPage from "../Page/AllTouristPage/AllTouristsPage";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import MyListPage from "../Page/MyListPage/MyListPage";
import Register from "../Page/Register/Register";
import CountryAllPlaces from "../component/CountryAllPlaces";
import Details from "../component/Details";
import MyListUpdate from "../component/MyListUpdate";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://southeast-asia-server-kappa.vercel.app/myPlaces"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/addTourist",
        element: (
          <PrivateRoute>
            <AddTouristSpot />
          </PrivateRoute>
        ),
      },
      {
        path: "/allTourists",
        element: <AllTouristsPage />,
        loader: () =>
          fetch("https://southeast-asia-server-kappa.vercel.app/myPlaces"),
      },
      {
        path: "/myList",
        element: (
          <PrivateRoute>
            <MyListPage />
          </PrivateRoute>
        ),
      },
      {
        path: "update/:id",
        element: (
          <PrivateRoute>
            <MyListUpdate />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://southeast-asia-server-kappa.vercel.app/singleList/${params.id}`
          ),
      },
      {
        path: "details/:id",
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://southeast-asia-server-kappa.vercel.app/singleList/${params.id}`
          ),
        // loader: ({ params }) =>
        //   fetch(`https://southeast-asia-server-kappa.vercel.app/details/${params.id}`),
      },
      {
        path: "country/:countryName",
        element: <CountryAllPlaces />,
        loader: ({ params }) =>
          fetch(
            `https://southeast-asia-server-kappa.vercel.app/allCountry/${params.countryName}`
          ),
      },
    ],
  },
]);

export default router;
