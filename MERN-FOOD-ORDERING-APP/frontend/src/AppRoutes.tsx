import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";

import AuthCallbackPage from "./pages/AuthCallBackPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";
import Admin from "./pages/admin/Admin";
import Customers from "./pages/admin/Customers";
import ManageRestaurantPage from "./pages/ManageRestaurantPage";
import HomePage from "./pages/HomePage";
import RestaurantPage from "./pages/admin/RestaurantPage";
import ProductPage from "./pages/admin/ProductsPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout showHero>
            <HomePage />
          </Layout>
        }
      />
      <Route path="/auth-callback" element={<AuthCallbackPage />} />
      <Route element={<ProtectedRoute />}>
        <Route
          path="/user-profile"
          element={
            <Layout>
              <UserProfilePage />
            </Layout>
          }
        />
        <Route
          path="/manage-restaurant"
          element={
            <Layout>
              <ManageRestaurantPage />
            </Layout>
          }
        />
        <Route
          path="/admin/dashboard"
          element={
            <Layout>
              <Admin />
            </Layout>
          }
        />
        <Route
          path="/admin/customers"
          element={
            <Layout>
              <Customers />
            </Layout>
          }
        />
        <Route
          path="/admin/restaurants"
          element={
            <Layout>
              <RestaurantPage />
            </Layout>
          }
        />
        <Route
          path="/admin/products"
          element={
            <Layout>
              <ProductPage />
            </Layout>
          }
        />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
