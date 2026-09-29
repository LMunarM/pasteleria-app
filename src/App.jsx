import React, { useState, useEffect } from 'react';
import './App.css';
import { products } from './data';
import { getCart, updateCartItem, removeFromCart, resetCart } from './api/cartApi';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import OrderModal from './components/OrderModal';

function App() {
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Cargar carrito inicial si existiera
    getCart().then(data => setCart(data));
  }, []);

  const handleUpdateQuantity = async (product, change) => {
    const updatedCart = await updateCartItem(product, change);
    setCart(updatedCart);
  };

  const handleRemoveItem = async (productName) => {
    const updatedCart = await removeFromCart(productName);
    setCart(updatedCart);
  };

  const handleConfirmOrder = () => {
    setIsModalOpen(true);
  };

  const handleResetOrder = async () => {
    const emptyCart = await resetCart();
    setCart(emptyCart);
    setIsModalOpen(false);
  };

  return (
    <div className="app-container">
      <main className="main-content">
        <h1 className="page-title">Postres</h1>
        <div className="products-grid">
          {products.map((product, index) => {
            const cartItem = cart.find(item => item.name === product.name);
            return (
              <ProductCard 
                key={index} 
                product={product} 
                cartItem={cartItem} 
                onUpdateQuantity={handleUpdateQuantity} 
              />
            );
          })}
        </div>
      </main>
      
      <aside className="sidebar">
        <Cart 
          cartItems={cart} 
          onRemoveItem={handleRemoveItem} 
          onConfirmOrder={handleConfirmOrder} 
        />
      </aside>

      {isModalOpen && (
        <OrderModal 
          cartItems={cart} 
          onResetOrder={handleResetOrder} 
        />
      )}
    </div>
  );
}

export default App;