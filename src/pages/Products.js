import React, { useState, useEffect, useContext } from "react";
import { ProductsContext } from "../contexts/productsContext";
import { CategoriesContext } from "../contexts/categoriesContext";
import ProductList from "../components/ProductList";
import ProductModal from "../components/ProductModal";
import DeleteConfirmationModal from "../components/DeleteConfirmationModal";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import styles from "../styles/Products.module.css";

function Products() {
  const { products, deleteExistingProduct } = useContext(ProductsContext);
  const { categories } = useContext(CategoriesContext);

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchText, setSearchText] = useState("");

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [filter, setFilter] = useState("");

  const handleOpenModal = (product) => {
    if (product && product.id) {
      setSelectedProduct(product);
    } else {
      setSelectedProduct({
        images: [""],
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  const handleOpenDeleteModal = (product) => {
    setSelectedProduct(product);
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setSelectedProduct(null);
    setIsDeleteModalOpen(false);
  };

  const handleDeleteProduct = (product) => {
    deleteExistingProduct(product.id);
    handleCloseDeleteModal();
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
    <div>
      <div className={styles.searchFilterContainer}>
        <div className={styles.searchBarFilter}>
          <SearchBar searchText={searchText} setSearchText={setSearchText} />
          <Filter
            filter={filter}
            setFilter={setFilter}
            options={categories.map((c) => c.name)}
            onFilterChange={(newFilter) => setFilter(newFilter)}
          />
        </div>
        <div>
          <button onClick={() => handleOpenModal({})}>Add Product</button>
        </div>
      </div>
      <ProductList
        products={filteredProducts}
        onEdit={handleOpenModal}
        onDelete={handleOpenDeleteModal}
        filter={filter}
      />
      <ProductModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        product={selectedProduct || {}}
        onClose={handleCloseModal}
      ></ProductModal>
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onRequestClose={handleCloseDeleteModal}
        object={selectedProduct || {}}
        onDelete={handleDeleteProduct}
        objectType="product"
      />
    </div>
  );
}

export default Products;
