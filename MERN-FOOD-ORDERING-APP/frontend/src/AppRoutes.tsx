import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AuthCallbackPage from "./pages/AuthCallBackPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";
import ManageRestaurantPage from "./pages/ManageRestaurantPage";
import RestaurantPage from "./pages/admin/RestaurantPage";
import ProductPage from "./pages/admin/ProductsPage";
import SearchPage from "./pages/SearchPage";
import DetailPage from "./pages/DetailPage";
import OrderPage from "./pages/admin/OrderPage";
import ReportPage from "./pages/admin/reportPage";
import Layout from "./layout/layout";
import OrderStatusPage from "./pages/OrderStatusPage";
import Admin from "./pages/admin/Admin";
import Customers from "./pages/admin/Customers";

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
      <Route
        path="/search/:city"
        element={
          <Layout showHero={false}>
            <SearchPage />
          </Layout>
        }
      />
      <Route
        path="/detail/:restaurantId"
        element={
          <Layout showHero={false}>
            <DetailPage />
          </Layout>
        }
      />
      <Route element={<ProtectedRoute />}>
        <Route
          path="/order-status"
          element={
            <Layout>
              <OrderStatusPage />
            </Layout>
          }
        />
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
        <Route
          path="/admin/orders"
          element={
            <Layout>
              <OrderPage />
            </Layout>
          }
        />
        <Route
          path="/admin/reports"
          element={
            <Layout>
              <ReportPage />
            </Layout>
          }
        />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;