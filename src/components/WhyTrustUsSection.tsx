import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, PenLine, Users } from 'lucide-react';
import Section from './Section';

const trustPoints = [
  {
    icon: CheckCircle,
    title: 'Personal feedback',
    desc: 'Every submission gets practical, mark-focused comments.',
  },
  {
    icon: PenLine,
    title: 'Expert-written notes',
    desc: 'Written by the same teachers who lead the class.',
  },
  {
    icon: Users,
    title: 'Small, focused setup',
    desc: 'Limited subjects and dedicated staff keep quality high.',
  },
];

const stats = [
  { value: '2', label: 'Dedicated teachers' },
  { value: '2', label: 'Optional subjects' },
  { value: '1:1', label: 'Feedback approach' },
];

export default function WhyTrustUsSection() {
  return (
    <Section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ── Left column ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-blue-600 mb-4">
              Why students trust us
            </p>

            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-slate-900 leading-tight mb-4">
              Serious prep.{' '}
              <span className="block text-blue-600">Clear results.</span>
            </h2>

            <p className="text-base text-slate-500 leading-relaxed mb-8 max-w-sm">
              We teach fewer things, better — sharper classes, faster feedback,
              and measurable gains in answer quality.
            </p>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 transition-colors"
            >
              Read our story
              <ArrowRight size={14} />
            </Link>

            {/* Stats — separated by a top border, not buried in cards */}
            <div className="flex gap-6 mt-10 pt-8 border-t border-slate-100">
              {stats.map((s, i) => (
                <div key={i} className="flex-1">
                  <p className="font-serif text-4xl font-semibold text-slate-900 leading-none mb-1.5">
                    {s.value}
                  </p>
                  <p className="text-[11px] uppercase tracking-wider text-slate-400">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right column ── */}
          <div className="flex flex-col gap-4">

            {/* Promise — left-bordered accent, not a floating banner */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="rounded-xl border border-blue-100 border-l-[3px] border-l-blue-600 bg-blue-50 px-5 py-4"
            >
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-blue-700 mb-1.5">
                Our promise
              </p>
              <p className="text-sm text-blue-900 leading-relaxed">
                Every student gets specific, next-step feedback — no generic
                motivation, no content overload.
              </p>
            </motion.div>

            {/* Trust cards — full-width, more breathing room */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {trustPoints.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="rounded-xl border border-slate-100 bg-white p-4 hover:border-blue-200 transition-colors"
                  >
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 text-blue-600">
                      <Icon size={15} />
                    </div>
                    <h3 className="text-sm font-medium text-slate-800 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}