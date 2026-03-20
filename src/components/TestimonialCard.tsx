import { motion } from 'framer-motion';
import { Quote, Award } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  rank: string;
  year: string;
  message: string;
  image: string;
}

export default function TestimonialCard({ name, rank, year, message, image }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg p-8 relative"
    >
      <Quote className="absolute top-6 right-6 text-blue-100" size={48} />

      <div className="flex items-center mb-6">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-bold text-gray-900">{name}</h4>
          <div className="flex items-center text-amber-600 font-semibold">
            <Award size={16} className="mr-1" />
            <span>{rank}</span>
          </div>
          <p className="text-sm text-gray-500">{year}</p>
        </div>
      </div>

      <p className="text-gray-600 leading-relaxed italic">"{message}"</p>
    </motion.div>
  );
}
