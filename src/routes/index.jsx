import { createBrowserRouter } from "react-router-dom";
import Share from "../components/Share";
import  { AroundYou, Discover, TopArtists, TopCharts } from "../pages";


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
        element: <AroundYou />,
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
