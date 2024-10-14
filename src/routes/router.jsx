import {
  createBrowserRouter,
} from "react-router-dom";
import Layout from "../components/Layout";
import AllTeeniepings from "../pages/AllTeeniepings";
import TeeniepingDetail from "../pages/TeeniepingDetail";
import ErrorPage from "../pages/ErrorPage";
import SearchTeenieping from "../pages/SearchTeenieping";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AllTeeniepings />,
      },
      {
        path: "teeniepings/:id",
        element: <TeeniepingDetail />,
      },
      {
        path: "teeniepings/search",
        element: <SearchTeenieping />,
      }
    ]
  },
]);

export default router;
