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

function App() {
  return (
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
  );
}

export default App;
