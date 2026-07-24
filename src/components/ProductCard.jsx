import React from 'react';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const formatRupiah = (price) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(price);
};

const ProductCard = ({ product }) => {
  const { name, category, price, unit, image, description, stockStatus } = product;
  const { addToCart } = useCart();
  
  const isAvailable = stockStatus.toLowerCase() === 'tersedia';

  return (
    <div className={`product-card ${!isAvailable ? 'out-of-stock' : ''}`}>
      <div className="product-image">
        <img src={image} alt={name} loading="lazy" />
        <span className="product-category">{category}</span>
        {!isAvailable && <span className="stock-badge">Habis</span>}
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        <p className="product-desc">{description}</p>
        <div className="product-price-row">
          <span className="price">{formatRupiah(price)}</span>
          <span className="unit">/ {unit}</span>
        </div>
        {isAvailable ? (
          <button className="btn btn-primary w-100" onClick={() => addToCart(product, 1)}>
            Tambah ke Keranjang
          </button>
        ) : (
          <button className="btn btn-outline w-100" disabled>Stok Habis</button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
