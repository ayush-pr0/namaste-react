import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/COntact";
import RestaurantMenu from "./components/RestaurantMenu";

const WebPage = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <WebPage />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Main />
            <Footer />
          </>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:reqId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
