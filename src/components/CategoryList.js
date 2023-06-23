import React from "react";
import styles from "../styles/List.module.css";

function CategoryList({ categories, onEdit, onDelete }) {
  return (
    <div className={styles.TableContainer}>
      <table className={styles.Table}>
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
                <div className={styles.actionContainer}>
                  <button
                    className={`${styles.button} ${styles.editButton}`}
                    onClick={() => onEdit(category)}
                  >
                    Edit
                  </button>
                  <button
                    className={`${styles.button} ${styles.deleteButton}`}
                    onClick={() => onDelete(category)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CategoryList;
