

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Users, BookOpen, FileText, UserCheck,
  TrendingUp, Award, CheckCircle, Quote
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Button from '../components/Button';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import { features, testimonials } from '../data/data';
import TestimonialCard from '../components/TestimonialCard';

// ─── IMAGE CONSTANTS ──────────────────────────────────────────────────────
const IMG = {
  hero:          'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=1920',
  teachingMaths: 'https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg?auto=compress&cs=tinysrgb&w=900',
  teachingSocio: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=900',
  answerWrite:   'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800',
  mentoring:     'https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&w=900',
  studyDesk:     'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800',
  library:       'https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=900',
  classSession:  'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1200',
  mathsTeacher:  'https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=800',
  socioTeacher:  'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
  pyq:           'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=900',
  evaluation:    'https://images.pexels.com/photos/4145154/pexels-photo-4145154.jpeg?auto=compress&cs=tinysrgb&w=900',
};

export default function Home() {
  const stats = [
    { icon: Users,      value: '5,000+', label: 'Students Taught Personally'    },
    { icon: Award,      value: '500+',   label: 'Selections Guided by Teachers' },
    { icon: TrendingUp, value: '2',      label: 'Dedicated Expert Teachers'     },
    { icon: BookOpen,   value: '20+',    label: 'Years of PYQs Analysed'        },
  ];

  const iconMap: Record<string, LucideIcon> = {
    Users, BookOpen, FileText, UserCheck,
  };

  const teachingSteps = [
    { step: '01', title: 'PYQ First — Always',         desc: 'Every new topic begins with a real past-year question so you immediately understand why you are learning it and what the examiner expects.', img: IMG.pyq },
    { step: '02', title: 'Concept Before Content',     desc: 'No formula dumping. No rote definitions. The teacher builds understanding from first principles — so you can handle any question format.', img: IMG.teachingMaths },
    { step: '03', title: 'Answer Writing from Week 1', desc: 'Writing practice begins on the very first day. By exam day, structured answer writing is a habit — not a skill you are still developing.', img: IMG.answerWrite },
    { step: '04', title: 'Personal Written Feedback',  desc: 'Every answer you submit is read and annotated by the teacher personally — not a TA, not an automated system. Feedback tells you exactly what to fix.', img: IMG.evaluation },
    { step: '05', title: 'Student-Paced Depth',        desc: 'Teachers adapt to where you are, not where the timetable says. No student gets left behind because the class moved faster than their understanding.', img: IMG.mentoring },
    { step: '06', title: 'Contemporary Integration',   desc: 'Especially in Sociology — current events are woven into every class so your answers feel relevant, fresh, and examiner-worthy without a separate module.', img: IMG.teachingSocio },
  ];

  return (
    <div className="min-h-screen">

      {/* ═══════════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="inline-block mb-6">
              <span className="bg-blue-100 text-blue-700 px-6 py-2 rounded-full text-sm font-semibold">
                Teacher-Led UPSC Optional Learning — Maths &amp; Sociology
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Great Teaching
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                Changes Everything.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              At The CSE Circle, you learn Maths Optional and Sociology Optional directly from
              dedicated expert teachers — educators who have spent years studying one subject,
              one exam, and one student at a time. Not content. Not lectures. Real teaching.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/teachers">
                <Button size="lg" className="group">
                  Meet Your Teachers
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
              <Link to="/pyq">
                <Button size="lg" variant="outline">Download Free PYQs</Button>
              </Link>
            </div>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-white rounded-xl p-6 shadow-lg">
                  <Icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          WHY THE CSE CIRCLE
          Layout: wide image banner → feature cards
      ═══════════════════════════════════════════════════════════════ */}
      <Section className="bg-white">
        {/* Full-width image banner with overlay */}
        <div className="relative h-64 md:h-72 rounded-3xl overflow-hidden mb-14 shadow-xl">
          <img
            src={IMG.classSession}
            alt="Teacher-led class at The CSE Circle"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/55 to-transparent flex items-center px-10 md:px-16">
            <div className="max-w-lg">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2">Why The CSE Circle</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-snug">
                What Makes Learning Here Different?
              </h2>
              <p className="text-white/70 text-sm leading-relaxed">
                You don't need more content. You need a better teacher — one who knows the subject,
                knows the exam, and knows you.
              </p>
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-6 rounded-xl hover:shadow-xl transition-shadow bg-gradient-to-br from-blue-50 to-white"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
          TEACHING APPROACH — 6 STEPS WITH IMAGES
      ═══════════════════════════════════════════════════════════════ */}
      <Section className="bg-gradient-to-br from-blue-50 to-white">
        <SectionTitle
          title="How Our Teachers Teach"
          subtitle="A 6-stage teaching method built over years — specifically for UPSC Maths Optional and Sociology Optional."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teachingSteps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              {/* Card image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent" />
                {/* Step number floating */}
                <div className="absolute top-4 left-4 bg-white/15 border border-white/30 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-white font-black text-lg leading-none">{item.step}</span>
                </div>
                {/* Step title at bottom of image */}
                <div className="absolute bottom-0 left-0 right-0 px-5 pb-4">
                  <h3 className="text-white font-bold text-sm leading-snug">{item.title}</h3>
                </div>
              </div>

              {/* Card body */}
              <div className="p-5">
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
          TWO OPTIONALS — RICH CARDS WITH TEACHER IMAGES
      ═══════════════════════════════════════════════════════════════ */}
      <Section className="bg-white">
        <SectionTitle
          title="Two Optionals. Two Dedicated Experts."
          subtitle="We teach exclusively Maths Optional and Sociology Optional — so every resource, every session, and every teacher is focused entirely on your optional."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Maths Optional */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 group"
          >
            {/* Teacher image header */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={IMG.mathsTeacher}
                alt="UPSC Maths Optional Expert Teacher at The CSE Circle"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-900/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-4xl mb-2">∑</div>
                <h3 className="text-2xl font-bold text-white mb-1">Maths Optional</h3>
                <p className="text-blue-200 text-xs">
                  Taught by a specialist with 10+ years of UPSC-exclusive teaching experience.
                </p>
              </div>
            </div>

            <div className="bg-white p-6">
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Concept-first, proof-based, PYQ-anchored teaching that makes Linear Algebra,
                Real Analysis, Mechanics, and every other topic feel genuinely understandable —
                not just coverable. The teacher knows every examiner pattern from 2000 to present.
              </p>

              {/* Small contextual image */}
              <div className="relative h-28 rounded-xl overflow-hidden mb-4">
                <img src={IMG.teachingMaths} alt="Maths Optional teaching" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-blue-900/65 flex items-center px-4">
                  <p className="text-white text-xs font-medium leading-snug">
                    Every problem solved step by step — so you see the thinking, not just the answer.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-5">
                {['Linear Algebra','Real Analysis','Abstract Algebra','Mechanics','Statistics','Complex Analysis','PDE / ODE','Numerical Analysis'].map(tag => (
                  <span key={tag} className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>

              <Link to="/maths-optional">
                <Button variant="outline" className="w-full group/btn">
                  Explore Maths Optional
                  <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Sociology Optional */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 group"
          >
            {/* Teacher image header */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={IMG.socioTeacher}
                alt="UPSC Sociology Optional Expert Teacher at The CSE Circle"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/95 via-indigo-900/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-4xl mb-2">⚖</div>
                <h3 className="text-2xl font-bold text-white mb-1">Sociology Optional</h3>
                <p className="text-indigo-200 text-xs">
                  Taught by an educator who makes thinkers feel alive — not names to memorise, but ideas to use.
                </p>
              </div>
            </div>

            <div className="bg-white p-6">
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                "Theory + Today" — every concept taught alongside a current Indian example so your GS
                preparation and optional preparation strengthen each other simultaneously. Classical theory
                becomes a living analytical tool, not a textbook definition.
              </p>

              {/* Small contextual image */}
              <div className="relative h-28 rounded-xl overflow-hidden mb-4">
                <img src={IMG.teachingSocio} alt="Sociology Optional class discussion" className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0 bg-indigo-900/65 flex items-center px-4">
                  <p className="text-white text-xs font-medium leading-snug">
                    Every class bridges classical theory with a live Indian example — Theory + Today.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-5">
                {['Sociological Theory','Research Methods','Indian Society','Caste & Class','Social Movements','Tribal Communities','Gender','Agrarian Structure'].map(tag => (
                  <span key={tag} className="bg-indigo-50 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>

              <Link to="/sociology-optional">
                <Button variant="outline" className="w-full group/btn">
                  Explore Sociology Optional
                  <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
          WHY TRUST US — 3-IMAGE TRUST STRIP
      ═══════════════════════════════════════════════════════════════ */}
      <Section className="bg-gradient-to-br from-gray-50 to-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">Why Trust Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
              Not Bigger. Better.
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Most coaching institutes spread themselves across 30 optionals and hundreds of students
              per batch. We chose a different path — two optionals, two dedicated teachers, and an
              uncompromising focus on what it actually takes to score above 280.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { title: 'Teacher-Written Notes',      desc: 'Every note calibrated to how the teacher explains — not sourced from publishers or outsourced writers.' },
                { title: 'Personal Answer Feedback',   desc: 'Your submitted answers are read and annotated by the teacher — not a TA, not a marking scheme.' },
                { title: 'Direct Doubt Access',        desc: 'Weekly live sessions with the teacher directly. No queue systems. No intermediaries.' },
                { title: 'Verified Track Record',      desc: 'Real student names, real ranks, real scores — not aggregate claims without evidence.' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle size={18} className="text-blue-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link to="/about">
              <Button variant="outline" className="group">
                Read Our Full Story
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </Button>
            </Link>
          </motion.div>

          {/* Right — image stack */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="relative h-60 rounded-2xl overflow-hidden shadow-xl group">
              <img
                src={IMG.mentoring}
                alt="Teacher mentoring a UPSC student personally"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 to-transparent flex items-end p-6">
                <div>
                  <p className="text-white font-bold text-sm">One-on-One Mentorship</p>
                  <p className="text-gray-300 text-xs mt-0.5">Your teacher knows your name, your weak topics, and your answers — personally.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-44 rounded-2xl overflow-hidden shadow-lg group">
                <img
                  src={IMG.library}
                  alt="Teacher-written study notes and resources"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-900/70 flex items-end p-4">
                  <div>
                    <p className="text-white font-bold text-xs">Teacher-Written Notes</p>
                    <p className="text-blue-200 text-xs mt-0.5 leading-snug">Not from publishers. Written by the teacher for this exam.</p>
                  </div>
                </div>
              </div>

              <div className="relative h-44 rounded-2xl overflow-hidden shadow-lg group">
                <img
                  src={IMG.evaluation}
                  alt="Answer writing evaluation by teacher"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-indigo-900/70 flex items-end p-4">
                  <div>
                    <p className="text-white font-bold text-xs">Personal Feedback</p>
                    <p className="text-indigo-200 text-xs mt-0.5 leading-snug">Every answer annotated with marks and written guidance.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
          TESTIMONIALS — with image context
      ═══════════════════════════════════════════════════════════════ */}
      <Section className="bg-gradient-to-br from-blue-50 to-white">

        {/* Section header with image strip */}
        <div className="flex flex-col md:flex-row md:items-center gap-5 mb-12">
          <div className="shrink-0">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-1">Student Success</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Students Say —<br />About Their Teachers</h2>
            <p className="text-gray-500 text-sm mt-2 max-w-md leading-relaxed">
              Real students. Real ranks. Real accounts of how expert teaching transformed their optional score.
            </p>
          </div>
          {/* Decorative image strip */}
          <div className="hidden md:block flex-1 relative h-28 rounded-2xl overflow-hidden shadow-lg">
            <img src={IMG.classSession} alt="Students and teachers at The CSE Circle" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-blue-900/50 flex items-center justify-center">
              <p className="text-white font-semibold text-sm text-center leading-snug px-6">
                500+ verified selections —<br />guided by dedicated teachers.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/results">
            <Button variant="outline" size="lg">View All Student Results</Button>
          </Link>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
          TEACHER QUOTE STRIP — with portrait images
      ═══════════════════════════════════════════════════════════════ */}
      <Section className="bg-white">
        <SectionTitle
          title="In the Teachers' Own Words"
          subtitle="The philosophy behind every class, every note, and every feedback session at The CSE Circle."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Maths Teacher Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 group"
          >
            {/* Teacher portrait */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={IMG.mathsTeacher}
                alt="Maths Optional Teacher"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent flex items-end p-5">
                <div>
                  <p className="text-white font-bold text-sm">Maths Optional Teacher</p>
                  <p className="text-blue-300 text-xs">10+ Years · UPSC Exclusive · 200+ Selections</p>
                </div>
              </div>
            </div>

            {/* Quote body */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-7 border-t-4 border-blue-600">
              <Quote size={20} className="text-blue-300 mb-3" />
              <p className="text-gray-700 text-sm italic leading-relaxed mb-5">
                Mathematics is not difficult — it is unfamiliar. My job is to make it familiar,
                one concept at a time. Once a student truly understands why a theorem works —
                not just what it says — they can handle any question the examiner throws at them.
              </p>
              <Link to="/teachers#maths-teacher">
                <Button variant="outline" size="sm" className="group/btn">
                  Meet the Maths Teacher
                  <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={14} />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Sociology Teacher Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 group"
          >
            {/* Teacher portrait */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={IMG.socioTeacher}
                alt="Sociology Optional Teacher"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-transparent flex items-end p-5">
                <div>
                  <p className="text-white font-bold text-sm">Sociology Optional Teacher</p>
                  <p className="text-indigo-300 text-xs">8+ Years · UPSC Exclusive · 300+ Selections</p>
                </div>
              </div>
            </div>

            {/* Quote body */}
            <div className="bg-gradient-to-br from-indigo-50 to-white p-7 border-t-4 border-indigo-600">
              <Quote size={20} className="text-indigo-300 mb-3" />
              <p className="text-gray-700 text-sm italic leading-relaxed mb-5">
                Sociology is not abstract theory for its own sake — it is the most powerful lens
                we have to understand Indian society and the challenges an IAS officer will actually face.
                My goal is to make sure students walk into the exam not just remembering what Durkheim
                said, but knowing exactly how to use it.
              </p>
              <Link to="/teachers#sociology-teacher">
                <Button variant="outline" size="sm" className="group/btn">
                  Meet the Sociology Teacher
                  <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={14} />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
          PYQ CALLOUT — image left, text right
      ═══════════════════════════════════════════════════════════════ */}
      <Section className="bg-gradient-to-br from-gray-50 to-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-xl group">
              <img
                src={IMG.pyq}
                alt="20 years of UPSC PYQ analysis by The CSE Circle teachers"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent flex items-end p-7">
                <div>
                  <div className="text-5xl font-bold text-amber-400 mb-1">20+</div>
                  <p className="text-white font-bold text-base">Years of UPSC PYQs</p>
                  <p className="text-gray-300 text-xs mt-0.5">2000–2024 · Maths Optional + Sociology Optional · Topic-wise classified</p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-blue-600 text-white rounded-2xl px-5 py-3 shadow-xl text-center hidden md:block">
              <div className="text-xl font-bold">Free</div>
              <div className="text-blue-200 text-xs">2017–2020 PYQs</div>
            </div>
          </motion.div>

          {/* Right — text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">Previous Year Questions</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-snug">
              The Teacher's PYQ Bank — Free to Access.
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Our teachers have analysed every UPSC Maths Optional and Sociology Optional paper from
              2000 to the present — mapped by topic, classified by difficulty, and annotated with
              examiner preference insights.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              We believe access to previous year questions is a right, not a privilege. PYQs from
              2017–2020 are available for free download with no registration required.
              Model answers and full analysis are available for enrolled students.
            </p>

            <div className="space-y-3 mb-7">
              {[
                'Topic-wise classified for both Maths Optional and Sociology Optional',
                'Frequency analysis — which topics appear in 9 of 10 papers',
                'Teacher notes on examiner preferences per topic',
                'Model answers available for enrolled students (2020–2024)',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle size={15} className="text-blue-600 mt-0.5 shrink-0" />
                  <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/pyq">
                <Button className="group bg-gradient-to-r from-blue-600 to-blue-800">
                  Download Free PYQs
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline">Access Full PYQ Bank</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
          FINAL CTA — with background image overlay
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={IMG.classSession}
            alt="The CSE Circle teaching"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700/95 via-blue-700/90 to-indigo-700/95" />
        </div>

        <div className="relative py-24 px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto text-white">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-white/15 border border-white/25 text-white/85 text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-6">
                Start Your Preparation Right
              </span>

              <h2 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
                Your Optional Score Starts<br />with the Right Teacher.
              </h2>
              <p className="text-xl mb-3 text-blue-100">
                Attend a free demo class. Meet your teacher. Ask every question you have.
              </p>
              <p className="text-base mb-10 text-blue-200 max-w-2xl mx-auto">
                No commitment required — just one class to experience what genuine teaching
                at The CSE Circle actually feels like.
              </p>

              {/* Inline trust signals */}
              <div className="flex flex-wrap justify-center gap-6 mb-10">
                {[
                  { val: '500+',   label: 'Verified Selections' },
                  { val: 'Free',   label: 'Demo Class Available' },
                  { val: '100%',   label: 'Teacher-Evaluated Answers' },
                  { val: '2',      label: 'Expert Teachers' },
                ].map((t, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-bold text-amber-400">{t.val}</div>
                    <div className="text-blue-200 text-xs">{t.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" variant="secondary">Book a Free Demo Class</Button>
                </Link>
                <Link to="/teachers">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black hover:text-blue-600">
                    Meet Your Teachers
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}