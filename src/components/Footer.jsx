import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="kontak">
      <div className="container footer-grid">
        <div className="footer-brand">
          <h3>ARRUM Buah & Rempah</h3>
          <p>Penyedia buah segar dan rempah-rempah pilihan kualitas terbaik di Kota Malang.</p>
        </div>
        <div className="footer-links">
          <h4>Navigasi</h4>
          <ul>
            <li><a href="#katalog">Katalog Produk</a></li>
            <li><a href="#pengiriman">Info Pengiriman</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Kontak & Lokasi</h4>
          <p>📍 Jl. Contoh Alamat No. 123, Malang</p>
          <p>🕒 Buka: Setiap Hari (08.00 - 17.00)</p>
          <p>📱 WhatsApp: 0812-3176-5812</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Toko Buah & Rempah ARRUM. Semua Hak Dilindungi.</p>
      </div>
    </footer>
  );
};

export default Footer;
