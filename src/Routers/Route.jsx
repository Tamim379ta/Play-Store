import { createBrowserRouter } from "react-router";
import Layout from "../MainLayout/Layout";
import Error from "../ErrorPages/Error";
import Hero from "../Components/Hero";
import Apps from "../Components/Apps";
import AppDetails from "../Components/AppDetails";
import Installation from "../Components/Installation";


export const router = createBrowserRouter ([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Hero />
      },
      {
        path:"/apps",
        element: <Apps />,
        loader: () => fetch('/data.json')
      },
      {
        path: "/installation",
        element: <Installation />

      },
      {
        path: "/appDetails/:id",
        element: <AppDetails />,
        loader: () => fetch('/data.json')
      }
    ],
    errorElement: <Error/>
  },
  
])