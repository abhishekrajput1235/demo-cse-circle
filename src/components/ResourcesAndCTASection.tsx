import { motion } from 'framer-motion';
import {
  FileText,
  Video,
  Newspaper,
  BookOpen,
  ArrowUpRight,
} from 'lucide-react';

import Section from './Section';

const resources = [
  {
    title: 'NCERT PDFs',
    icon: FileText,
  },
  {
    title: 'Free Lectures',
    icon: Video,
  },
  {
    title: 'Current Affairs',
    icon: Newspaper,
  },
  {
    title: 'PYQ Sets',
    icon: BookOpen,
  },
];

export default function ResourcesCTASection() {
  return (
    <Section className="bg-white">
      <div className="max-w-7xl mx-auto">
        {/* ========================= */}
        {/* RESOURCES */}
        {/* ========================= */}

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600 mb-3">
              Free Resources
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-5">
              Start Preparing
              <span className="block text-blue-600">
                For Free.
              </span>
            </h2>

            <p className="text-slate-600 text-base leading-relaxed max-w-lg mb-8">
              Essential UPSC resources curated for serious aspirants.
            </p>

            {/* Resource Grid */}
            <div className="grid grid-cols-2 gap-4">
              {resources.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08,
                    }}
                    className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 transition-all duration-300 hover:border-blue-100 hover:shadow-md"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={18} />
                    </div>

                    <span className="text-sm font-semibold text-slate-800">
                      {item.title}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            <p className="mt-6 text-sm text-slate-500">
              No login required for basic access.
            </p>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-blue-600 to-indigo-700 p-8 md:p-10 shadow-2xl">
              <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

              <div className="relative">
                <p className="text-sm font-semibold text-blue-100 mb-4">
                  Free UPSC Starter Kit
                </p>

                <h3 className="text-3xl md:text-4xl font-extrabold leading-tight text-white mb-5">
                  Learn Smart.
                  <br />
                  Stay Consistent.
                </h3>

                <p className="text-blue-100 leading-relaxed mb-8">
                  Notes, lectures, current affairs, and PYQs —
                  everything to begin your preparation.
                </p>

                <button className="group inline-flex items-center rounded-2xl bg-white px-6 py-4 text-sm font-bold text-slate-900 transition-all duration-300 hover:-translate-y-1">
                  Access Free Resources

                  <ArrowUpRight
                    size={18}
                    className="ml-2 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ========================= */}
        {/* CTA */}
        {/* ========================= */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-[2.5rem] bg-slate-950 px-8 py-12 md:px-14 md:py-16"
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <div>
              <p className="text-sm font-semibold text-blue-400 mb-4">
                Ready to begin?
              </p>

              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-white mb-5">
                Your IAS Journey
                <span className="block text-blue-400">
                  Starts Here.
                </span>
              </h2>

              <p className="max-w-xl text-slate-400 text-base leading-relaxed">
                Join 5,000+ aspirants preparing with The CSE Circle.
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-col sm:flex-row lg:justify-end gap-4">
              <button className="group inline-flex items-center justify-center rounded-2xl bg-white px-7 py-4 text-sm font-bold text-slate-900 transition-all duration-300 hover:-translate-y-1">
                Enroll Now

                <ArrowUpRight
                  size={18}
                  className="ml-2 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </button>

              <button className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-white/10">
                Book Free Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}