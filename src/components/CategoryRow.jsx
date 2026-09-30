function CategoryRow({ category, onDeleteCategory }) {
  return (
    <tr>

      <td className="fw-semibold text-dark">
        {category.name}
      </td>

      <td className="text-secondary">
        {category.description}
      </td>

      <td className="text-secondary">
        {category.date}
      </td>

      <td className="text-center">

        <button
          type="button"
          className="btn btn-sm btn-outline-danger"
          onClick={() => onDeleteCategory(category.id)}
        >
          Delete
        </button>

      </td>

    </tr>
  );
}

export default CategoryRow;