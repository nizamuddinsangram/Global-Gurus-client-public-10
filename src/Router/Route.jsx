import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddTouristSpot from "../Page/AddTouristSpot/AddTouristSpot";
import AllTouristsPage from "../Page/AllTouristPage/AllTouristsPage";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import MyListPage from "../Page/MyListPage/MyListPage";
import Register from "../Page/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <p>error </p>,
    children: [
      {
        path: "/",
        element: <Home />,
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
        element: <AddTouristSpot />,
      },
      {
        path: "/allTourists",
        element: <AllTouristsPage />,
        loader: () => fetch("http://localhost:7000/myPlaces"),
      },
      {
        path: "/myList",
        element: <MyListPage />,
        // loader: ({ params }) =>
        //   fetch(`http://localhost:7000/myPlaces${params.id}`),
      },
    ],
  },
]);

export default router;
