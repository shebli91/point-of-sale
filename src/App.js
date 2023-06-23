import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Units from "./pages/Units";
import Pos from "./pages/Pos";
import Login from "./pages/Login";
import { useContext } from "react";

import { ProductsContextProvider as ProductsProvider } from "./contexts/productsContext";
import { CategoriesContextProvider as CategoriesProvider } from "./contexts/categoriesContext";
import { UnitsOfMeasureContextProvider as UnitsOfMeasureProvider } from "./contexts/unitsOfMeasureContext";
import CartsProvider from "./contexts/cartsContext";
import { UserContextProvider } from "./contexts/UserContext";
import ProtectedRoute from "./ProtectedRoute";
import { UserContext } from "./contexts/UserContext";

function InnerApp() {
  const { user } = useContext(UserContext);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          }
        />
        <Route
          path="/categories"
          element={
            <ProtectedRoute>
              <Categories />
            </ProtectedRoute>
          }
        />
        <Route
          path="/units"
          element={
            <ProtectedRoute>
              <Units />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pos"
          element={
            <ProtectedRoute>
              <Pos />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={user ? <Navigate to="/products" replace /> : <Login />}
        />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

function App() {
  return (
    <UserContextProvider>
      <ProductsProvider>
        <CategoriesProvider>
          <UnitsOfMeasureProvider>
            <CartsProvider>
              <InnerApp />
            </CartsProvider>
          </UnitsOfMeasureProvider>
        </CategoriesProvider>
      </ProductsProvider>
    </UserContextProvider>
  );
}

export default App;
