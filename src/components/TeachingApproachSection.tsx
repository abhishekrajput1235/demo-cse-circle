import { motion } from 'framer-motion';
import Section from './Section';
import SectionTitle from './SectionTitle';

type TeachingStep = {
  step: string;
  title: string;
  desc: string;
  img: string;
};

interface TeachingApproachSectionProps {
  steps: TeachingStep[];
}

export default function TeachingApproachSection({ steps }: TeachingApproachSectionProps) {
  return (
    <Section className="bg-gradient-to-br from-blue-50 to-white">
      <SectionTitle
        title="How Our Teachers Teach"
        subtitle="A 6-stage teaching method built over years - specifically for UPSC Maths Optional and Sociology Optional."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100 group"
          >
            <div className="relative h-40 overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent" />
              <div className="absolute top-4 left-4 bg-white/15 border border-white/30 backdrop-blur-sm rounded-lg px-3 py-1">
                <span className="text-white font-black text-lg leading-none">{item.step}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 px-5 pb-4">
                <h3 className="text-white font-bold text-sm leading-snug">{item.title}</h3>
              </div>
            </div>

            <div className="p-5">
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
