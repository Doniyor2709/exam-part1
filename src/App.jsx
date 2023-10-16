import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { GeneralContextInfo } from "./contexts/GeneralContext";

import UserLayout from "./components/layouts/UserLayout";


import HomePage from "./pages/FrondPages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import AboutPage from "./pages/FrondPages/AboutPage";
import CategoryPage from "./pages/FrondPages/CategoryPage";
import PostsPage from "./pages/FrondPages/PostsPage";
import PostPage from "./pages/FrondPages/PostPage";
import RegisterPage from "./pages/FrondPages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import AccountPage from "./pages/AccountPage";




const App = () => {
  const { isAuthenticated, role } = useContext(GeneralContextInfo);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<HomePage />} />
          <Route path="category/:id" element={<CategoryPage />} />
          <Route path="posts" element={<PostsPage />} />
          <Route path="posts/:id" element={<PostPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route
            path="account"
            element={
              isAuthenticated && role === "user" ? (
                <AccountPage />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
