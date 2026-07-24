export const generateWhatsAppLink = (productName, quantity = 1) => {
  // Ganti dengan nomor WA penjual yang sebenarnya (gunakan format 62...)
  const phoneNumber = "6282245521084";
  
  const text = `Halo Admin ARRUM Buah & Rempah, saya ingin memesan:
- Produk: ${productName}
- Jumlah: ${quantity}

Apakah stok masih tersedia dan bisa dikirim ke alamat saya di Malang?`;

  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${phoneNumber}?text=${encodedText}`;
};

export const generateCartWhatsAppLink = (cartItems, totalEstimate) => {
  const phoneNumber = "6282245521084";
  
  let text = `Halo Admin ARRUM Buah & Rempah, saya ingin memesan:\n\n`;
  
  cartItems.forEach((item, index) => {
    text += `${index + 1}. ${item.name} (${item.quantity} ${item.unit})\n`;
  });
  
  const formattedTotal = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(totalEstimate);
  text += `\nTotal Estimasi: ${formattedTotal}\n`;
  text += `\nMohon info ketersediaan stok dan ongkos kirim ke alamat saya di Malang.`;

  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${phoneNumber}?text=${encodedText}`;
};
