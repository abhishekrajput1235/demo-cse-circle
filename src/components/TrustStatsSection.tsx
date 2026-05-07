import { motion } from 'framer-motion';
import Section from './Section';

export type TrustStat = {
  value: string;
  label: string;
  sub?: string;
};

type TrustStatsSectionProps = {
  stats: TrustStat[];
};

export default function TrustStatsSection({ stats }: TrustStatsSectionProps) {
  return (
    <Section className="bg-white" id="trust-stats">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-8 text-center"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-600 mb-3">
            Trust bar / stats
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Proof that sits above the fold
          </h2>
          <p className="mx-auto max-w-2xl text-sm md:text-base text-slate-500 leading-relaxed">
            A quick, honest snapshot of the teaching setup, student support,
            and outcomes that define The CSE Circle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={`${stat.label}-${i}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700 ring-1 ring-blue-100">
                <span className="text-sm font-semibold">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-slate-900 leading-none mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-800 mb-1">
                {stat.label}
              </div>
              {stat.sub && (
                <div className="text-sm text-slate-500 leading-relaxed">
                  {stat.sub}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}