import React from 'react';
import './ShippingInfo.css';

const ShippingInfo = () => {
  return (
    <section className="section shipping-section" id="pengiriman">
      <div className="container">
        <div className="shipping-header">
          <h2 className="text-center">Informasi Pengiriman & Pembayaran</h2>
          <p className="text-center text-muted">Belanja mudah, kami antar sampai depan rumah Anda.</p>
        </div>
        
        <div className="shipping-grid">
          <div className="shipping-card">
            <div className="icon">🛵</div>
            <h3>Area Pengiriman</h3>
            <p>Kami melayani pengiriman khusus untuk wilayah <strong>Kota Malang</strong> dan sekitarnya. Pengiriman dilakukan setiap hari pada jam kerja (08.00 - 17.00).</p>
          </div>
          
          <div className="shipping-card">
            <div className="icon">📦</div>
            <h3>Ongkos Kirim</h3>
            <p>Ongkos kirim akan dihitung secara manual dan diinformasikan oleh Admin kami melalui WhatsApp saat Anda melakukan pemesanan. Tergantung jarak lokasi Anda dari toko kami.</p>
          </div>
          
          <div className="shipping-card">
            <div className="icon">💳</div>
            <h3>Metode Pembayaran</h3>
            <p>Untuk saat ini kami menerima pembayaran melalui:</p>
            <ul>
              <li>Transfer Bank (BCA / Mandiri / BRI)</li>
              <li>Bayar di tempat (COD) khusus pelanggan area terdekat</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShippingInfo;
