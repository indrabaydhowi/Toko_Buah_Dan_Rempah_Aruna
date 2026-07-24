import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../utils/sheetApi';
import ProductCard from './ProductCard';
import './ProductCatalog.css';

const ProductCatalog = () => {
  const [productsData, setProductsData] = useState([]);
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProducts().then(data => {
      setProductsData(data);
      setIsLoading(false);
    });
  }, []);

  const categories = ['Semua', ...new Set(productsData.map(p => p.category))];

  const filteredProducts = productsData.filter(product => {
    const matchesCategory = activeCategory === 'Semua' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (isLoading) {
    return <div className="text-center section">Memuat katalog produk...</div>;
  }

  return (
    <section className="section catalog-section" id="katalog">
      <div className="container">
        <div className="catalog-header">
          <h2 className="text-center">Katalog Produk</h2>
          <p className="text-center text-muted">Pilih buah segar dan rempah berkualitas dari alam.</p>
        </div>

        <div className="catalog-controls">
          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="search-bar">
            <input
              type="text"
              placeholder="Cari produk..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h3>Produk tidak ditemukan</h3>
            <p>Maaf, tidak ada produk yang sesuai dengan pencarian atau filter Anda.</p>
            <button className="btn btn-outline" onClick={() => {setSearchQuery(''); setActiveCategory('Semua');}}>
              Reset Pencarian
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCatalog;
