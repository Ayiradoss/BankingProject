
import { useMemo, useState } from "react";
import Sidebar from "./components/Sidebar";
import ProductCard from "./components/ProductCard";
import ProductDetailsModal from "./components/ProductDetailsModal";
import products from "./data/products";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Products");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [message, setMessage] = useState("");

  const categories = [
    "All Products",
    "Savings",
    "Credit Card",
    "Loan",
    "Wealth",
  ];

  const activeCount = products.filter(
    (product) => product.status === "Active"
  ).length;

  const availableCount = products.filter(
    (product) => product.status === "Available"
  ).length;

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        product.name.toLowerCase().includes(searchText) ||
        product.category.toLowerCase().includes(searchText);

      const matchesCategory =
        category === "All Products" || product.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  function handleApply(product) {
    setMessage(
      `${product.name} selected. This is a demo application interaction.`
    );
  }

  return (
    <div className="dashboard">
      <Sidebar />

      <main className="main-content" id="dashboard">
        <header className="topbar">
          <div>
            <p className="breadcrumb">Pages / Dashboard</p>
          </div>

          <div className="topbar-right">
            <button className="notification-button" aria-label="Notifications">
              ♧
              <span className="notification-dot"></span>
            </button>

            <div className="topbar-profile">
              <div className="avatar">AD</div>
              <div>
                <h4>Ayira Doss</h4>
                <p>Customer</p>
              </div>
            </div>
          </div>
        </header>

        <section className="welcome-section">
          <div>
            <p className="eyebrow">OVERVIEW</p>
            <h1>Welcome back, Ayira 👋</h1>
            <p className="welcome-description">
              Manage your banking products and explore your options.
            </p>
          </div>

          <div className="account-label">
            <span>◉</span>
            Personal Banking
          </div>
        </section>

        <section className="stats-grid">
          <div className="stat-card">
            <div className="stat-card-top">
              <span className="stat-icon blue">▦</span>
              <span>Total Products</span>
            </div>
            <h2>{products.length}</h2>
            <p>Products in your dashboard</p>
          </div>

          <div className="stat-card">
            <div className="stat-card-top">
              <span className="stat-icon green">✓</span>
              <span>Active Products</span>
            </div>
            <h2>{activeCount}</h2>
            <p>Currently active products</p>
          </div>

          <div className="stat-card">
            <div className="stat-card-top">
              <span className="stat-icon orange">＋</span>
              <span>Available Products</span>
            </div>
            <h2>{availableCount}</h2>
            <p>Products available to explore</p>
          </div>
        </section>

        <section className="catalog-section" id="products">
          <div className="section-heading">
            <div>
              <p className="eyebrow">YOUR FINANCES</p>
              <h2>Banking Products</h2>
              <p className="section-description">
                Explore and manage your financial products.
              </p>
            </div>

            <span className="product-count">
              {filteredProducts.length} products
            </span>
          </div>

          <div className="catalog-toolbar">
            <div className="search-box">
              <span>⌕</span>

              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />

              {search && (
                <button
                  className="clear-search"
                  onClick={() => setSearch("")}
                >
                  ×
                </button>
              )}
            </div>
          </div>

          <div className="category-filters">
            {categories.map((item) => (
              <button
                key={item}
                className={
                  category === item
                    ? "category-button selected"
                    : "category-button"
                }
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          {message && (
            <div className="success-message">
              <span>✓</span>
              <p>{message}</p>
              <button onClick={() => setMessage("")}>×</button>
            </div>
          )}

          <div className="product-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onViewDetails={setSelectedProduct}
                  onApply={handleApply}
                />
              ))
            ) : (
              <div className="empty-state">
                <div>⌕</div>
                <h3>No products found</h3>
                <p>Try another search or category.</p>

                <button
                  onClick={() => {
                    setSearch("");
                    setCategory("All Products");
                  }}
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        <footer className="footer">
          <p>© 2026 BankSphere. All rights reserved.</p>
          <p>Banking Dashboard Demo</p>
        </footer>
      </main>

      <ProductDetailsModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onApply={handleApply}
      />
    </div>
  );
}

export default App;
