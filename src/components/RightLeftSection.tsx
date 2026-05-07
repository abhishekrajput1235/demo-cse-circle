import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './Button';
import Section from './Section';

type StatItem = {
  label: string;
  value: string;
};

type BulletItem = {
  title: string;
  description: string;
};

type ActionItem = {
  label: string;
  to: string;
  variant?: 'primary' | 'outline' | 'secondary';
};

interface RightLeftSectionProps {
  sectionClassName?: string;
  tag: string;
  title: string;
  description: string;
  stats?: StatItem[];
  bullets: BulletItem[];
  imageSrc: string;
  imageAlt: string;
  imageEyebrow: string;
  imageTitle: string;
  imageDescription: string;
  primaryAction: ActionItem;
  secondaryAction?: ActionItem;
}

export default function RightLeftSection({
  sectionClassName = 'bg-gradient-to-b from-white via-slate-50 to-white',
  tag,
  title,
  description,
  stats = [],
  bullets,
  imageSrc,
  imageAlt,
  imageEyebrow,
  imageTitle,
  imageDescription,
  primaryAction,
  secondaryAction,
}: RightLeftSectionProps) {
  return (
    <Section className={sectionClassName}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-5 gap-8 items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="xl:col-span-2 rounded-3xl border border-slate-200 bg-white p-7 md:p-8 shadow-sm"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">{tag}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">{title}</h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8 max-w-xl">{description}</p>

          {stats.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              {stats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wide text-slate-500">{item.label}</p>
                  <p className="mt-1 text-lg font-bold text-slate-900">{item.value}</p>
                </div>
              ))}
            </div>
          )}

          <div className="space-y-3 mb-8">
            {bullets.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700 ring-1 ring-blue-100">
                    <CheckCircle size={16} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{item.title}</p>
                    <p className="text-slate-500 text-xs leading-relaxed mt-0.5">{item.description}</p>
                  </div>
                </div>
              </motion.div>
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

        <motion.div
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="xl:col-span-3"
        >
          <div className="relative h-full min-h-[28rem] overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/45 to-transparent" />
            <div className="absolute inset-0 flex items-end p-6 md:p-8">
              <div className="max-w-xl text-white">
                <p className="text-xs font-bold uppercase tracking-widest text-blue-100 mb-2">{imageEyebrow}</p>
                <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-2">{imageTitle}</h3>
                <p className="text-sm md:text-base text-slate-200 leading-relaxed max-w-lg">
                  {imageDescription}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
