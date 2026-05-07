import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from './Button';

type CtaStat = {
  val: string;
  label: string;
};

type CtaAction = {
  label: string;
  to: string;
  variant?: 'secondary' | 'outline';
};

interface FinalCtaSectionProps {
  imageSrc: string;
  imageAlt: string;
  badge: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  description: string;
  stats: CtaStat[];
  primaryAction: CtaAction;
  secondaryAction: CtaAction;
}

export default function FinalCtaSection({
  imageSrc,
  imageAlt,
  badge,
  titleLine1,
  titleLine2,
  subtitle,
  description,
  stats,
  primaryAction,
  secondaryAction,
}: FinalCtaSectionProps) {
  return (
    <section className="relative overflow-hidden isolate">
      <div className="absolute inset-0">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-blue-950/75 to-indigo-950/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.35),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.35),transparent_45%)]" />
      </div>

      <div className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl px-6 py-10 md:px-10 md:py-12 text-center text-white"
          >
            <span className="inline-block bg-white/20 border border-white/30 text-white text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-6">
              {badge}
            </span>

            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
              {titleLine1}
              <br />
              {titleLine2}
            </h2>
            <p className="text-lg md:text-xl mb-2 text-blue-100">{subtitle}</p>
            <p className="text-sm md:text-base mb-8 text-blue-200/95 max-w-2xl mx-auto leading-relaxed">{description}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-9">
              {stats.map((item, i) => (
                <div key={i} className="rounded-xl border border-white/20 bg-white/10 py-3 px-2 text-center">
                  <div className="text-2xl font-bold text-amber-300 leading-none">{item.val}</div>
                  <div className="text-blue-100 text-[11px] mt-1">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={primaryAction.to}>
                <Button size="lg" variant={primaryAction.variant ?? 'secondary'} className="min-w-[220px]">
                  {primaryAction.label}
                </Button>
              </Link>
              <Link to={secondaryAction.to}>
                <Button
                  size="lg"
                  variant={secondaryAction.variant ?? 'outline'}
                  className="min-w-[220px] border-white text-white hover:bg-white hover:text-blue-700"
                >
                  {secondaryAction.label}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
