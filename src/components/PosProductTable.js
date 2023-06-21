import React, { useContext, useState, useEffect } from "react";
import { ProductsContext } from "../contexts/productsContext";
import { CartsContext } from "../contexts/cartsContext";
import { CategoriesContext } from "../contexts/categoriesContext";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import styles from "./PosProductTable.module.css";

function PosProductTable() {
  const { products } = useContext(ProductsContext);
  const { addProductToCart, selectedCart } = useContext(CartsContext);
  const { categories } = useContext(CategoriesContext);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filter, setFilter] = useState("");
  const [searchText, setSearchText] = useState("");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  useEffect(() => {
    setFilteredProducts(
      products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchText.toLowerCase()) &&
          (filter === "" ||
            product.category.toLowerCase() === filter.toLowerCase())
      )
    );
  }, [products, searchText, filter]);

  return (
    <div className={styles.posProductTable}>
      <div className={styles.searchFilterContainer}>
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
        <Filter
          options={categories.map((c) => c.name)}
          filter={filter}
          onFilterChange={handleFilterChange}
        />
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Add to Cart</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td>
                <img src={product.images} alt={product.name} />
              </td>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>
                <button
                  className={styles.addToCartButton}
                  onClick={() => {
                    if (selectedCart) {
                      addProductToCart(selectedCart.id, product);
                    } else {
                      alert("Please select a cart or create a new one.");
                    }
                  }}
                >
                  Add to cart
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PosProductTable;
