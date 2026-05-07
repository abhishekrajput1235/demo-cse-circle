import { motion } from 'framer-motion';
import {
  ShieldCheck,
  FileText,
  ClipboardCheck,
  MonitorSmartphone,
  Newspaper,
  MessageCircleMore,
} from 'lucide-react';

import Section from './Section';

const features = [
  {
    title: 'UPSC-Qualified Mentors',
    description:
      'Learn from officers and toppers who know the exam from the inside.',
    icon: ShieldCheck,
  },
  {
    title: 'Structured Study Material',
    description:
      'Curated notes, PYQ sets, and topic maps — nothing unnecessary.',
    icon: FileText,
  },
  {
    title: 'Weekly Test Series',
    description:
      'Prelims & Mains tests with detailed performance analytics and rankings.',
    icon: ClipboardCheck,
  },
  {
    title: 'Learn Online + Offline',
    description:
      'Live classes, recorded lectures, and classroom batches in Delhi.',
    icon: MonitorSmartphone,
  },
  {
    title: 'Current Affairs Daily',
    description:
      'Daily news digest, monthly magazines, and static GK modules.',
    icon: Newspaper,
  },
  {
    title: '24/7 Doubt Support',
    description:
      'Dedicated doubt-clearing forum and WhatsApp study groups.',
    icon: MessageCircleMore,
  },
];

export default function WhyChooseUsSection() {
  return (
    <Section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-blue-100 blur-3xl opacity-60" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-indigo-100 blur-3xl opacity-50" />
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
            Why The CSE Circle
          </p>

          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-5">
            Why Students Choose Us
          </h2>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Focused mentorship, disciplined preparation, and exam-oriented
            guidance designed to help aspirants stay consistent and confident
            throughout the UPSC journey.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:border-blue-100"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -top-20 right-0 h-40 w-40 rounded-full bg-blue-100 blur-3xl" />
                </div>

                {/* Icon */}
                <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 ring-1 ring-blue-100 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={28} />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
                    {feature.title}
                  </h3>

                  <p className="text-sm md:text-base leading-relaxed text-slate-600">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Border Animation */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-5"
        >
          {[
            { value: '10K+', label: 'Students Mentored' },
            { value: '500+', label: 'Selections' },
            { value: '50+', label: 'Expert Mentors' },
            { value: '24/7', label: 'Student Support' },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm"
            >
              <h3 className="text-3xl font-extrabold text-slate-900 mb-1">
                {item.value}
              </h3>

              <p className="text-sm text-slate-500">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}