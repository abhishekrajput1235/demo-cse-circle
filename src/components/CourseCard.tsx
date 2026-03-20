import { motion } from 'framer-motion';
import { Clock, CheckCircle } from 'lucide-react';
import Button from './Button';

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  price: string;
  features: string[];
}

export default function CourseCard({ title, description, duration, price, features }: CourseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 h-full flex flex-col"
    >
      <div className="p-6 flex-1">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>

        <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
          <div className="flex items-center text-gray-600">
            <Clock size={18} className="mr-2" />
            <span className="text-sm font-medium">{duration}</span>
          </div>
          <div className="text-2xl font-bold text-blue-600">{price}</div>
        </div>

        <div className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <CheckCircle size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-600">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 pt-0">
        <Button className="w-full">Enroll Now</Button>
      </div>
    </motion.div>
  );
}
