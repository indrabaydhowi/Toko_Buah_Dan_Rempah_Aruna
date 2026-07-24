import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h2><span className="highlight-text">ARRUM Buah & Rempah</span><br />Kebaikan Alam untuk Keluarga Anda</h2>
          <p>
            Menyediakan buah-buahan segar dan rempah-rempah pilihan kualitas terbaik.
            Kini hadir lebih dekat, melayani pengiriman area Kota Malang dan sekitarnya.
          </p>
          <div className="hero-actions">
            <a href="#katalog" className="btn btn-primary">Lihat Katalog Kami</a>
          </div>
        </div>
        <div className="hero-image">
          {/* Menggunakan Unsplash source sebagai placeholder yang estetik */}
          <img src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&q=80" alt="Keranjang buah segar dan rempah" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
