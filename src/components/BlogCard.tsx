import { motion } from 'framer-motion';
import { Calendar, Tag, ArrowRight } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

export default function BlogCard({ title, excerpt, date, category, image }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
          <div className="flex items-center">
            <Calendar size={16} className="mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <Tag size={16} className="mr-1" />
            <span className="text-blue-600 font-medium">{category}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>

        <button className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
          Read More
          <ArrowRight size={18} className="ml-2" />
        </button>
      </div>
    </motion.article>
  );
}
