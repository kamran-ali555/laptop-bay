import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

interface BrandSectionProps {
  brand: string;
  products: Array<{
    name: string;
    image: string;
    price: string;
    specs: {
      processor: string;
      ram: string;
      storage: string;
      display: string;
    };
  }>;
}

export default function BrandSection({ brand, products }: BrandSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">{brand}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}