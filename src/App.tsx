import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import DetailsPage from "./pages/details/DetailsPage";
import Explore from "./pages/explore/Explore";
import HomeLayout from "./pages/HomeLayout";
import Error from "./pages/Error";
import Search from "./pages/search/Search";
import ScrollToTop from "./components/ScrollToTop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/details/:id/:type",
        element: <DetailsPage></DetailsPage>,
      },
      {
        path: "/explore/:type",
        element: <Explore></Explore>,
      },
      {
        path: "/search/:searchQuery",
        element: <Search></Search>,
      },
    ],
  },
]);

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router}></RouterProvider>
      
    </ThemeProvider>
  );
};

export default App;
