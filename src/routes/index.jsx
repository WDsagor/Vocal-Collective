import { createBrowserRouter } from "react-router-dom";
import Share from "../components/Share";
import  { Discover, SearchArea, TopArtists, TopCharts } from "../pages";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Share />,
    children: [
      {
        path: "/",
        element: <Discover />,
      },
      {
        path: "around-you",
        element: <SearchArea />,
      },
      {
        path: "top-artists",
        element: <TopArtists />,
      },
      {
        path: "top-charts",
        element: <TopCharts />,
      },
    ],
  },
]);
