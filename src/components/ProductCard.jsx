import React from 'react';

export default function ProductCard({ product, cartItem, onUpdateQuantity }) {
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div className="product-card">
      <div className={`image-container ${quantity > 0 ? 'selected' : ''}`}>
        
        {/* Imagen simple sin fallbacks */}
        <img src={product.image} alt={product.name} className="product-image" />
        
        {quantity === 0 ? (
          <button 
            className="add-to-cart-btn" 
            onClick={() => onUpdateQuantity(product, 1)}
            tabIndex="0"
          >
            <img src="/assets/images/icon-add-to-cart.svg" alt="" />
            Anadir al carrito
          </button>
        ) : (
          <div className="active-cart-btn">
            <button 
              className="qty-btn" 
              onClick={() => onUpdateQuantity(product, -1)}
              aria-label="Disminuir cantidad"
            >
              <img src="/assets/images/icon-decrement-quantity.svg" alt="-" />
            </button>
            <span className="qty-text">{quantity}</span>
            <button 
              className="qty-btn" 
              onClick={() => onUpdateQuantity(product, 1)}
              aria-label="Aumentar cantidad"
            >
              <img src="/assets/images/icon-increment-quantity.svg" alt="+" />
            </button>
          </div>
        )}
      </div>
      
      <div className="product-info">
        <p className="product-category">{product.category}</p>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}