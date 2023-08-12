import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/COntact";
import RestaurantMenu from "./components/RestaurantMenu";
import useOnlineStatus from "./utils/useOnlineStatus";
import Loding from "./components/Loding";

const RecipeHome = lazy(() => import("./components/RecipeHome"));
const Recipe = lazy(() => import("./components/Recipe"));

const WebPage = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <>
      <NavBar />
      {onlineStatus ? (
        <Outlet />
      ) : (
        <h1 style={{ paddingTop: "180px", textAlign: "center" }}>
          Oop's!! You are offline. Please Check your internet connection...
        </h1>
      )}
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <WebPage />,
    errorElement: (
      <>
        <NavBar />
        <Error />
      </>
    ),
    children: [
      {
        path: "/",
        element: (
          <>
            <Main />
          </>
        ),
      },
      {
        path: "/recipes",
        element: (
          <>
            <Suspense fallback={<Loding />}>
              <RecipeHome />
              <Recipe />
            </Suspense>
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
