import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductCatalog from './components/ProductCatalog'
import ShippingInfo from './components/ShippingInfo'
import Footer from './components/Footer'
import CartSidebar from './components/CartSidebar'
import FloatingCartBar from './components/FloatingCartBar'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <CartProvider>
      <Header />
      <main>
        <Hero />
        <ProductCatalog />
        <ShippingInfo />
      </main>
      <Footer />
      <CartSidebar />
      <FloatingCartBar />
    </CartProvider>
  )
}

export default App
