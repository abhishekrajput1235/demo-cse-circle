import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Section from './Section';
import Button from './Button';

type StatItem = {
  key: string;
  val: string;
};

type ActionItem = {
  label: string;
  to: string;
  variant?: 'primary' | 'outline';
};

interface LeftRightSectionProps {
  sectionClassName?: string;
  tag: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageStat: string;
  imageTitle: string;
  imageSubtext: string;
  stats?: StatItem[];
  bullets: string[];
  primaryAction: ActionItem;
  secondaryAction?: ActionItem;
}

export default function LeftRightSection({
  sectionClassName = 'bg-gradient-to-br from-gray-50 to-white',
  tag,
  title,
  description,
  imageSrc,
  imageAlt,
  imageStat,
  imageTitle,
  imageSubtext,
  stats = [],
  bullets,
  primaryAction,
  secondaryAction,
}: LeftRightSectionProps) {
  return (
    <Section className={sectionClassName}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative h-80   group">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full"
            />
          </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">{tag}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">{title}</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">{description}</p>

          {stats.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              {stats.map((item, i) => (
                <div key={i} className="rounded-xl border border-blue-100 bg-blue-50/50 p-3">
                  <p className="text-[11px] uppercase font-bold tracking-wide text-blue-700">{item.key}</p>
                  <p className="text-sm font-semibold text-gray-800 mt-1">{item.val}</p>
                </div>
              ))}
            </div>
          )}

          <div className="space-y-2.5 mb-7">
            {bullets.map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckCircle size={15} className="text-blue-600 mt-0.5 shrink-0" />
                <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Link to={primaryAction.to}>
              <Button className="group bg-gradient-to-r from-blue-600 to-blue-800">
                {primaryAction.label}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </Button>
            </Link>
            {secondaryAction && (
              <Link to={secondaryAction.to}>
                <Button variant={secondaryAction.variant === 'outline' ? 'outline' : 'primary'}>
                  {secondaryAction.label}
                </Button>
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
