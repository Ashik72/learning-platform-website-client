import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import CheckOut from "../components/CheckOut/CheckOut";
import Courses from "../components/Courses/Courses";
import CoursesItemsDetails from "../components/CoursesItemsDetails/CoursesItemsDetails";
import FAQ from "../components/FAQ/FAQ";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import NotFound from "../components/NotFound/NotFound";
import Register from "../components/Register/Register";
import { Main } from "../layout/Main";
import { PrivateRoute } from "./PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/course",
        element: <Courses></Courses>,
        loader: () =>
          fetch("https://aasignment-10-server-ashik72.vercel.app/course"),
      },
      {
        path: "/course/:id",
        element: <CoursesItemsDetails></CoursesItemsDetails>,
        loader: ({ params }) =>
          fetch(
            `https://aasignment-10-server-ashik72.vercel.app/course/${params.id}`
          ),
      },
      {
        path: "/course/:id/checkout",
        element: (
          <PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://aasignment-10-server-ashik72.vercel.app/course/${params.id}`
          ),
      },
      {
        path: "faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
