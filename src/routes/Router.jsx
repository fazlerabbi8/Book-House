import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Listed from "../pages/Listed";
import PagesToRead from "../pages/PagesToRead";
import BookDetails from "../components/BookDetails/BookDetails";
import ErrorElement from "../components/ErrorElement/ErrorElement";
const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "listed",
        Component: Listed,
      },
      {
        path: "pagestoread",
        Component: PagesToRead,
      },
      {
        path:"books/:bookId",
        Component:BookDetails,
        loader:() => fetch('booksData.json')
      }
    ],
  },
]);

export default router;