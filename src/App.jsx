import { useState } from "react";
import CategoryForm from "./components/CategoryForm";
import CategoryTable from "./components/CategoryTable";
import "./App.css";

function App() {
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addCategory = (name, description) => {
    const newCategory = {
      id: Date.now(),
      name,
      description,
      date: new Date().toLocaleDateString()
    };

    setCategories((currentCategories) => [
      ...currentCategories,
      newCategory
    ]);
  };

  const deleteCategory = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this category?"
    );

    if (confirmed) {
      setCategories((currentCategories) =>
        currentCategories.filter((category) => category.id !== id)
      );
    }
  };

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="container py-5">

      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold text-primary">
          Enterprise Income Tracker
        </h1>

        <p className="text-secondary">
          Organize and manage your income categories in one place.
        </p>
      </div>

      {/* Statistics */}
      <div className="row mb-4">
        <div className="col-md-4 mx-auto">
          <div className="card shadow-sm border-0 text-center stats-card">
            <div className="card-body">
              <h6 className="text-secondary text-uppercase fw-bold">
                Total Categories
              </h6>

              <h2 className="display-6 fw-bold text-primary mb-0">
                {categories.length}
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <CategoryForm onAddCategory={addCategory} />

      {/* Search */}
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body">
          <label
            htmlFor="searchCategory"
            className="form-label fw-semibold"
          >
            Search Categories
          </label>

          <input
            type="text"
            id="searchCategory"
            className="form-control"
            placeholder="Search by category or description..."
            value={searchTerm}
            onChange={(event) =>
              setSearchTerm(event.target.value)
            }
          />
        </div>
      </div>

      {/* Table */}
      <CategoryTable
        categories={filteredCategories}
        onDeleteCategory={deleteCategory}
      />

    </main>
  );
}

export default App;