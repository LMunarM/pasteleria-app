import React from 'react';

export default function OrderModal({ cartItems, onResetOrder }) {
  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img src="./assets/images/icon-order-confirmed.svg" alt="Orden Confirmada" className="modal-icon" />
        <h2 className="modal-title">Orden Confirmada</h2>
        <p className="modal-subtitle">Esperamos que disfrutes tu comida!</p>
        
        <div className="modal-items-container">
          <ul className="modal-items-list">
            {cartItems.map((item, index) => (
              <li key={index} className="modal-item">
                <div className="modal-item-left">
                  <img src={item.image.thumbnail} alt={item.name} className="modal-item-thumb" />
                  <div className="modal-item-info">
                    <p className="modal-item-name">{item.name}</p>
                    <div className="modal-item-price-calc">
                      <span className="modal-item-qty">{item.quantity}x</span>
                      <span className="modal-item-unit">@ ${item.price.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <p className="modal-item-total">${(item.price * item.quantity).toFixed(2)}</p>
              </li>
            ))}
          </ul>
          <div className="modal-total-section">
            <p>Total de la orden</p>
            <h3 className="modal-total-price">${totalPrice.toFixed(2)}</h3>
          </div>
        </div>
        
        <button className="start-new-order-btn" onClick={onResetOrder}>
          Empezar Nueva Orden
        </button>
      </div>
    </div>
  );
}