
function ProductCard({ product, onViewDetails, onApply }) {
  const isAvailable = product.status === "Available";

  return (
    <article className="product-card">
      <div className="product-card-header">
        <div className="product-icon">{product.icon}</div>

        <span
          className={
            isAvailable
              ? "status-badge available"
              : "status-badge active"
          }
        >
          <span className="status-dot"></span>
          {product.status}
        </span>
      </div>

      <p className="product-category">{product.category}</p>

      <h3>{product.name}</h3>

      <p className="product-description">{product.description}</p>

      <div className="product-metric">
        <p>
          {product.category === "Savings"
            ? "Account Balance"
            : product.category === "Credit Card"
            ? "Available Credit"
            : product.category === "Loan"
            ? "Interest Rate"
            : "Investment Value"}
        </p>

        <h2>{product.metric}</h2>
      </div>

      <div className="product-actions">
        <button
          className="details-button"
          onClick={() => onViewDetails(product)}
        >
          View Details <span>→</span>
        </button>

        {isAvailable && (
          <button
            className="apply-button"
            onClick={() => onApply(product)}
          >
            Apply
          </button>
        )}
      </div>
    </article>
  );
}

export default ProductCard;
