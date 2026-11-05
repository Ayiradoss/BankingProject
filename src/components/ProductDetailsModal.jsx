
function ProductDetailsModal({ product, onClose, onApply }) {
  if (!product) {
    return null;
  }

  const isAvailable = product.status === "Available";

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="details-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        <div className="modal-product-icon">{product.icon}</div>

        <p className="eyebrow">PRODUCT INFORMATION</p>

        <h2>{product.name}</h2>

        <p className="modal-description">{product.description}</p>

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

        <div className="details-list">
          <div className="detail-row">
            <span>Product ID</span>
            <strong>#{product.id}</strong>
          </div>

          <div className="detail-row">
            <span>Product Name</span>
            <strong>{product.name}</strong>
          </div>

          <div className="detail-row">
            <span>Category</span>
            <strong>{product.category}</strong>
          </div>

          {Object.entries(product.details).map(([label, value]) => (
            <div className="detail-row" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>

        <div className="modal-actions">
          <button className="modal-secondary" onClick={onClose}>
            Close
          </button>

          {isAvailable && (
            <button
              className="modal-primary"
              onClick={() => {
                onApply(product);
                onClose();
              }}
            >
              Apply Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsModal;
