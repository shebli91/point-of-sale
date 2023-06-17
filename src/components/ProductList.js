import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ products, onEdit, onDelete }) {
  return (
    <div>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default ProductList;
