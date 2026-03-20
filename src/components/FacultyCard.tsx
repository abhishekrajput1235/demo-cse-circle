import { motion } from 'framer-motion';
import { Award, Briefcase } from 'lucide-react';

interface FacultyCardProps {
  name: string;
  subject: string;
  experience: string;
  qualification: string;
  image: string;
}

export default function FacultyCard({ name, subject, experience, qualification, image }: FacultyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-blue-600 font-semibold mb-4">{subject}</p>

        <div className="space-y-2">
          <div className="flex items-center text-gray-600">
            <Briefcase size={16} className="mr-2" />
            <span className="text-sm">{experience}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Award size={16} className="mr-2" />
            <span className="text-sm">{qualification}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
