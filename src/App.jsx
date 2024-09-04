import React from "react";
import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// Layouts
import MainLayout from "./layouts/MainLayout";
import NewsLayout from "./layouts/NewsLayout";
import AuthLayout from "./layouts/AuthLayout";
import CatalogLayout from "./layouts/CatalogLayout";

// Pages
import Ad from "./pages/Ad";
import Home from "./pages/Home";
import News from "./pages/News";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AddCar from "./pages/AddCar";
import Contact from "./pages/Contact";
import Catalog from "./pages/Catalog";
import Comments from "./pages/Comments";
import Favorites from "./pages/Favorites";
import CarDetail from "./pages/CarDetail";
import NewsDetail from "./pages/NewsDetail";
import AddComment from "./pages/AddComment";
import CarComments from "./pages/CarComments";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        {/* home */}
        <Route index element={<Home />} />

        {/* catalog */}
        <Route path="catalog" element={<CatalogLayout />}>
          <Route index element={<Catalog />} />
          <Route path=":model" element={<Catalog />} />
          <Route path=":model/:marka" element={<Catalog />} />
          <Route path=":model/car/:id" element={<CarDetail />} />
        </Route>

        {/* rating */}
        <Route path="rating" element={<Comments />} />
        <Route path="rating/:model/:marka" element={<CarComments />} />

        {/* news */}
        <Route path="news" element={<NewsLayout />}>
          <Route index element={<News />} />
          <Route path=":title" element={<NewsDetail />} />
        </Route>

        {/* elon */}
        <Route path="elon" element={<Outlet />}>
          <Route index element={<AddCar />} />
          <Route path="sharx" element={<AddComment />} />
        </Route>

        {/* contact */}
        <Route path="contact" element={<Contact />} />

        {/* ads */}
        <Route path="ad" element={<Ad />} />

        {/* auth */}
        <Route path="auth" element={<AuthLayout />}>
          <Route index path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
        </Route>

        {/* favorites */}
        <Route path="favorites" element={<Favorites />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
