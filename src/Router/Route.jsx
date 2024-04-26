import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../Layout/Main";
import AddTouristSpot from "../Page/AddTouristSpot/AddTouristSpot";
import AllTouristsPage from "../Page/AllTouristPage/AllTouristsPage";
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
        element: <App />,
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
