import { motion } from 'framer-motion';
import { useState } from 'react';

interface ProductCardProps {
  name: string;
  image: string;
  price: string;
  specs: {
    processor: string;
    ram: string;
    storage: string;
    display: string;
  };
}

export default function ProductCard({ name, image, price, specs }: ProductCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="relative w-full h-[400px] cursor-pointer"
      initial={false}
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{ duration: 0.6 }}
      onClick={() => setIsFlipped(!isFlipped)}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Front of card */}
      <div
        className={`absolute inset-0 bg-white rounded-xl shadow-lg overflow-hidden ${
          isFlipped ? 'backface-hidden' : ''
        }`}
      >
        <div className="h-3/4 overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-lg font-bold text-purple-600">{price}</p>
        </div>
      </div>

      {/* Back of card */}
      <div
        className={`absolute inset-0 bg-white rounded-xl shadow-lg p-6 ${
          !isFlipped ? 'backface-hidden' : ''
        }`}
        style={{ transform: 'rotateY(180deg)' }}
      >
        <h3 className="text-xl font-semibold mb-4">Specifications</h3>
        <ul className="space-y-2">
          <li><span className="font-medium">Processor:</span> {specs.processor}</li>
          <li><span className="font-medium">RAM:</span> {specs.ram}</li>
          <li><span className="font-medium">Storage:</span> {specs.storage}</li>
          <li><span className="font-medium">Display:</span> {specs.display}</li>
        </ul>
      </div>
    </motion.div>
  );
}