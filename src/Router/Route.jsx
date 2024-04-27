import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddTouristSpot from "../Page/AddTouristSpot/AddTouristSpot";
import AllTouristsPage from "../Page/AllTouristPage/AllTouristsPage";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import MyListPage from "../Page/MyListPage/MyListPage";
import Register from "../Page/Register/Register";
import Details from "../component/Details";
import MyListUpdate from "../component/MyListUpdate";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <p>error </p>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:7000/myPlaces"),
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
        loader: () => fetch("http://localhost:7000/myPlaces"),
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
        element: <MyListUpdate />,
        loader: ({ params }) =>
          fetch(`http://localhost:7000/singleList/${params.id}`),
      },
      {
        path: "details/:id",
        element: <Details />,
        loader: ({ params }) =>
          fetch(`http://localhost:7000/singleList/${params.id}`),
        // loader: ({ params }) =>
        //   fetch(`http://localhost:7000/details/${params.id}`),
      },
    ],
  },
]);

export default router;
