import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, GraduationCap, Users } from 'lucide-react';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';

const optionalFaculty = [
  {
    id: 1,
    title: 'Maths Optional Faculty',
    subtitle: 'Advanced problem-solving mentorship for UPSC Optional Mathematics',
    highlight: 'Structured classes from fundamentals to high-scoring answer strategy',
    badge: 'Mathematics',
    route: '/maths-optional',
    cta: 'Explore Maths Optional',
  },
  {
    id: 2,
    title: 'Sociology Optional Faculty',
    subtitle: 'Concept-driven and contemporary approach for Sociology Optional',
    highlight: 'Focused on thinkers, current examples, and answer enrichment techniques',
    badge: 'Sociology',
    route: '/sociology-optional',
    cta: 'Explore Sociology Optional',
  },
];

export default function Faculty() {
  return (
    <div className="min-h-screen pt-20">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900 py-20 text-white">
        <div className="pointer-events-none absolute -left-16 top-10 h-52 w-52 rounded-full bg-cyan-400/20 blur-2xl" />
        <div className="pointer-events-none absolute -right-10 bottom-0 h-64 w-64 rounded-full bg-indigo-300/20 blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1 text-sm font-semibold text-cyan-100">
              <GraduationCap className="h-4 w-4" />
              Specialized Optional Mentorship
            </p>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Faculty For Two Optional Subjects</h1>
            <p className="text-xl text-blue-100">
              This page now focuses on only two dedicated tracks: Maths Optional and Sociology Optional.
            </p>
          </motion.div>
        </div>
      </section>

      <Section className="bg-white">
        <SectionTitle
          title="Choose Your Optional Faculty"
          subtitle="Pick the subject-specific mentoring track that matches your UPSC Optional preparation"
        />

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
          {optionalFaculty.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50 p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
                {item.badge}
              </span>

              <h3 className="mt-4 text-2xl font-bold text-gray-900">{item.title}</h3>
              <p className="mt-3 text-gray-600">{item.subtitle}</p>

              <div className="mt-6 space-y-3 rounded-xl border border-blue-100 bg-white p-4">
                <div className="flex items-start gap-3 text-gray-700">
                  <BookOpen className="mt-0.5 h-5 w-5 text-blue-600" />
                  <p className="text-sm">{item.highlight}</p>
                </div>
                <div className="flex items-start gap-3 text-gray-700">
                  <Users className="mt-0.5 h-5 w-5 text-blue-600" />
                  <p className="text-sm">Personal guidance, doubt support, and regular answer-writing feedback.</p>
                </div>
              </div>

              <Link
                to={item.route}
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
              >
                {item.cta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section className="bg-gradient-to-br from-blue-50 to-white">
        <div className="mx-auto max-w-5xl">
          <SectionTitle
            title="Why This Focused Model Works"
            subtitle="Two subject-focused tracks for deeper concept clarity and better optional scores"
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: 'Subject-Specific Depth',
                description: 'Focused classroom discussions for only Maths Optional and Sociology Optional.',
                stat: '2 Dedicated Tracks',
              },
              {
                title: 'Consistent Practice',
                description: 'Regular tests and targeted answer-review cycles to improve performance steadily.',
                stat: 'Weekly Evaluations',
              },
              {
                title: 'Mentor Access',
                description: 'Direct doubt-resolution and actionable feedback throughout your preparation phase.',
                stat: 'Personal Guidance',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg text-center"
              >
                <div className="text-4xl font-bold text-blue-600 mb-4">{item.stat}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-800 p-12 text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Start With The Right Optional Mentor
            </h2>
            <p className="mb-8 text-xl text-blue-100">
              Choose either Maths Optional or Sociology Optional and begin your guided preparation today.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/maths-optional"
                className="inline-flex items-center justify-center rounded-lg bg-amber-500 px-7 py-3 font-semibold text-white transition-colors hover:bg-amber-600"
              >
                Maths Optional
              </Link>
              <Link
                to="/sociology-optional"
                className="inline-flex items-center justify-center rounded-lg border border-white/40 bg-white/10 px-7 py-3 font-semibold text-white transition-colors hover:bg-white/20"
              >
                Sociology Optional
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
