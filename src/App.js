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

import { ProductsContextProvider as ProductsProvider } from "./contexts/productsContext";
import { CategoriesContextProvider as CategoriesProvider } from "./contexts/categoriesContext";
import { UnitsOfMeasureContextProvider as UnitsOfMeasureProvider } from "./contexts/unitsOfMeasureContext";
import CartsProvider from "./contexts/cartsContext";

function App() {
  return (
    <ProductsProvider>
      <CategoriesProvider>
        <UnitsOfMeasureProvider>
          <CartsProvider>
            <Router>
              <Navbar />
              <Routes>
                <Route path="/products" element={<Products />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/units" element={<Units />} />
                <Route path="/pos" element={<Pos />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Navigate to="/products" />} />
              </Routes>
            </Router>
          </CartsProvider>
        </UnitsOfMeasureProvider>
      </CategoriesProvider>
    </ProductsProvider>
  );
}

export default App;
