import React from "react";

const ProductCard = ({ product, onEdit, onDelete }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>Code: {product.code}</p>
      <p>Description: {product.description}</p>
      <img src={product.images[0]} alt={product.name} />
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <p>Unit: {product.unit}</p>
      <button onClick={() => onEdit(product)}>Edit</button>
      <button onClick={() => onDelete(product)}>Delete</button>
    </div>
  );
};

export default ProductCard;
