import CategoryRow from "./CategoryRow";

function CategoryTable({ categories, onDeleteCategory }) {
  return (
    <div className="card shadow-sm border-0">

      <div className="card-header bg-white py-3">
        <div className="d-flex justify-content-between align-items-center">

          <h2 className="h6 mb-0 text-secondary fw-bold text-uppercase">
            Registered Categories
          </h2>

          <span className="badge bg-primary">
            {categories.length}{" "}
            {categories.length === 1
              ? "Category"
              : "Categories"}
          </span>

        </div>
      </div>

      <div className="table-responsive">

        <table className="table table-hover align-middle mb-0">

          <thead className="table-light">
            <tr>
              <th>Category Name</th>
              <th>Description</th>
              <th>Date Added</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>

          <tbody>

            {categories.length === 0 ? (
              <tr>
                <td
                  colSpan="4"
                  className="text-center text-secondary py-5"
                >
                  No income categories found.
                </td>
              </tr>
            ) : (
              categories.map((category) => (
                <CategoryRow
                  key={category.id}
                  category={category}
                  onDeleteCategory={onDeleteCategory}
                />
              ))
            )}

          </tbody>

        </table>

      </div>
    </div>
  );
}

export default CategoryTable;