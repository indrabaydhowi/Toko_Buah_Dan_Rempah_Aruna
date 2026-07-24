import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const formatRupiah = (price) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(price);
};

const WEIGHT_VARIANTS = [
  { label: '100 gr', multiplier: 0.1 },
  { label: '250 gr', multiplier: 0.25 },
  { label: '500 gr', multiplier: 0.5 },
  { label: '1 kg', multiplier: 1.0 },
];

const ProductCard = ({ product }) => {
  const { name, category, price, unit, image, description, stockStatus, isWeightBased } = product;
  const { addToCart } = useCart();
  
  const [selectedVariant, setSelectedVariant] = useState(null);

  const isAvailable = stockStatus.toLowerCase() === 'tersedia';

  // Calculate the displayed price based on selected variant
  let displayPrice = price;
  let displayUnit = unit;
  
  if (isWeightBased && selectedVariant) {
    displayPrice = price * selectedVariant.multiplier;
    displayUnit = selectedVariant.label;
  }

  const handleAddToCart = () => {
    if (isWeightBased && !selectedVariant) return;
    
    const cartItem = isWeightBased 
      ? {
          ...product,
          id: `${product.id}-${selectedVariant.label.replace(/\s+/g, '')}`,
          price: displayPrice,
          unit: selectedVariant.label,
        }
      : product;
      
    addToCart(cartItem, 1);
  };

  const isCartDisabled = !isAvailable || (isWeightBased && !selectedVariant);

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
          <span className="price">{formatRupiah(displayPrice)}</span>
          <span className="unit">/ {isWeightBased && !selectedVariant ? 'kg' : displayUnit}</span>
        </div>
        
        {isWeightBased && isAvailable && (
          <div className="variants-container">
            <span className="variant-label">Pilih Ukuran:</span>
            <div className="variant-chips">
              {WEIGHT_VARIANTS.map(variant => (
                <button 
                  key={variant.label}
                  className={`variant-chip ${selectedVariant?.label === variant.label ? 'active' : ''}`}
                  onClick={() => setSelectedVariant(variant)}
                >
                  {variant.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {isAvailable ? (
          <button 
            className={`btn btn-primary w-100 mt-auto ${isCartDisabled ? 'btn-disabled' : ''}`} 
            onClick={handleAddToCart}
            disabled={isCartDisabled}
          >
            {isWeightBased && !selectedVariant ? 'Pilih Ukuran Dulu' : 'Tambah ke Keranjang'}
          </button>
        ) : (
          <button className="btn btn-outline w-100 mt-auto" disabled>Stok Habis</button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
