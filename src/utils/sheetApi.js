import Papa from 'papaparse';
import localProducts from '../data/products.json';

// Ganti URL ini dengan URL 'Publish to the web' dari Google Sheets Anda (format CSV)
// Contoh format URL: https://docs.google.com/spreadsheets/d/e/2PACX.../pub?output=csv
const GOOGLE_SHEET_CSV_URL = ''; // Kosongkan jika belum ada, akan menggunakan data lokal sementara

export const fetchProducts = () => {
  return new Promise((resolve, reject) => {
    if (!GOOGLE_SHEET_CSV_URL) {
      console.log('Menggunakan data lokal (Google Sheets belum dikonfigurasi)');
      // Simulate network request
      setTimeout(() => resolve(localProducts), 500);
      return;
    }

    Papa.parse(GOOGLE_SHEET_CSV_URL, {
      download: true,
      header: true, // Akan menggunakan baris pertama sebagai kunci JSON
      skipEmptyLines: true,
      complete: (results) => {
        // Pemetaan data dari Sheets ke struktur yang diharapkan aplikasi
        const formattedData = results.data.map((row, index) => ({
          id: row.id || `p${index + 1}`,
          name: row.name || 'Produk Tanpa Nama',
          category: row.category || 'Lainnya',
          price: parseInt(row.price) || 0,
          unit: row.unit || 'pcs',
          image: row.image_url || 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&q=80',
          description: row.description || '',
          stockStatus: row.stock_status || 'Tersedia'
        }));
        resolve(formattedData);
      },
      error: (error) => {
        console.error('Error fetching Google Sheets, falling back to local data:', error);
        resolve(localProducts); // Fallback ke data lokal jika gagal
      }
    });
  });
};
