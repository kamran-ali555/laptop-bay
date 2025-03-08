import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import BrandSection from './components/BrandSection';

const products = {
  apple: [
    {
      name: "MacBook Pro 16\"",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800",
      price: "$2,499",
      specs: {
        processor: "M3 Pro",
        ram: "32GB Unified Memory",
        storage: "1TB SSD",
        display: "16\" Liquid Retina XDR"
      }
    },
    {
      name: "MacBook Air",
      image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=800",
      price: "$1,299",
      specs: {
        processor: "M2",
        ram: "16GB Unified Memory",
        storage: "512GB SSD",
        display: "13.6\" Liquid Retina"
      }
    }
  ],
  alienware: [
    {
      name: "Alienware x17",
      image: "https://images.unsplash.com/photo-1593640495253-23196b27a87f?q=80&w=800",
      price: "$3,299",
      specs: {
        processor: "Intel Core i9-12900HK",
        ram: "32GB DDR5",
        storage: "2TB NVMe SSD",
        display: "17.3\" UHD 120Hz"
      }
    }
  ],
  microsoft: [
    {
      name: "Surface Laptop Studio",
      image: "https://images.unsplash.com/photo-1612425626229-632fab8bfc02?q=80&w=800",
      price: "$1,599",
      specs: {
        processor: "Intel Core i7",
        ram: "16GB",
        storage: "512GB SSD",
        display: "14.4\" PixelSense Flow"
      }
    }
  ]
};

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      <HeroSection />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <BrandSection brand="Apple" products={products.apple} />
        <BrandSection brand="Alienware" products={products.alienware} />
        <BrandSection brand="Microsoft" products={products.microsoft} />
      </motion.div>
    </div>
  );
}

export default App;