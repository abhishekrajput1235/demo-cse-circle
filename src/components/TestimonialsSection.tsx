import { motion } from 'framer-motion';
import { Quote, Star, Trophy } from 'lucide-react';

import Section from './Section';

const testimonials = [
  {
    quote:
      'The answer writing program at The CSE Circle was the single biggest factor in my Mains score jumping 80 marks. The feedback was brutally honest and incredibly helpful.',
    name: 'Priya Sharma',
    role: 'IAS 2023',
    rank: 'AIR 47',
  },
  {
    quote:
      'Daily current affairs, weekly tests, and 1:1 mentor calls — the system keeps you accountable. I cleared in my second attempt after joining CSE Circle.',
    name: 'Rohit Verma',
    role: 'IPS 2023',
    rank: 'UPSC CSE',
  },
];

export default function SuccessStoriesSection() {
  return (
    <Section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-0 h-[320px] w-[320px] rounded-full bg-blue-100 blur-3xl opacity-60" />
        <div className="absolute bottom-0 right-0 h-[280px] w-[280px] rounded-full bg-indigo-100 blur-3xl opacity-50" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600 mb-3">
            Success Stories
          </p>

          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-5">
            What Our Selections Say
          </h2>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Real stories from aspirants who transformed their preparation with
            focused mentorship, disciplined strategy, and consistent guidance.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -top-20 right-0 h-40 w-40 rounded-full bg-blue-100 blur-3xl" />
              </div>

              {/* Quote Icon */}
              <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 ring-1 ring-blue-100">
                <Quote size={28} />
              </div>

              {/* Quote */}
              <p className="relative text-slate-700 leading-relaxed text-base md:text-lg mb-8">
                “{item.quote}”
              </p>

              {/* Footer */}
              <div className="relative flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {item.name}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {item.role} · {item.rank}
                  </p>
                </div>

                <div className="flex items-center gap-1 text-yellow-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={16}
                      className="fill-yellow-400"
                    />
                  ))}
                </div>
              </div>

              {/* Bottom Border */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-blue-100 bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-10 shadow-xl">
            {/* Glow */}
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-blue-100 mb-5">
                  <Trophy size={16} />
                  Proven Results
                </div>

                <h3 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4">
                  300+ Selections Across Civil Services
                </h3>

                <p className="text-blue-100 text-base md:text-lg leading-relaxed">
                  IAS, IPS, IFS, IRS, and State PCS selections built through
                  disciplined mentorship, structured preparation, and consistent
                  evaluation.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 min-w-[280px]">
                {[
                  { value: '300+', label: 'Selections' },
                  { value: '50+', label: 'Top Ranks' },
                  { value: '10K+', label: 'Students' },
                  { value: '24/7', label: 'Support' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 p-5 text-center"
                  >
                    <h4 className="text-2xl md:text-3xl font-extrabold text-white">
                      {stat.value}
                    </h4>

                    <p className="mt-1 text-sm text-blue-100">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}