import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    brand: 'Apple',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1920',
    logo: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=200',
    description: 'Experience the power of Mac'
  },
  {
    brand: 'Alienware',
    image: 'https://images.unsplash.com/photo-1593640495253-23196b27a87f?q=80&w=1920',
    logo: 'https://images.unsplash.com/photo-1618477461853-cf5ed80ad803?q=80&w=200',
    description: 'Gaming perfection redefined'
  },
  {
    brand: 'Microsoft Surface',
    image: 'https://images.unsplash.com/photo-1612425626229-632fab8bfc02?q=80&w=1920',
    logo: 'https://images.unsplash.com/photo-1583071299210-c6c241a67d85?q=80&w=200',
    description: 'Versatility meets innovation'
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentSlide ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src={slide.image}
            alt={slide.brand}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <img
                src={slide.logo}
                alt={`${slide.brand} logo`}
                className="w-24 h-24 mx-auto mb-8 rounded-full"
              />
              <h2 className="text-5xl font-bold text-white mb-4">{slide.brand}</h2>
              <p className="text-xl text-white/90">{slide.description}</p>
            </motion.div>
          </div>
        </motion.div>
      ))}
      
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
      >
        <ChevronLeft className="w-8 h-8 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
      >
        <ChevronRight className="w-8 h-8 text-white" />
      </button>
    </div>
  );
}