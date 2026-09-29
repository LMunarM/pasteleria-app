import React from 'react';

export default function Cart({ cartItems, onRemoveItem, onConfirmOrder }) {
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="cart-container">
      <h2 className="cart-title">Tu Carrito ({totalItems})</h2>
      
      {totalItems === 0 ? (
        <div className="empty-cart">
          <img src="./assets/images/illustration-empty-cart.svg" alt="Carrito vacio" />
          <p>Tus items anadidos apareceran aqui</p>
        </div>
      ) : (
        <div className="cart-content">
          <ul className="cart-list">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <div className="cart-item-details">
                  <p className="cart-item-name">{item.name}</p>
                  <div className="cart-item-price-info">
                    <span className="cart-item-qty">{item.quantity}x</span>
                    <span className="cart-item-unit-price">@ ${item.price.toFixed(2)}</span>
                    <span className="cart-item-total-price">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
                <button 
                  className="remove-btn" 
                  onClick={() => onRemoveItem(item.name)}
                  aria-label="Eliminar item"
                >
                  <img src="./assets/images/icon-remove-item.svg" alt="Eliminar" />
                </button>
              </li>
            ))}
          </ul>
          
          <div className="cart-total-section">
            <p>Total de la orden</p>
            <h3 className="cart-total-price">${totalPrice.toFixed(2)}</h3>
          </div>
          
          <div className="carbon-neutral">
            <img src="./assets/images/icon-carbon-neutral.svg" alt="" />
            <p>Esta es una entrega <strong>neutral en carbono</strong></p>
          </div>
          
          <button className="confirm-order-btn" onClick={onConfirmOrder}>
            Confirmar Orden
          </button>
        </div>
      )}
    </div>
  );
}