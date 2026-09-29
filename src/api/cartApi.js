
let cartData = [];

export const getCart = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([...cartData]), 200);
  });
};

export const updateCartItem = async (product, quantityChange) => {
  return new Promise((resolve) => {
    const existingItemIndex = cartData.findIndex(item => item.name === product.name);
    
    if (existingItemIndex >= 0) {
      cartData[existingItemIndex].quantity += quantityChange;
      if (cartData[existingItemIndex].quantity <= 0) {
        cartData.splice(existingItemIndex, 1);
      }
    } else if (quantityChange > 0) {
      cartData.push({ ...product, quantity: 1 });
    }
    
    setTimeout(() => resolve([...cartData]), 200);
  });
};

export const removeFromCart = async (productName) => {
  return new Promise((resolve) => {
    cartData = cartData.filter(item => item.name !== productName);
    setTimeout(() => resolve([...cartData]), 200);
  });
};

export const resetCart = async () => {
  return new Promise((resolve) => {
    cartData = [];
    setTimeout(() => resolve([...cartData]), 200);
  });
};