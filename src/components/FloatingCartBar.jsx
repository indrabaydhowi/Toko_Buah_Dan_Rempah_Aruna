import React from 'react';
import { useCart } from '../context/CartContext';
import './FloatingCartBar.css';

const formatRupiah = (price) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(price);
};

const FloatingCartBar = () => {
  const { cartItems, getCartTotal, getCartCount, toggleCart, isCartOpen } = useCart();

  if (cartItems.length === 0 || isCartOpen) return null;

  return (
    <div className="floating-cart-bar" onClick={toggleCart}>
      <div className="cart-bar-info">
        <div className="cart-icon-wrapper">
          <span className="cart-icon">🛒</span>
          <span className="cart-badge">{getCartCount()}</span>
        </div>
        <div className="cart-total-info">
          <span className="cart-total-label">Total Belanja</span>
          <span className="cart-total-price">{formatRupiah(getCartTotal())}</span>
        </div>
      </div>
      <button className="btn-view-cart" onClick={(e) => { e.stopPropagation(); toggleCart(); }}>
        Lihat Keranjang
      </button>
    </div>
  );
};

export default FloatingCartBar;
