import { motion } from 'framer-motion';
import {
  GraduationCap,
  BookOpen,
  PenTool,
  Landmark,
  ArrowRight,
} from 'lucide-react';

import Section from './Section';

const programs = [
  {
    title: 'UPSC CSE Foundation Program',
    badge: 'Most Popular',
    description:
      'Complete Prelims + Mains + Interview coverage. 1-year & 2-year batches available.',
    icon: GraduationCap,
    gradient: 'from-blue-600 to-indigo-700',
  },
  {
    title: 'Prelims Crash Course',
    badge: 'Fast Track',
    description:
      'Intensive 3-month revision program with 5,000+ MCQs, test series, and topicwise PYQ analysis.',
    icon: BookOpen,
    gradient: 'from-orange-500 to-red-500',
  },
  {
    title: 'Mains Answer Writing Mentorship',
    badge: 'Live Mentorship',
    description:
      'Weekly evaluated assignments, model answers, and 1:1 feedback sessions from UPSC-qualified mentors.',
    icon: PenTool,
    gradient: 'from-emerald-500 to-green-700',
  },
  {
    title: 'State PSC Programs',
    badge: 'State Specific',
    description:
      'Tailored courses for UPPSC, MPPSC, BPSC, RPSC, and other state civil services.',
    icon: Landmark,
    gradient: 'from-purple-600 to-fuchsia-700',
  },
];

export default function CoursesProgramsSection() {
  return (
    <Section className="bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600 mb-3">
            Courses & Programs
          </p>

          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-5">
            What We Offer
          </h2>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Structured programs designed for every stage of the civil services
            preparation journey — from foundation building to intensive revision
            and answer writing mentorship.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {programs.map((program, i) => {
            const Icon = program.icon;

            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 md:p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
              >
                {/* Background Glow */}
                <div
                  className={`absolute top-0 right-0 h-40 w-40 bg-gradient-to-br ${program.gradient} opacity-10 blur-3xl transition-all duration-500 group-hover:scale-125`}
                />

                {/* Badge */}
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${program.gradient} text-white shadow-lg`}
                  >
                    <Icon size={28} />
                  </div>

                  <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-700">
                    {program.badge}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 leading-snug mb-4">
                    {program.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    {program.description}
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-8 flex items-center text-blue-700 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                  Explore Program
                  <ArrowRight
                    size={18}
                    className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>

                {/* Hover Border */}
                <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-blue-100 transition-colors duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}