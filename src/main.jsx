import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Products from "./Pages/Home/Products";
import ProductDetails from "./Pages/Home/ProductDetails";
import About from "./Pages/About/About";
import AllOrganicProducts from "./Pages/Home/AllOrganicProducts";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children : [
      {
        path : "/",
        element : <Home></Home>
      },
      {
        path : "/products/:category",
        element : <Products></Products>
      },
      {
        path : "/productDetails/:id",
        element : <ProductDetails></ProductDetails>
      },
      {
        path : "/about",
        element : <About></About>
      },
      {
        path : "/allOrganicProducts",
        element : <AllOrganicProducts></AllOrganicProducts>
      },
      {
        path : "/signIn",
        element : <SignIn></SignIn>
      },
      {
        path : "/singUp",
        element : <SignUp></SignUp>
      }
    ]
  },
]);

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
