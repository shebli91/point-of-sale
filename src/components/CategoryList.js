import React from "react";

function CategoryList({ categories, onEdit, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Category Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((category, index) => (
          <tr key={category.id}>
            <td>{index + 1}</td>
            <td>{category.name}</td>
            <td>
              <button onClick={() => onEdit(category)}>Edit</button>
              <button onClick={() => onDelete(category)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CategoryList;
