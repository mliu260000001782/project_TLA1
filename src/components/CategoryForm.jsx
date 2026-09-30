import { useState } from "react";

function CategoryForm({ onAddCategory }) {
  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = categoryName.trim();
    const description = categoryDescription.trim();

    if (!name || !description) {
      alert("Please complete both input fields.");
      return;
    }

    onAddCategory(name, description);

    setCategoryName("");
    setCategoryDescription("");
  };

  return (
    <div className="card shadow-sm border-0 mb-4">

      <div className="card-header bg-primary text-white py-3">
        <h2 className="h5 mb-0 fw-bold">
          Add Income Category
        </h2>
      </div>

      <div className="card-body p-4">

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label
              htmlFor="txtCatName"
              className="form-label fw-semibold"
            >
              Category Name
            </label>

            <input
              type="text"
              id="txtCatName"
              className="form-control"
              placeholder="e.g., Consulting"
              value={categoryName}
              onChange={(event) =>
                setCategoryName(event.target.value)
              }
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="txtCatDesc"
              className="form-label fw-semibold"
            >
              Description
            </label>

            <input
              type="text"
              id="txtCatDesc"
              className="form-control"
              placeholder="e.g., Enterprise technical support contract"
              value={categoryDescription}
              onChange={(event) =>
                setCategoryDescription(event.target.value)
              }
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary px-4 fw-semibold"
          >
            + Add Category
          </button>

        </form>

      </div>
    </div>
  );
}

export default CategoryForm;