import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, CheckCircle2, Layers, Sparkles, Target } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import CourseDetailsSection from '../components/CourseDetailsSection';

type CourseItem = {
  title: string;
  duration: string;
  mode: string;
  summary: string;
  points: string[];
};

type CourseTrack = {
  name: string;
  badge: string;
  intro: string;
  accent: string;
  icon: LucideIcon;
  courses: CourseItem[];
};

const tracks: CourseTrack[] = [
  {
    name: 'Mathematics',
    badge: 'Optional Track',
    intro: 'Concept clarity, speed practice, and marks-focused testing for UPSC Maths Optional.',
    accent: 'from-cyan-500 to-blue-600',
    icon: Layers,
    courses: [
      {
        title: 'Mathematics Integrated Program',
        duration: '6-8 Months',
        mode: 'Live + Recorded',
        summary: 'Complete Paper I and II coverage with guided revision.',
        points: ['Weekly class plan', 'Monthly progress tests'],
      },
      {
        title: 'Mathematics Precision Test Series',
        duration: '10-12 Weeks',
        mode: 'Test + Evaluation',
        summary: 'Accuracy-first test series to improve score conversion.',
        points: ['Sectional + full tests', 'Detailed checked copies'],
      },
      {
        title: 'Mathematics Drill Program',
        duration: '8 Weeks',
        mode: 'Practice Intensive',
        summary: 'High-frequency practice module for speed and retention.',
        points: ['Daily drill sheets', 'Timed mixed sessions'],
      },
    ],
  },
  {
    name: 'Sociology',
    badge: 'Optional Track',
    intro: 'Thinker clarity, structure, and exam-ready Sociology answer writing.',
    accent: 'from-orange-500 to-amber-600',
    icon: BookOpen,
    courses: [
      {
        title: 'Socio PYQ Course',
        duration: '6 Weeks',
        mode: 'PYQ Analysis',
        summary: 'PYQ-driven course with demand decoding and structure training.',
        points: ['Theme-wise PYQ map', '10/15 marker frameworks'],
      },
      {
        title: 'Socio Crash Course',
        duration: '12 Weeks',
        mode: 'Fast-Track Classroom',
        summary: 'Compact syllabus completion with focused revision support.',
        points: ['Thinker revision maps', 'Weekly answer writing'],
      },
      {
        title: 'Sociology Precision Test Series',
        duration: '10 Weeks',
        mode: 'Mock + Evaluation',
        summary: 'Test series focused on better argument quality and presentation.',
        points: ['UPSC-pattern full mocks', 'Actionable feedback notes'],
      },
    ],
  },
  {
    name: 'General Studies',
    badge: 'GS Enrichment Track',
    intro: 'GS modules for social sector themes and better mains answer execution.',
    accent: 'from-emerald-500 to-teal-600',
    icon: Target,
    courses: [
      {
        title: 'Society and Social Justice Course',
        duration: '10 Weeks',
        mode: 'Concept + Policy',
        summary: 'Covers social justice themes with policy-linked answer practice.',
        points: ['Issue-solution writing format', 'Case study integration'],
      },
      {
        title: 'GS Precision Test Series',
        duration: '8-10 Weeks',
        mode: 'Mains Test Series',
        summary: 'Regular GS tests with practical feedback for score improvement.',
        points: ['Timed mains simulation', 'Question demand decoding'],
      },
    ],
  },
];

export default function Courses() {
  const totalCourses = tracks.reduce((sum, track) => sum + track.courses.length, 0);

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle at 85% 20%, #60a5fa 0%, transparent 42%), radial-gradient(circle at 10% 80%, #38bdf8 0%, transparent 45%)',
          }}
        />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase rounded-full bg-white/15 border border-white/25 text-white px-4 py-2 mb-5">
              <Sparkles size={14} />
              Course Catalogue 2026
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">Courses Offered at The CSE Circle</h1>
            <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto">Focused courses in Maths Optional, Sociology Optional, and GS.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { val: `${tracks.length}`, label: 'Program Tracks' },
              { val: `${totalCourses}`, label: 'Courses Offered' },
              { val: 'Live', label: 'Teacher-Led Classes' },
              { val: 'Test', label: 'Evaluation Support' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/10 border border-white/20 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-amber-300 mb-1">{item.val}</p>
                <p className="text-xs text-blue-100">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <Section className="bg-white">
        <SectionTitle
          title="Program Tracks"
          subtitle="Pick your stream and the right course format for your preparation stage."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
          {tracks.map((track, index) => {
            const Icon = track.icon;
            return (
              <motion.article
                key={track.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${track.accent} p-5 text-white`}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] uppercase tracking-wide font-bold bg-white/20 px-3 py-1 rounded-full">
                      {track.badge}
                    </span>
                    <Icon size={18} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-extrabold mb-2">{track.name}</h3>
                  <p className="text-white/90 text-sm">{track.intro}</p>
                </div>

                <div className="p-5">
                  <p className="text-xs uppercase tracking-wide text-slate-500 font-bold mb-3">Courses in this track</p>
                  <ul className="space-y-2">
                    {track.courses.map((course) => (
                      <li key={course.title} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 size={15} className="text-emerald-600 mt-0.5 shrink-0" />
                        <span>{course.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Section>

      <CourseDetailsSection tracks={tracks} />

      <Section className="pt-2">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-800 text-white p-8 md:p-12"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-cyan-300 mb-3">Admissions Open</p>
          <h2 className="text-3xl md:text-4xl font-black leading-tight mb-4">
            Want batch plan and fee details?
          </h2>
          <p className="text-blue-100 text-sm md:text-base max-w-2xl mb-8 leading-relaxed">
            Contact us for updated schedule, module plan, and admission support.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <Button className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold">
                Request Counselling
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
            <Link to="/teachers">
              <Button variant="outline" className="border-white/50 text-white hover:bg-white/10">
                Explore Faculty
              </Button>
            </Link>
          </div>
        </motion.div>
      </Section>
    </div>
  );
}
