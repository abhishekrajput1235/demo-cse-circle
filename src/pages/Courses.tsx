import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Download, CheckCircle, ChevronDown, ChevronUp,
  BookOpen, Target, TrendingUp, FileText, Lock, Unlock,
  BarChart2, Lightbulb, Star, Clock
} from 'lucide-react';
import Button from '../components/Button';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import bgHero from '../assets/bg9.jpg';
import bgBottom from '../assets/bg10.jpg';



// ─── IMAGE CONSTANTS ───────────────────────────────────────────────────────
const IMG = {
  hero:         bgHero,
  pyqStudy:     'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=900',
  teacherDesk:  'https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=900',
  answerWrite:  'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=900',
  library:      'https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=900',
  classSession: bgBottom,
  discussion:   'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=900',
  mathsBoard:   'https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg?auto=compress&cs=tinysrgb&w=900',
  socioTeacher: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
};

// ─── DATA ──────────────────────────────────────────────────────────────────

const mathsPYQ = [
  { year: '2024', p1: 'Linear Algebra, ODE, Vector Analysis',         p2: 'Abstract Algebra, Real Analysis, Statistics',    free: false },
  { year: '2023', p1: 'Calculus, ODE, Linear Algebra',                p2: 'Complex Analysis, Real Analysis, LPP',           free: false },
  { year: '2022', p1: 'Linear Algebra, Analytic Geometry, Dynamics',  p2: 'Abstract Algebra, PDE, Numerical Analysis',      free: false },
  { year: '2021', p1: 'Vector Analysis, ODE, Calculus',               p2: 'Real Analysis, Fluid Dynamics, Statistics',      free: false },
  { year: '2020', p1: 'Linear Algebra, ODE, Statics',                 p2: 'Abstract Algebra, Complex Analysis, LPP',        free: true  },
  { year: '2019', p1: 'Calculus, Vector Analysis, Dynamics',          p2: 'Real Analysis, PDE, Mechanics',                  free: true  },
  { year: '2018', p1: 'Linear Algebra, Analytic Geometry, ODE',       p2: 'Abstract Algebra, Statistics, Fluid Dynamics',   free: true  },
  { year: '2017', p1: 'Calculus, Statics, Vector Analysis',           p2: 'Complex Analysis, Numerical Analysis, LPP',      free: true  },
  { year: '2015–16', p1: 'Mixed — all major Paper I units',           p2: 'Mixed — all major Paper II units',               free: true  },
  { year: '2010–14', p1: 'Topic-wise classification available',       p2: 'Topic-wise classification available',            free: true  },
];

const sociologyPYQ = [
  { year: '2024', p1: 'Sociological Thinkers, Stratification, Science',      p2: 'Social Movements, Caste, Social Change',      free: false },
  { year: '2023', p1: 'Durkheim, Weber, Research Methods',                   p2: 'Tribal Communities, Agrarian Structure',       free: false },
  { year: '2022', p1: 'Marx, Parsons, Stratification',                       p2: 'Caste, Social Movements, Population',          free: false },
  { year: '2021', p1: 'Mead, Merton, Power & Society',                       p2: 'Ghurye, Srinivas, Indian Kinship',             free: false },
  { year: '2020', p1: 'Durkheim Religion, Positivism, Kinship',              p2: 'Dalit Movement, Agrarian Class, Education',    free: true  },
  { year: '2019', p1: 'Weber Bureaucracy, Research Methods, Stratification', p2: "Women's Movement, Tribal Identity",            free: true  },
  { year: '2018', p1: 'Marx Alienation, Comte, Power & Authority',           p2: 'Caste Mobility, Agrarian Structure',           free: true  },
  { year: '2017', p1: 'Parsons AGIL, Merton, Kinship Systems',               p2: 'Peasant Movements, Population, Displacement',  free: true  },
  { year: '2015–16', p1: 'Mixed — all major Paper I thinkers',               p2: 'Mixed — all major Indian Society topics',      free: true  },
  { year: '2010–14', p1: 'Topic-wise classification available',              p2: 'Topic-wise classification available',          free: true  },
];

const mathsFrequency = [
  { topic: 'Linear Algebra',    freq: 10, paper: 'Paper I', weight: 'Very High' },
  { topic: 'Real Analysis',     freq: 10, paper: 'Paper II', weight: 'Very High' },
  { topic: 'Abstract Algebra',  freq: 9,  paper: 'Paper II', weight: 'Very High' },
  { topic: 'ODE',               freq: 9,  paper: 'Paper I',  weight: 'Very High' },
  { topic: 'Complex Analysis',  freq: 8,  paper: 'Paper II', weight: 'High'      },
  { topic: 'Vector Analysis',   freq: 8,  paper: 'Paper I',  weight: 'High'      },
  { topic: 'Calculus',          freq: 8,  paper: 'Paper I',  weight: 'High'      },
  { topic: 'Statistics & LPP',  freq: 8,  paper: 'Paper II', weight: 'High'      },
  { topic: 'PDE',               freq: 7,  paper: 'Paper II', weight: 'High'      },
  { topic: 'Mechanics',         freq: 6,  paper: 'Paper II', weight: 'Medium'    },
  { topic: 'Dynamics & Statics',freq: 6,  paper: 'Paper I',  weight: 'Medium'    },
  { topic: 'Numerical Analysis',freq: 6,  paper: 'Paper II', weight: 'Medium'    },
];

const sociologyFrequency = [
  { topic: 'Sociological Thinkers', freq: 10, paper: 'Paper I',  weight: 'Very High' },
  { topic: 'Social Structure / Caste', freq: 10, paper: 'Paper II', weight: 'Very High' },
  { topic: 'Stratification & Mobility', freq: 9, paper: 'Paper I', weight: 'Very High' },
  { topic: 'Social Change in India',    freq: 9, paper: 'Paper II', weight: 'Very High' },
  { topic: 'Social Movements',         freq: 9,  paper: 'Paper II', weight: 'Very High' },
  { topic: 'Research Methods',         freq: 8,  paper: 'Paper I',  weight: 'High'      },
  { topic: 'Introducing Indian Society',freq: 8, paper: 'Paper II', weight: 'High'      },
  { topic: 'Religion & Society',       freq: 7,  paper: 'Paper I',  weight: 'High'      },
  { topic: 'Politics & Society',       freq: 7,  paper: 'Paper I',  weight: 'High'      },
  { topic: 'Tribal Communities',       freq: 7,  paper: 'Paper II', weight: 'High'      },
  { topic: 'Population Dynamics',      freq: 6,  paper: 'Paper II', weight: 'Medium'    },
  { topic: 'Systems of Kinship',       freq: 6,  paper: 'Paper I',  weight: 'Medium'    },
];

const faqs = [
  { q: 'Are the PYQs on this page really free to download?',
    a: 'Yes. PYQs from 2010–2020 for both Maths Optional and Sociology Optional are completely free to download — no registration required. We believe access to past papers is a right, not a premium feature. PYQs from 2021 onwards, along with model answers and topic-wise analysis, are available for enrolled students.' },
  { q: 'What is included with the PYQs — just the questions, or model answers too?',
    a: 'Free PYQs include the original question papers with topic classification. Enrolled students additionally receive model answers written by the teacher, marks-per-step breakdown (for Maths), 6-part answer frameworks (for Sociology), and the teacher\'s analysis of why each question was asked and what the examiner expected.' },
  { q: 'How often are the PYQs updated?',
    a: 'Every year, after UPSC releases the official Mains question papers. Both the Maths Optional and Sociology Optional PYQ banks are updated with the current year\'s paper within 2 weeks of the exam, along with the teacher\'s initial analysis of new patterns and topic shifts.' },
  { q: 'How should I use PYQs in my preparation?',
    a: 'Our teachers recommend a PYQ-first approach — read PYQs for a topic before you study the theory. This shows you the destination before the journey. Once you have covered the topic, attempt the PYQs under timed conditions. In the final 2 months, prioritise high-frequency topics identified in the frequency analysis above.' },
  { q: 'Are the PYQs classified topic-wise or only year-wise?',
    a: 'Both. Each year\'s paper is available as a complete set (year-wise), and all questions from 2000–2024 are also classified topic-wise so you can study every question ever asked on Linear Algebra, or every question ever asked on Caste System, in one place.' },
  { q: 'Can I access PYQ model answers without enrolling?',
    a: 'Model answers are available exclusively for enrolled students. The free download includes original question papers with topic classification. To access model answers, marks analysis, and teacher notes, enrol in the Maths Optional or Sociology Optional programme.' },
];

// ─── SUB-COMPONENTS ────────────────────────────────────────────────────────

function FrequencyBar({ freq, weight }: { freq: number; weight: string }) {
  const pct = Math.round((freq / 10) * 100);
  const color = weight === 'Very High' ? 'bg-red-500' : weight === 'High' ? 'bg-amber-500' : 'bg-green-500';
  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-1">
        <div className="h-2 bg-gray-100 rounded-full flex-1">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${pct}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className={`h-2 rounded-full ${color}`}
          />
        </div>
        <span className="text-xs font-bold text-gray-600 w-10 text-right">{freq}/10</span>
      </div>
    </div>
  );
}

function PYQTable({
  data, subject, accentFrom, accentTo, accentBorder, accentHover, yearBg, yearText,
}: {
  data: typeof mathsPYQ;
  subject: string;
  accentFrom: string; accentTo: string;
  accentBorder: string; accentHover: string;
  yearBg: string; yearText: string;
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className={`bg-gradient-to-r ${accentFrom} ${accentTo} text-white text-xs`}>
            <th className="text-left p-4 font-bold">Year</th>
            <th className="text-left p-4 font-bold">Paper I — Key Topics</th>
            <th className="text-left p-4 font-bold">Paper II — Key Topics</th>
            <th className="text-center p-4 font-bold">Access</th>
            <th className="text-center p-4 font-bold">Download</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr
              key={i}
              className={`border-b border-gray-100 transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} ${accentHover}`}
            >
              <td className="p-4">
                <span className={`${yearBg} ${yearText} text-xs font-bold px-2.5 py-1 rounded`}>{row.year}</span>
              </td>
              <td className="p-4 text-gray-600 text-xs leading-relaxed">{row.p1}</td>
              <td className="p-4 text-gray-600 text-xs leading-relaxed">{row.p2}</td>
              <td className="p-4 text-center">
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${row.free ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                  {row.free ? 'Free' : 'Enrolled'}
                </span>
              </td>
              <td className="p-4 text-center">
                {row.free ? (
                  <button className={`flex items-center gap-1 mx-auto text-xs font-semibold transition-colors ${accentBorder.replace('border-', 'text-')} hover:opacity-70`}>
                    <Download size={13} /> Download
                  </button>
                ) : (
                  <div className="flex items-center gap-1 mx-auto text-xs text-gray-300 justify-center">
                    <Lock size={13} /> Enrol
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FrequencyTable({
  data, accentBorder, subject,
}: { data: typeof mathsFrequency; accentBorder: string; subject: string }) {
  const weightColor: Record<string, string> = {
    'Very High': 'bg-red-100 text-red-700',
    'High':      'bg-amber-100 text-amber-700',
    'Medium':    'bg-green-100 text-green-700',
  };
  return (
    <div className="space-y-3">
      {data.map((row, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: i * 0.05 }}
          className={`bg-white rounded-xl p-4 border border-gray-100 border-l-4 ${accentBorder} shadow-sm`}
        >
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <span className="font-bold text-gray-900 text-sm">{row.topic}</span>
            <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{row.paper}</span>
            <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${weightColor[row.weight]}`}>{row.weight}</span>
          </div>
          <FrequencyBar freq={row.freq} weight={row.weight} />
        </motion.div>
      ))}
    </div>
  );
}

function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {faqs.map((faq, i) => (
        <div key={i} className={`border rounded-2xl overflow-hidden transition-all ${open === i ? 'border-blue-300 shadow-md' : 'border-gray-200'}`}>
          <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left gap-4">
            <span className={`font-semibold text-sm ${open === i ? 'text-blue-700' : 'text-gray-800'}`}>{faq.q}</span>
            {open === i
              ? <ChevronUp size={16} className="text-blue-600 shrink-0" />
              : <ChevronDown size={16} className="text-gray-400 shrink-0" />}
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.28 }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-5 text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

// ─── MAIN PAGE ─────────────────────────────────────────────────────────────

export default function PYQ() {
  const [activeOptional, setActiveOptional] = useState<'maths' | 'sociology'>('maths');
  const [activeView, setActiveView] = useState<'papers' | 'frequency'>('papers');

  return (
    <div className="min-h-screen pt-20">

      {/* ═══════════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img src={IMG.hero} alt="UPSC PYQ study material" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/80 to-indigo-900/70" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Left — text */}
            <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-block bg-white/15 border border-white/25 text-white/85 text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-6">
                UPSC Previous Year Questions — Free Download
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
                UPSC Mains PYQ —<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
                  Decoded by Your Teachers.
                </span>
              </h1>
              <p className="text-white/75 text-base leading-relaxed mb-8 max-w-lg">
                20+ years of UPSC Maths Optional and Sociology Optional Previous Year Questions —
                topic-wise classified, frequency-mapped, and annotated with your teacher's examiner insights.
                The most important resource in your optional preparation. Free for everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#pyq-bank">
                  <Button size="lg" className="group bg-amber-500 hover:bg-amber-400 text-white">
                    <Download size={18} className="mr-2" />
                    Download Free PYQs
                  </Button>
                </a>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10">
                    Access Full PYQ Bank
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right — stat cards */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { val: '20+',  label: 'Years Covered',           sub: '2000 – 2024' },
                { val: '2',    label: 'Optional Subjects',        sub: 'Maths + Sociology' },
                { val: '100%', label: 'Topic-Wise Classified',   sub: 'Both papers, all units' },
                { val: 'Free', label: 'No Registration Needed',  sub: '2010–2020 download' },
              ].map((s, i) => (
                <motion.div key={i} whileHover={{ scale: 1.03 }} className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-2xl p-5">
                  <div className="text-3xl font-bold text-amber-400 mb-1">{s.val}</div>
                  <div className="text-white text-xs font-semibold mb-0.5">{s.label}</div>
                  <div className="text-white/45 text-xs">{s.sub}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 50L1440 50L1440 25C1200 50 960 0 720 25C480 50 240 0 0 25Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          WHY PYQs — teacher's perspective, image left
      ═══════════════════════════════════════════════════════════════ */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left — image stack */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl group">
              <img src={IMG.teacherDesk} alt="Teacher analysing UPSC PYQ patterns" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/85 to-transparent flex items-end p-6">
                <div>
                  <p className="text-white font-bold text-sm">PYQ-Anchored Teaching</p>
                  <p className="text-blue-200 text-xs mt-1 leading-relaxed">
                    Every topic begins with a real past-year question — the teacher shows the destination before the journey.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-44 rounded-2xl overflow-hidden shadow-lg group">
                <img src={IMG.pyqStudy} alt="Student studying UPSC PYQs" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-indigo-900/65 flex items-end p-4">
                  <div>
                    <p className="text-white font-bold text-xs">Student Practice</p>
                    <p className="text-indigo-200 text-xs mt-0.5 leading-snug">Timed PYQ attempts from Week 1 of the programme.</p>
                  </div>
                </div>
              </div>

              <div className="relative h-44 rounded-2xl overflow-hidden shadow-lg group">
                <img src={IMG.answerWrite} alt="PYQ answer writing practice" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-blue-900/65 flex items-end p-4">
                  <div>
                    <p className="text-white font-bold text-xs">Answer Writing</p>
                    <p className="text-blue-200 text-xs mt-0.5 leading-snug">PYQ-based answers evaluated by the teacher personally.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">Why PYQs Are Non-Negotiable</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
              The Teacher's Case<br />for Starting with PYQs.
            </h2>

            <div className="space-y-4 text-gray-600 text-sm leading-relaxed mb-7">
              <p>
                Every experienced UPSC optional teacher will tell you the same thing: the single most
                important document in your preparation is not the textbook, not the coaching notes —
                it is the collection of questions UPSC has actually asked over the last 20 years.
              </p>
              <p>
                PYQs reveal what the examiner cares about. Not what the syllabus says they should care about —
                what they <em className="text-gray-900 font-medium">actually</em> ask. Which topics appear in 9 of 10 papers.
                Which units are reliably skippable. What depth is expected. What a full-marks answer looks like.
              </p>
              <p>
                At The CSE Circle, both teachers structure their entire programme around PYQ analysis.
                Every topic is introduced through a past-year question. Every answer writing session uses
                actual exam questions. Every mock test mirrors the real paper's distribution. This is not a
                strategy — it is the only intellectually honest way to prepare for a known examination.
              </p>
            </div>

            <div className="space-y-3 mb-8">
              {[
                { icon: Target,    text: 'Know which topics appear in 9 of 10 papers — before you spend time on anything.' },
                { icon: BarChart2, text: 'Understand mark distribution across topics — invest effort where it returns the most.' },
                { icon: FileText,  text: 'See the exact question formats UPSC uses — so no question type is unfamiliar on exam day.' },
                { icon: Lightbulb, text: 'Develop examiner-awareness — the rarest and most valuable skill in optional preparation.' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={15} className="text-blue-600" />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                  </div>
                );
              })}
            </div>

            {/* Teacher pull-quote */}
            <div className="border-l-4 border-blue-600 pl-5 bg-blue-50 py-4 pr-4 rounded-r-xl">
              <p className="text-blue-900 text-sm font-medium italic leading-relaxed">
                "I teach every topic backwards — I start with the past-year question,
                then teach the theory that makes the answer possible.
                The examiner's question is always the clearest definition of what matters."
              </p>
              <p className="text-blue-600 text-xs font-bold mt-2">— Maths Optional Teacher, The CSE Circle</p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
          WHAT'S INCLUDED — image banner + 3 tiers
      ═══════════════════════════════════════════════════════════════ */}
      <Section className="bg-gradient-to-br from-gray-50 to-white">

        {/* Wide image banner */}
        <div className="relative h-52 md:h-60 rounded-3xl overflow-hidden mb-14 shadow-xl">
          <img src={IMG.classSession} alt="PYQ analysis class at The CSE Circle" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-transparent flex items-center px-10 md:px-16">
            <div className="max-w-lg">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2">What You Get</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-snug">
                Three Levels of PYQ Access
              </h2>
              <p className="text-white/65 text-sm leading-relaxed">
                From free downloads to full teacher-annotated model answers — choose the level that matches your preparation stage.
              </p>
            </div>
          </div>
        </div>

        {/* 3-tier access cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Unlock,
              tier: 'Free — No Registration',
              badge: 'bg-green-100 text-green-700',
              heading: 'Original Question Papers',
              color: 'border-green-500',
              headingColor: 'text-green-700',
              img: IMG.library,
              features: [
                'Complete papers — 2010 to 2020',
                'Topic-wise classification for all units',
                'Frequency count per topic (2000–2024)',
                'Both Maths Optional and Sociology Optional',
                'No login or registration needed',
              ],
              cta: 'Download Now',
              ctaLink: '#pyq-bank',
              ctaStyle: 'bg-green-600 hover:bg-green-700 text-white',
            },
            {
              icon: Star,
              tier: 'Enrolled Students',
              badge: 'bg-blue-100 text-blue-700',
              heading: 'Papers + Model Answers',
              color: 'border-blue-600',
              headingColor: 'text-blue-700',
              img: IMG.answerWrite,
              features: [
                'Full papers — 2000 to present (2024)',
                'Teacher-written model answers per question',
                'Marks-per-step breakdown (Maths)',
                '6-part answer frameworks (Sociology)',
                'Examiner preference notes per topic',
              ],
              cta: 'Enrol to Access',
              ctaLink: '/contact',
              ctaStyle: 'bg-blue-600 hover:bg-blue-700 text-white',
            },
            {
              icon: Target,
              tier: 'Full Programme',
              badge: 'bg-indigo-100 text-indigo-700',
              heading: 'PYQ + Live Analysis',
              color: 'border-indigo-600',
              headingColor: 'text-indigo-700',
              img: IMG.discussion,
              features: [
                'Everything in the Enrolled tier',
                'Live bi-monthly PYQ analysis sessions',
                'Teacher explains why each question appeared',
                'Current year paper discussion within 2 weeks',
                'Personal mock tests built from PYQ patterns',
              ],
              cta: 'Join the Programme',
              ctaLink: '/contact',
              ctaStyle: 'bg-indigo-600 hover:bg-indigo-700 text-white',
            },
          ].map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className={`bg-white rounded-2xl overflow-hidden border border-gray-100 border-t-4 ${card.color} shadow-sm hover:shadow-xl transition-shadow`}
              >
                {/* Card image */}
                <div className="relative h-36 overflow-hidden group">
                  <img src={card.img} alt={card.heading} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent flex items-end p-4">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${card.badge}`}>{card.tier}</span>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Icon size={18} className={card.headingColor} />
                    <h3 className={`font-bold text-base ${card.headingColor}`}>{card.heading}</h3>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {card.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2">
                        <CheckCircle size={13} className="text-gray-400 mt-0.5 shrink-0" />
                        <span className="text-gray-600 text-xs leading-relaxed">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={card.ctaLink}>
                    <button className={`w-full py-2.5 rounded-xl text-sm font-bold transition-colors ${card.ctaStyle}`}>
                      {card.cta}
                    </button>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
          PYQ BANK — tabbed by optional + papers/frequency
      ═══════════════════════════════════════════════════════════════ */}
      <Section className="bg-white" id="pyq-bank">

        <SectionTitle
          title="The PYQ Bank"
          subtitle="UPSC Maths Optional and Sociology Optional — previous year questions from 2000 to 2024, classified and analysed by your teachers."
        />

        {/* Optional tabs */}
        <div className="flex flex-wrap gap-3 mb-6">
          {([
            { key: 'maths',     label: '∑ Maths Optional',     from: 'from-blue-600', to: 'to-blue-800' },
            { key: 'sociology', label: '⚖ Sociology Optional',  from: 'from-indigo-600', to: 'to-purple-700' },
          ] as const).map((opt) => (
            <button
              key={opt.key}
              onClick={() => setActiveOptional(opt.key)}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeOptional === opt.key
                  ? `bg-gradient-to-r ${opt.from} ${opt.to} text-white shadow-md`
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* View tabs */}
        <div className="flex gap-2 border-b border-gray-200 pb-px mb-8">
          {([
            { key: 'papers',    label: 'Year-wise Papers'      },
            { key: 'frequency', label: 'Topic Frequency Chart' },
          ] as const).map((v) => (
            <button
              key={v.key}
              onClick={() => setActiveView(v.key)}
              className={`px-5 py-2 text-sm font-semibold rounded-t-lg transition-all ${
                activeView === v.key
                  ? activeOptional === 'maths'
                    ? 'bg-blue-600 text-white shadow'
                    : 'bg-indigo-600 text-white shadow'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeOptional}-${activeView}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            {activeView === 'papers' && activeOptional === 'maths' && (
              <>
                <p className="text-gray-500 text-sm mb-5 max-w-2xl">
                  Complete UPSC Maths Optional papers from 2010–2020 are free. Papers from 2021–2024
                  with model answers are available for enrolled students.
                </p>
                <PYQTable
                  data={mathsPYQ}
                  subject="Maths Optional"
                  accentFrom="from-blue-700" accentTo="to-blue-900"
                  accentBorder="border-blue-600" accentHover="hover:bg-blue-50"
                  yearBg="bg-blue-900" yearText="text-blue-200"
                />
              </>
            )}
            {activeView === 'papers' && activeOptional === 'sociology' && (
              <>
                <p className="text-gray-500 text-sm mb-5 max-w-2xl">
                  Complete UPSC Sociology Optional papers from 2010–2020 are free. Papers from 2021–2024
                  with model answers and 6-part framework analysis are available for enrolled students.
                </p>
                <PYQTable
                  data={sociologyPYQ}
                  subject="Sociology Optional"
                  accentFrom="from-indigo-700" accentTo="to-purple-800"
                  accentBorder="border-indigo-600" accentHover="hover:bg-indigo-50"
                  yearBg="bg-indigo-900" yearText="text-indigo-200"
                />
              </>
            )}
            {activeView === 'frequency' && activeOptional === 'maths' && (
              <div>
                <div className="flex flex-wrap gap-4 mb-7 items-center">
                  {[
                    { label: 'Very High (9–10/10)', color: 'bg-red-500' },
                    { label: 'High (7–8/10)',        color: 'bg-amber-500' },
                    { label: 'Medium (5–6/10)',      color: 'bg-green-500' },
                  ].map((b) => (
                    <div key={b.label} className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${b.color}`} />
                      <span className="text-xs text-gray-500 font-medium">{b.label}</span>
                    </div>
                  ))}
                  <span className="text-xs text-gray-400 ml-2">Frequency out of last 10 UPSC papers</span>
                </div>
                <FrequencyTable data={mathsFrequency} accentBorder="border-blue-500" subject="Maths" />
              </div>
            )}
            {activeView === 'frequency' && activeOptional === 'sociology' && (
              <div>
                <div className="flex flex-wrap gap-4 mb-7 items-center">
                  {[
                    { label: 'Very High (9–10/10)', color: 'bg-red-500' },
                    { label: 'High (7–8/10)',        color: 'bg-amber-500' },
                    { label: 'Medium (5–6/10)',      color: 'bg-green-500' },
                  ].map((b) => (
                    <div key={b.label} className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${b.color}`} />
                      <span className="text-xs text-gray-500 font-medium">{b.label}</span>
                    </div>
                  ))}
                  <span className="text-xs text-gray-400 ml-2">Frequency out of last 10 UPSC papers</span>
                </div>
                <FrequencyTable data={sociologyFrequency} accentBorder="border-indigo-500" subject="Sociology" />
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Download CTA below table */}
        <div className="mt-8 flex flex-wrap gap-4 items-center justify-between bg-gray-50 border border-gray-200 rounded-2xl p-5">
          <div>
            <p className="font-bold text-gray-900 text-sm">Ready to download all free PYQs?</p>
            <p className="text-gray-500 text-xs mt-0.5">No registration. No login. Just click and download.</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Button className="bg-green-600 hover:bg-green-700 text-white group">
              <Download size={15} className="mr-2" /> Download Free Papers (2010–2020)
            </Button>
            <Link to="/contact">
              <Button variant="outline">Access 2021–2024 + Model Answers</Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
          HOW TEACHERS USE PYQs — image right
      ═══════════════════════════════════════════════════════════════ */}
      <Section className="bg-gradient-to-br from-blue-50 to-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">Inside the Classroom</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
              How Our Teachers<br />Actually Use PYQs.
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              PYQs are not a revision tool at The CSE Circle — they are the foundation of teaching.
              Here is exactly how both teachers integrate PYQs into every part of the programme,
              from the first day of class to the final mock before the exam.
            </p>

            <div className="space-y-5">
              {[
                { step: '01', icon: BookOpen,  title: 'Topic Introduction',    desc: 'Before teaching any theory, the teacher shows 2–3 PYQs from that topic. Students immediately see what the examiner asks — the "why" before the "what".' },
                { step: '02', icon: TrendingUp, title: 'Frequency Briefing',   desc: 'Every topic is introduced with its frequency data — students know upfront whether they are studying something that appears 9 times in 10 or only once.' },
                { step: '03', icon: FileText,  title: 'Live Answer Writing',   desc: 'After teaching a topic, students attempt an actual PYQ under timed conditions. The teacher evaluates the submission with marks-per-step feedback.' },
                { step: '04', icon: Target,    title: 'Paper-Level Analysis',  desc: 'Twice monthly, the teacher analyses a full past paper — explaining why specific questions appeared, what examiner trend they reflect, and how to approach the next paper.' },
                { step: '05', icon: Clock,     title: 'Final Month Strategy',  desc: 'In the last 6 weeks, the teacher identifies the highest-probability topics based on frequency and recent trends — students concentrate their final revision here.' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="flex gap-4 bg-white rounded-xl p-4 border border-gray-100 border-l-4 border-l-blue-600 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="text-2xl font-black text-blue-100 leading-none shrink-0 w-8">{item.step}</div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Icon size={14} className="text-blue-600" />
                        <h4 className="font-bold text-gray-900 text-sm">{item.title}</h4>
                      </div>
                      <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right — image stack */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-xl group">
              <img
                src={IMG.mathsBoard}
                alt="Maths Optional PYQ analysis on board"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/85 to-transparent flex items-end p-6">
                <div>
                  <p className="text-white font-bold text-sm">Maths Optional — PYQ-Based Teaching</p>
                  <p className="text-blue-200 text-xs mt-1 leading-relaxed">
                    Every class begins with the examiner's question — theory follows, not the other way round.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-52 rounded-2xl overflow-hidden shadow-xl group">
              <img
                src={IMG.socioTeacher}
                alt="Sociology Optional teacher PYQ analysis"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/85 to-transparent flex items-end p-6">
                <div>
                  <p className="text-white font-bold text-sm">Sociology Optional — Theme Mapping</p>
                  <p className="text-indigo-200 text-xs mt-1 leading-relaxed">
                    Examiner themes are mapped across 20 years — students know which thinkers to master deeply.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
          MODEL ANSWERS — what enrolled students get
      ═══════════════════════════════════════════════════════════════ */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

          {/* Left — image */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-80 rounded-2xl overflow-hidden shadow-xl group sticky top-24"
            >
              <img
                src={IMG.answerWrite}
                alt="Teacher writing model answer for UPSC PYQ"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/85 via-gray-900/30 to-transparent flex items-end p-7">
                <div>
                  <p className="text-white font-bold text-base mb-1">Model Answers — Written by the Teacher</p>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    Not crowd-sourced. Not compiled from toppers. Written by the same teacher who teaches you —
                    so the answer matches the teaching.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right — content */}
          <div className="lg:col-span-3">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">For Enrolled Students</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-5 leading-snug">
              What Makes Our Model Answers Different.
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              Most PYQ resources give you the questions. Some give you answer keys. Very few give you
              what actually helps: a teacher-written model answer that shows you not just what to write,
              but <em>how</em> to think about the question — and exactly how marks are earned.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: FileText, title: 'Maths Optional Answers',  desc: 'Complete step-by-step solutions with marks allocated per step. Shows how to earn partial credit even on incorrect final answers. Includes presentation and legibility guidance.', color: 'blue' },
                { icon: BookOpen, title: 'Sociology Optional Answers', desc: 'Full model answers following the 6-part framework: Introduction → Theory → Evidence → Contemporary Relevance → Critical Evaluation → Conclusion. With thinker citations and example data.', color: 'indigo' },
                { icon: Target,   title: 'Examiner Pattern Notes',  desc: 'After each model answer, the teacher adds a note explaining why this question appeared, what the examiner was testing, and what patterns to expect in future papers.', color: 'blue' },
                { icon: TrendingUp, title: 'Year-on-Year Trends',   desc: 'For each topic, a trend note showing how questions have evolved — whether depth has increased, whether new sub-topics have appeared, and what this means for the next exam.', color: 'indigo' },
              ].map((card, i) => {
                const Icon = card.icon;
                const iBlue = card.color === 'blue';
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className={`rounded-xl p-5 border border-gray-100 ${iBlue ? 'bg-blue-50' : 'bg-indigo-50'} hover:shadow-md transition-shadow`}
                  >
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 ${iBlue ? 'bg-blue-600' : 'bg-indigo-600'}`}>
                      <Icon size={16} className="text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1">{card.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{card.desc}</p>
                  </motion.div>
                );
              })}
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-6">
              <div className="flex gap-3 items-start">
                <Lightbulb size={18} className="text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-amber-800 text-sm mb-1">Teacher's Note on Model Answers</p>
                  <p className="text-amber-700 text-xs leading-relaxed">
                    A model answer is not a template to memorise — it is a demonstration of thinking.
                    Every model answer on this platform shows you how an experienced teacher approaches
                    the question, not just what the correct answer is. The goal is that you internalise
                    the method, not reproduce the content.
                  </p>
                </div>
              </div>
            </div>

            <Link to="/contact">
              <Button className="group bg-gradient-to-r from-blue-600 to-blue-800">
                Enrol to Access All Model Answers
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════════════════════════ */}
      <Section className="bg-gradient-to-br from-gray-50 to-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

          {/* Left — FAQ */}
          <div className="lg:col-span-2">
            <SectionTitle
              title="PYQ — Frequently Asked Questions"
              subtitle="Everything you want to know about accessing, using, and getting the most from our PYQ bank."
            />
            <FaqAccordion />
          </div>

          {/* Right — sticky image + quick links */}
          <div className="space-y-5 lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-60 rounded-2xl overflow-hidden shadow-xl group"
            >
              <img
                src={IMG.pyqStudy}
                alt="UPSC aspirant studying PYQs"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent flex items-end p-5">
                <div>
                  <p className="text-white font-bold text-sm">Start with PYQs.</p>
                  <p className="text-gray-300 text-xs mt-0.5 leading-relaxed">
                    It is the single most high-return activity in any optional preparation.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Quick access links */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5 space-y-3">
              <p className="font-bold text-gray-900 text-sm mb-3">Quick Access</p>
              {[
                { label: 'Download Maths PYQs (Free)',       link: '#pyq-bank', color: 'text-blue-600'   },
                { label: 'Download Sociology PYQs (Free)',   link: '#pyq-bank', color: 'text-indigo-600' },
                { label: 'Maths Frequency Chart',            link: '#pyq-bank', color: 'text-blue-600'   },
                { label: 'Sociology Frequency Chart',        link: '#pyq-bank', color: 'text-indigo-600' },
                { label: 'Access Model Answers — Enrol',     link: '/contact',  color: 'text-amber-600'  },
              ].map((item, i) => (
                <a key={i} href={item.link} className={`flex items-center gap-2 text-sm font-medium ${item.color} hover:underline`}>
                  <ArrowRight size={13} />
                  {item.label}
                </a>
              ))}
            </div>

            {/* Stat cards */}
            {[
              { num: '20+',   label: 'Years of PYQs available (2000–2024)' },
              { num: 'Free',  label: 'Papers from 2010–2020 — no login needed' },
              { num: '100%',  label: 'Topic-classified for both optionals' },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                className="flex items-center gap-4 bg-white border border-gray-100 rounded-xl px-5 py-3.5 shadow-sm"
              >
                <span className="text-2xl font-bold text-blue-600 shrink-0">{s.num}</span>
                <p className="text-gray-600 text-xs leading-relaxed">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
          FINAL CTA — full image background
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG.classSession} alt="The CSE Circle PYQ programme" className="w-full h-full object-cover object-center opacity-7" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700/96 via-blue-700/88 to-indigo-700/90" />
        </div>

        <div className="relative py-24 px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto text-white">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-white/15 border border-white/25 text-white/85 text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-6">
                Start Here — It Is Free
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
                20+ Years of UPSC Questions.<br />Decoded by Your Teacher. Free.
              </h2>
              <p className="text-black text-base mb-3">
                Download the PYQ bank. Study the frequency chart. Understand what the examiner actually asks.
              </p>
              <p className="text-black text-sm mb-10 max-w-xl mx-auto leading-relaxed">
                Then, when you are ready, join the programme — and let the teacher show you how to turn
                that understanding into marks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#pyq-bank">
                  <Button size="lg" className="bg-amber-500 hover:bg-amber-400 text-white group">
                    <Download size={18} className="mr-2" />
                    Download Free PYQs Now
                  </Button>
                </a>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black hover:text-blue-600">
                    Join the Full Programme
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