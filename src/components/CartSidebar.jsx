import React from 'react';
import { useCart } from '../context/CartContext';
import { generateCartWhatsAppLink } from '../utils/whatsapp';
import './CartSidebar.css';

const formatRupiah = (price) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(price);
};

const CartSidebar = () => {
  const { isCartOpen, toggleCart, cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    const waLink = generateCartWhatsAppLink(cartItems, getCartTotal());
    window.open(waLink, '_blank');
  };

  return (
    <>
      <div className="cart-overlay" onClick={toggleCart}></div>
      <div className="cart-sidebar">
        <div className="cart-header">
          <h2>Keranjang Belanja</h2>
          <button className="close-btn" onClick={toggleCart}>&times;</button>
        </div>
        
        <div className="cart-content">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <div className="empty-icon">🛒</div>
              <p>Keranjang belanja Anda masih kosong.</p>
              <button className="btn btn-primary" onClick={toggleCart}>Mulai Belanja</button>
            </div>
          ) : (
            <ul className="cart-items-list">
              {cartItems.map(item => (
                <li key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h4>{item.name}</h4>
                    <div className="cart-item-price">{formatRupiah(item.price)} <span className="unit">/ {item.unit}</span></div>
                    
                    <div className="cart-item-controls">
                      <div className="qty-control">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                      </div>
                      <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Hapus</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-summary">
              <span>Total Estimasi</span>
              <span className="total-price">{formatRupiah(getCartTotal())}</span>
            </div>
            <p className="cart-note">*Ongkos kirim akan dihitung oleh admin di WhatsApp</p>
            <button className="btn btn-wa w-100" onClick={handleCheckout}>
              Checkout via WhatsApp
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
