import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, CheckCircle, ChevronDown, ChevronUp,
  BookOpen, PenTool, Target, Clock, TrendingUp,
  Download, Play, Star, AlertCircle, Layers
} from 'lucide-react';
import Button from '../components/Button';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';

// ─── DATA ──────────────────────────────────────────────────────────────────

const syllabus = [
  {
    paper: 'Paper I',
    color: 'blue',
    units: [
      {
        title: 'Linear Algebra',
        weight: 'Very High',
        topics: 'Vector spaces, linear dependence & independence, bases, dimensions, linear transformations, rank-nullity theorem, eigenvalues, eigenvectors, Cayley-Hamilton theorem, inner product spaces, Gram-Schmidt orthonormalisation, symmetric & Hermitian matrices.',
        pyqFreq: '9/10 years',
        teacherNote: 'Begin here. Linear Algebra appears in almost every paper and rewards precise, step-by-step answers. Master this unit first.',
      },
      {
        title: 'Calculus',
        weight: 'High',
        topics: 'Limits, continuity, differentiability, mean value theorems, Taylor\'s theorem, L\'Hôpital rule, maxima & minima, definite & indefinite integrals, beta & gamma functions, double & triple integrals, surface areas & volumes.',
        pyqFreq: '8/10 years',
        teacherNote: 'Strong overlap with Real Analysis. Master both together for efficiency — they reinforce each other deeply.',
      },
      {
        title: 'Analytic Geometry',
        weight: 'Medium',
        topics: 'Cartesian & polar coordinates in 3D, second-degree equations, straight lines, planes, spheres, cones, cylinders, paraboloids, ellipsoids, hyperboloids.',
        pyqFreq: '6/10 years',
        teacherNote: 'Visualisation is key here. I teach every surface with a 3D sketch before algebraic treatment.',
      },
      {
        title: 'Ordinary Differential Equations',
        weight: 'Very High',
        topics: 'Formation of DEs, exact equations, integrating factors, second-order linear ODEs with constant & variable coefficients, Euler-Cauchy equations, power series solutions, Legendre & Bessel equations, Laplace transforms.',
        pyqFreq: '9/10 years',
        teacherNote: 'Laplace transforms alone carry 10–15 marks in most recent papers. Do not underestimate this unit.',
      },
      {
        title: 'Dynamics & Statics',
        weight: 'Medium',
        topics: 'Rectilinear motion, uniform circular motion, work & energy, conservation of energy, Kepler\'s laws, moments & products of inertia, impulsive forces, common catenary, virtual work, stability of equilibrium.',
        pyqFreq: '6/10 years',
        teacherNote: 'Questions are predictable in format. High returns for limited time investment.',
      },
      {
        title: 'Vector Analysis',
        weight: 'High',
        topics: 'Scalar & vector fields, gradient, divergence, curl, Gauss\'s theorem, Green\'s theorem, Stokes\' theorem, curvilinear coordinates.',
        pyqFreq: '8/10 years',
        teacherNote: 'The three integral theorems are guaranteed territory. Learn them with proof and with application.',
      },
    ],
  },
  {
    paper: 'Paper II',
    color: 'indigo',
    units: [
      {
        title: 'Abstract Algebra',
        weight: 'Very High',
        topics: 'Groups, subgroups, cyclic groups, cosets, Lagrange\'s theorem, normal subgroups, quotient groups, homomorphisms, Cayley\'s theorem, rings, ideals, integral domains, fields, polynomial rings.',
        pyqFreq: '9/10 years',
        teacherNote: 'The unit that intimidates most students — and that\'s exactly why mastering it gives you an edge. I teach this through symmetry and structure, not definitions.',
      },
      {
        title: 'Real Analysis',
        weight: 'Very High',
        topics: 'Metric spaces, sequences, series, convergence, completeness, compactness, connectedness, continuity & uniform continuity, functions of several variables, partial derivatives, maxima & minima, multiple integrals, Riemann integration.',
        pyqFreq: '9/10 years',
        teacherNote: 'The most analytically demanding unit. Counterexamples are as important as theorems — I teach both.',
      },
      {
        title: 'Complex Analysis',
        weight: 'High',
        topics: 'Analytic functions, Cauchy-Riemann equations, power series, Cauchy\'s theorem & applications, Laurent series, singularities & residues, contour integration.',
        pyqFreq: '8/10 years',
        teacherNote: 'Residue theorem questions are formulaic once you see the pattern. I teach the geometric intuition first.',
      },
      {
        title: 'Partial Differential Equations',
        weight: 'High',
        topics: 'Formation & classification of PDEs, first-order PDEs, Cauchy problem, second-order equations: parabolic, elliptic, hyperbolic, separation of variables, boundary value problems.',
        pyqFreq: '8/10 years',
        teacherNote: 'Classification of second-order PDEs is tested almost every year. Never skip this.',
      },
      {
        title: 'Numerical Analysis',
        weight: 'Medium',
        topics: 'Errors, finite differences, interpolation (Newton, Lagrange), numerical differentiation & integration, solution of ODEs (Euler, Runge-Kutta), non-linear equations.',
        pyqFreq: '7/10 years',
        teacherNote: 'Highly computational — marks are reliable if you know the methods. Prioritise Runge-Kutta and Newton-Raphson.',
      },
      {
        title: 'Statistics & Linear Programming',
        weight: 'High',
        topics: 'Sampling distributions, estimation, hypothesis testing (z, t, chi-square, F), regression, correlation, ANOVA. LPP formulation, simplex method, duality, transportation & assignment problems.',
        pyqFreq: '8/10 years',
        teacherNote: 'Two units that reward structured, formula-driven answers. Very high marks-to-effort ratio.',
      },
      {
        title: 'Mechanics & Fluid Dynamics',
        weight: 'Medium',
        topics: 'Generalised coordinates, Lagrange\'s equations, Hamilton\'s equations, moment of inertia, fluid dynamics: continuity equation, Euler\'s equation, Bernoulli\'s theorem, viscous flow, Navier-Stokes equations.',
        pyqFreq: '6/10 years',
        teacherNote: 'Lagrangian mechanics is asked predictably. Learn the derivation pattern and you\'ll handle any variant.',
      },
    ],
  },
];

const methodology = [
  { icon: Target,     step: '01', title: 'PYQ Before Theory',        desc: 'Every topic begins with a real past-year question. Before a single definition is taught, you see exactly what the examiner asked and what a full-marks answer looks like. Teaching to the destination, not the textbook.' },
  { icon: BookOpen,   step: '02', title: 'Why Before What',           desc: 'No theorem is stated without explaining why it is true. When you understand the reason, you can reconstruct it on exam day — even under pressure, even for a question you have never seen before.' },
  { icon: Play,       step: '03', title: 'Worked Problems Narrated',  desc: 'Problems are solved step by step with every decision narrated aloud. You watch the thinking process — not just the final answer. This is how mathematical thinking is taught, not just demonstrated.' },
  { icon: PenTool,    step: '04', title: 'Answer Writing from Week 1', desc: 'Exam-format answer writing begins in the first week. You write. Your teacher annotates with marks per step, presentation notes, and specific written feedback. A number tells you nothing — the annotation tells you everything.' },
  { icon: Layers,     step: '05', title: 'Marks-Map for Every Topic', desc: 'The teacher maintains an explicit marks allocation map for every topic — which steps carry which marks, how to earn partial credit even with an incorrect final answer, and how to present an answer to maximise the examiner\'s mark.' },
  { icon: TrendingUp, step: '06', title: 'Timed PYQ Practice',        desc: 'You attempt actual past questions under timed, exam-condition pressure — from Week 1. Confidence is built through realistic practice, not through the illusion of comfort.' },
];

const pyqYears = [
  { year: '2024', p1Topics: 'Linear Algebra, ODE, Vector Analysis', p2Topics: 'Abstract Algebra, Real Analysis, Statistics', free: false },
  { year: '2023', p1Topics: 'Calculus, ODE, Linear Algebra', p2Topics: 'Complex Analysis, Real Analysis, LPP', free: false },
  { year: '2022', p1Topics: 'Linear Algebra, Geometry, Dynamics', p2Topics: 'Abstract Algebra, PDE, Numerical Analysis', free: false },
  { year: '2021', p1Topics: 'Vector Analysis, ODE, Calculus', p2Topics: 'Real Analysis, Fluid Dynamics, Statistics', free: false },
  { year: '2020', p1Topics: 'Linear Algebra, ODE, Statics', p2Topics: 'Abstract Algebra, Complex Analysis, LPP', free: true  },
  { year: '2019', p1Topics: 'Calculus, Vector Analysis, Dynamics', p2Topics: 'Real Analysis, PDE, Mechanics', free: true  },
  { year: '2018', p1Topics: 'Linear Algebra, Geometry, ODE', p2Topics: 'Abstract Algebra, Statistics, Fluid Dynamics', free: true  },
  { year: '2017', p1Topics: 'Calculus, Statics, Vector Analysis', p2Topics: 'Complex Analysis, Numerical Analysis, LPP', free: true  },
];

const books = [
  { topic: 'Linear Algebra',     author: 'K.C. Prasad / Hoffman & Kunze',      use: 'Concept Building',   must: true  },
  { topic: 'Calculus',           author: 'Shanti Narayan / K.C. Sinha',         use: 'Concept + Problems', must: true  },
  { topic: 'Abstract Algebra',   author: 'I.N. Herstein / Joseph Gallian',      use: 'Concept Building',   must: true  },
  { topic: 'Real Analysis',      author: 'S.K. Mapa / Rudin (selective)',       use: 'Concept Building',   must: true  },
  { topic: 'Complex Analysis',   author: 'S. Ponnuswamy / Churchill',           use: 'Concept + Examples', must: true  },
  { topic: 'ODE',                author: 'G.F. Simmons / Earl Coddington',      use: 'Theory + Problems',  must: true  },
  { topic: 'PDE',                author: 'Sneddon / T. Amaranath',              use: 'Theory + Exam Focus',must: true  },
  { topic: 'Mechanics & Fluid',  author: 'S.L. Loney / A.S. Ramsay',           use: 'Problems Focus',     must: false },
  { topic: 'Statistics',         author: 'S.C. Gupta / Hogg & Craig (select)', use: 'Concepts + PYQ',     must: true  },
  { topic: 'Numerical Analysis', author: 'M.K. Jain / B.S. Grewal',            use: 'Methods Focus',      must: false },
  { topic: 'Linear Programming', author: 'Kanti Swarup / S.D. Sharma',         use: 'Concept + Problems', must: true  },
];

const testimonials = [
  { name: 'Aditya Kumar',  rank: 'IAS — AIR 47, CSE 2023', score: '312 / 500', text: 'My teacher narrates the thinking process out loud while solving. That\'s exactly how mathematical thinking is learned. By Month 4, I was solving questions I would have found impossible in Month 1 — not because I worked harder, but because I was taught better.' },
  { name: 'Arjun Pillai',  rank: 'IAS — AIR 67, CSE 2022', score: '304 / 500', text: 'The PYQ analysis sessions built an examiner-awareness I could not have developed alone. Twice a month, the teacher would dissect a full paper — explaining why certain questions appeared, what the examiner was really testing, and what a perfect answer would look like.' },
  { name: 'Rahul Verma',   rank: 'IRS — AIR 152, CSE 2022', score: '287 / 500', text: 'My teacher writes more on my evaluated answers than I write in the answers themselves. Every evaluation is a teaching document — not a score sheet. I kept and re-read every single feedback sheet throughout my preparation.' },
  { name: 'Kiran Menon',   rank: 'IPS — AIR 98, CSE 2023', score: '296 / 500', text: 'I came from a commerce background with no engineering degree. My teacher never once made me feel that was a limitation. They built everything from first principles and I went from genuinely fearing Abstract Algebra to it being my strongest topic.' },
];

const faqs = [
  { q: 'Is Maths Optional good for non-engineering students?', a: 'Absolutely. Many of our highest-scoring students have commerce, science, or humanities backgrounds. What matters is logical aptitude and consistent practice — not an engineering degree. If you genuinely enjoyed Mathematics at graduation level, Maths Optional is worth serious consideration.' },
  { q: 'How long does it take to prepare Maths Optional for UPSC?', a: 'A focused aspirant can cover the full syllabus in 6 months. Paper I typically takes 3 months, Paper II another 3. Answer writing practice and mock tests run parallel throughout. We do not recommend rushing — depth beats breadth in Maths Optional.' },
  { q: 'What is a realistic score to target in Maths Optional?', a: 'A well-prepared candidate should target 280–320 out of 500. Scores above 300 are achievable with comprehensive coverage, consistent answer writing practice, and strong presentation. Our teacher\'s mark-per-step approach is specifically designed to maximise scores even on partially-correct answers.' },
  { q: 'What books are best for UPSC Maths Optional?', a: 'The teacher has curated a topic-wise book list — see the Resources section on this page. The CSE Circle notes are the primary reference; standard texts supplement specific topics. We strongly advise against collecting too many books — depth in fewer resources beats breadth across many.' },
  { q: 'How are live doubt sessions structured?', a: 'Doubt sessions are conducted weekly by the teacher directly — not TAs. Students submit doubts in advance; the teacher categorises them by concept and addresses them systematically. Unresolved doubts carry forward to the next session. You always leave with clarity.' },
  { q: 'Can I join if I have already started preparation elsewhere?', a: 'Yes. Many students join mid-preparation. The teacher begins with a diagnostic test to understand where you are, then builds a forward plan from that point — covering critical gaps without repeating what you have already mastered.' },
];

// ─── SUB-COMPONENTS ────────────────────────────────────────────────────────

function WeightBadge({ weight }: { weight: string }) {
  const map: Record<string, string> = {
    'Very High': 'bg-red-100 text-red-700',
    'High':      'bg-amber-100 text-amber-700',
    'Medium':    'bg-green-100 text-green-700',
  };
  return (
    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${map[weight] ?? 'bg-gray-100 text-gray-600'}`}>
      {weight}
    </span>
  );
}

function SyllabusAccordion() {
  const [open, setOpen] = useState<string | null>('Linear Algebra');

  return (
    <div className="space-y-10">
      {syllabus.map((paper) => {
        const isBlue = paper.color === 'blue';
        return (
          <div key={paper.paper}>
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold mb-4 ${isBlue ? 'bg-blue-600 text-white' : 'bg-indigo-600 text-white'}`}>
              {paper.paper}
            </div>
            <div className="space-y-2">
              {paper.units.map((unit) => {
                const isOpen = open === unit.title;
                return (
                  <div
                    key={unit.title}
                    className={`border rounded-xl overflow-hidden transition-all ${isOpen ? (isBlue ? 'border-blue-300 shadow-md' : 'border-indigo-300 shadow-md') : 'border-gray-200'}`}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : unit.title)}
                      className="w-full flex items-center justify-between p-4 text-left gap-3"
                    >
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="font-semibold text-gray-900 text-sm">{unit.title}</span>
                        <WeightBadge weight={unit.weight} />
                        <span className="text-xs text-gray-400">PYQ: {unit.pyqFreq}</span>
                      </div>
                      {isOpen
                        ? <ChevronUp size={16} className={isBlue ? 'text-blue-600 shrink-0' : 'text-indigo-600 shrink-0'} />
                        : <ChevronDown size={16} className="text-gray-400 shrink-0" />}
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28 }}
                          className="overflow-hidden"
                        >
                          <div className={`px-4 pb-4 pt-1 ${isBlue ? 'bg-blue-50' : 'bg-indigo-50'} border-t border-gray-100`}>
                            <p className="text-gray-600 text-xs leading-relaxed mb-3">{unit.topics}</p>
                            <div className={`flex items-start gap-2 p-3 rounded-lg ${isBlue ? 'bg-blue-100' : 'bg-indigo-100'}`}>
                              <AlertCircle size={14} className={`${isBlue ? 'text-blue-600' : 'text-indigo-600'} mt-0.5 shrink-0`} />
                              <p className={`text-xs font-medium ${isBlue ? 'text-blue-800' : 'text-indigo-800'}`}>
                                Teacher's Note: {unit.teacherNote}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {faqs.map((faq, i) => (
        <div key={i} className={`border rounded-xl overflow-hidden transition-all ${open === i ? 'border-blue-300 shadow-md' : 'border-gray-200'}`}>
          <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left gap-4">
            <span className={`font-semibold text-sm ${open === i ? 'text-blue-700' : 'text-gray-800'}`}>{faq.q}</span>
            {open === i ? <ChevronUp size={16} className="text-blue-600 shrink-0" /> : <ChevronDown size={16} className="text-gray-400 shrink-0" />}
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28 }} className="overflow-hidden">
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

export default function MathsOptional() {
  const [activeSection, setActiveSection] = useState<'syllabus' | 'method' | 'pyq' | 'books'>('syllabus');

  const tabs = [
    { key: 'syllabus' as const, label: 'Complete Syllabus'   },
    { key: 'method'   as const, label: 'Teaching Method'     },
    { key: 'pyq'      as const, label: 'PYQ Bank'            },
    { key: 'books'    as const, label: 'Recommended Books'   },
  ];

  return (
    <div className="min-h-screen">

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #60a5fa 0%, transparent 50%), radial-gradient(circle at 80% 20%, #818cf8 0%, transparent 40%)' }} />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-block bg-white/10 border border-white/20 text-white/80 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                Maths Optional — UPSC Civil Services
              </span>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
                UPSC Maths Optional —<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                  Taught by an Expert
                </span>
                <br />Who Has Lived This Subject.
              </h1>
              <p className="text-white/70 text-base leading-relaxed mb-8 max-w-lg">
                Learn Mathematics Optional from a teacher who has spent over a decade teaching exclusively for UPSC —
                analysing every paper, understanding every examiner pattern, and guiding hundreds of students to scores above 280.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="group bg-white text-blue-700 hover:bg-blue-50">
                    Book a Free Demo Class
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </Button>
                </Link>
                <a href="#pyq-section">
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    <Download size={16} className="mr-2" />
                    Download Free PYQs
                  </Button>
                </a>
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
                { val: '300+',      label: 'Average Score Achievable',       sub: 'With complete preparation'          },
                { val: '20+ Years', label: 'PYQs Analysed & Classified',    sub: '2000 – 2024, topic-wise'            },
                { val: '2 Papers',  label: '18 Topics — One Teacher',        sub: 'No split faculty, no hand-offs'     },
                { val: '100%',      label: 'Personal Answer Feedback',       sub: 'Teacher-evaluated, not auto-graded' },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white/10 border border-white/15 backdrop-blur-sm rounded-2xl p-5"
                >
                  <div className="text-2xl font-bold text-white mb-1">{s.val}</div>
                  <div className="text-blue-200 text-xs font-semibold mb-1">{s.label}</div>
                  <div className="text-white/40 text-xs">{s.sub}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 30C1200 60 960 0 720 30C480 60 240 0 0 30L0 60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── WHO SHOULD CHOOSE ──────────────────────────────────────────────── */}
      <Section className="bg-white pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">Is This Right for You?</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-5">Who Should Choose Maths Optional?</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Maths Optional is not for everyone — but for the right candidate, it is the most reliable
              route to a score above 290 in UPSC Mains. Here is how to know if you are that candidate.
            </p>

            <div className="space-y-4">
              {[
                { yes: true,  text: 'You studied Mathematics at BSc, B.Tech, or equivalent level' },
                { yes: true,  text: 'You are comfortable with abstract reasoning and formal proofs' },
                { yes: true,  text: 'You want an objective optional where examiner bias is minimal' },
                { yes: true,  text: 'You enjoy problem-solving and can practice daily for 6 months' },
                { yes: true,  text: 'You want high, predictable scores rather than variable marks' },
                { yes: false, text: 'You dislike mathematics and are choosing it only for its reputation' },
                { yes: false, text: 'You expect to "cover" the syllabus without consistent practice' },
                { yes: false, text: 'You are unwilling to spend time on answer writing from early on' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${item.yes ? 'bg-green-100' : 'bg-red-100'}`}>
                    <span className={`text-xs font-bold ${item.yes ? 'text-green-600' : 'text-red-500'}`}>{item.yes ? '✓' : '✗'}</span>
                  </div>
                  <p className={`text-sm ${item.yes ? 'text-gray-700' : 'text-gray-400'}`}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Teacher note card */}
          <div className="space-y-5">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-8">
              <div className="text-5xl font-serif opacity-30 leading-none mb-3">"</div>
              <p className="text-white/85 text-sm leading-7 mb-6 italic">
                The most common misconception about Maths Optional is that it requires an engineering degree.
                It does not. It requires logical aptitude and the willingness to practice daily.
                Some of my best-performing students have come from commerce and humanities backgrounds.
                What set them apart was not their degree — it was that they genuinely liked the subject
                and were willing to understand it, not just memorise it.
              </p>
              <div>
                <p className="font-bold text-white text-sm">Maths Optional Teacher</p>
                <p className="text-blue-200 text-xs">The CSE Circle</p>
              </div>
            </div>

            {/* Score context */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
              <h4 className="font-bold text-gray-900 text-sm mb-4">Realistic Score Targets</h4>
              <div className="space-y-3">
                {[
                  { label: 'Complete coverage + consistent answer writing', range: '280–310', width: 'w-4/5',  color: 'bg-blue-600' },
                  { label: 'Selective coverage + moderate practice',         range: '240–270', width: 'w-3/5',  color: 'bg-blue-400' },
                  { label: 'Incomplete coverage without answer writing',      range: '180–230', width: 'w-2/5',  color: 'bg-blue-200' },
                ].map((s, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>{s.label}</span>
                      <span className="font-bold text-gray-800">{s.range}</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full">
                      <div className={`h-2 rounded-full ${s.color} ${s.width}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── MAIN TABBED SECTION ────────────────────────────────────────────── */}
      <Section className="bg-gray-50">
        {/* Tab Nav */}
        <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-px mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveSection(tab.key)}
              className={`px-5 py-2.5 text-sm font-semibold rounded-t-lg transition-all ${
                activeSection === tab.key
                  ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={activeSection} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.28 }}>

            {/* SYLLABUS TAB */}
            {activeSection === 'syllabus' && (
              <div>
                <div className="flex flex-wrap gap-4 mb-8">
                  {[
                    { label: 'Very High Weightage', color: 'bg-red-100 text-red-700' },
                    { label: 'High Weightage',      color: 'bg-amber-100 text-amber-700' },
                    { label: 'Medium Weightage',    color: 'bg-green-100 text-green-700' },
                  ].map((b) => (
                    <span key={b.label} className={`text-xs font-bold px-3 py-1 rounded-full ${b.color}`}>{b.label}</span>
                  ))}
                  <span className="text-xs text-gray-400 self-center">PYQ frequency shown per topic (out of last 10 papers)</span>
                </div>
                <SyllabusAccordion />
              </div>
            )}

            {/* METHOD TAB */}
            {activeSection === 'method' && (
              <div>
                <p className="text-gray-500 text-sm mb-8 max-w-2xl">
                  This is not a general pedagogy borrowed from school teaching or university courses.
                  Every stage below was built specifically for UPSC Maths Optional — and refined over
                  10+ years of teaching the same examination.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {methodology.map((m, i) => {
                    const Icon = m.icon;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.07 }}
                        className="flex gap-5 p-6 bg-white rounded-xl border border-gray-100 border-l-4 border-l-blue-600 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="shrink-0">
                          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                            <Icon size={18} className="text-white" />
                          </div>
                        </div>
                        <div>
                          <div className="text-xs font-bold text-blue-300 mb-1">{m.step}</div>
                          <h4 className="font-bold text-gray-900 text-sm mb-2">{m.title}</h4>
                          <p className="text-gray-500 text-xs leading-relaxed">{m.desc}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* PYQ TAB */}
            {activeSection === 'pyq' && (
              <div id="pyq-section">
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">UPSC Maths Optional — Previous Year Questions</h3>
                  <p className="text-gray-500 text-sm max-w-2xl">
                    20+ years of UPSC Maths Optional PYQs, classified topic-wise for both Paper I and Paper II.
                    Free download available for 2017–2020. Model answers and full analysis for enrolled students.
                  </p>
                </div>
                <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-900 text-white text-xs">
                        <th className="text-left p-4 font-semibold">Year</th>
                        <th className="text-left p-4 font-semibold">Paper I — Key Topics</th>
                        <th className="text-left p-4 font-semibold">Paper II — Key Topics</th>
                        <th className="text-center p-4 font-semibold">Access</th>
                        <th className="text-center p-4 font-semibold">Download</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pyqYears.map((row, i) => (
                        <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50 transition-colors`}>
                          <td className="p-4">
                            <span className="bg-blue-900 text-blue-200 text-xs font-bold px-2.5 py-1 rounded">{row.year}</span>
                          </td>
                          <td className="p-4 text-gray-600 text-xs">{row.p1Topics}</td>
                          <td className="p-4 text-gray-600 text-xs">{row.p2Topics}</td>
                          <td className="p-4 text-center">
                            <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${row.free ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                              {row.free ? 'Free' : 'Enrolled'}
                            </span>
                          </td>
                          <td className="p-4 text-center">
                            <button className={`text-xs font-semibold flex items-center gap-1 mx-auto transition-colors ${row.free ? 'text-blue-600 hover:text-blue-800' : 'text-gray-300 cursor-not-allowed'}`} disabled={!row.free}>
                              <Download size={14} />
                              {row.free ? 'Download' : 'Enrol to Access'}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact">
                    <Button className="bg-gradient-to-r from-blue-600 to-blue-800">
                      Enrol to Access All Years + Model Answers
                    </Button>
                  </Link>
                  <Button variant="outline">
                    <Download size={16} className="mr-2" />
                    Download All Free PYQs (2017–2020)
                  </Button>
                </div>
              </div>
            )}

            {/* BOOKS TAB */}
            {activeSection === 'books' && (
              <div>
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Recommended Books — Maths Optional</h3>
                  <p className="text-gray-500 text-sm max-w-2xl">
                    A curated, topic-wise reading list from the teacher. Use The CSE Circle notes as your primary reference —
                    standard texts supplement specific topics as directed by your teacher.
                  </p>
                </div>
                <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-900 text-white text-xs">
                        <th className="text-left p-4 font-semibold">Topic</th>
                        <th className="text-left p-4 font-semibold">Recommended Book / Author</th>
                        <th className="text-left p-4 font-semibold">Best Used For</th>
                        <th className="text-center p-4 font-semibold">Priority</th>
                      </tr>
                    </thead>
                    <tbody>
                      {books.map((b, i) => (
                        <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                          <td className="p-4 font-semibold text-gray-800 text-xs">{b.topic}</td>
                          <td className="p-4 text-gray-600 text-xs">{b.author}</td>
                          <td className="p-4 text-gray-500 text-xs">{b.use}</td>
                          <td className="p-4 text-center">
                            <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${b.must ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-500'}`}>
                              {b.must ? 'Must Read' : 'Reference'}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-400 text-xs mt-4">
                  * The CSE Circle teacher-written notes serve as the primary study material. Books above are used for additional depth on specific topics as directed.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </Section>

      {/* ── TESTIMONIALS ───────────────────────────────────────────────────── */}
      <Section className="bg-white">
        <SectionTitle
          title="Maths Optional — Student Results"
          subtitle="Real students. Real ranks. Real accounts of what expert teaching produced."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="bg-white border border-gray-100 border-t-4 border-t-blue-600 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, j) => <Star key={j} size={12} className="text-amber-400 fill-amber-400" />)}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed italic mb-5">"{t.text}"</p>
              <div className="border-t border-gray-100 pt-4 flex items-center justify-between flex-wrap gap-2">
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-blue-600 text-xs font-semibold">{t.rank}</p>
                </div>
                <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">{t.score}</span>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/results">
            <Button variant="outline" size="lg">View All Maths Optional Results →</Button>
          </Link>
        </div>
      </Section>

      {/* ── 6-MONTH STRATEGY ───────────────────────────────────────────────── */}
      <Section className="bg-gradient-to-br from-blue-50 to-white">
        <SectionTitle
          title="6-Month Preparation Roadmap"
          subtitle="The teacher's recommended month-by-month strategy for Maths Optional — from first day to exam day."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { month: 'Month 1–2', phase: 'Foundation', color: 'blue', units: 'Linear Algebra, Calculus, Analytic Geometry', focus: 'Concept building from first principles. PYQ reading (without solving) to understand examiner expectations. 3 answered problems per session.', tip: 'Do not skip any step in Linear Algebra — it is the most frequently tested unit.' },
            { month: 'Month 3',   phase: 'Paper I Completion', color: 'blue', units: 'ODE, Dynamics & Statics, Vector Analysis', focus: 'Complete Paper I. Begin PYQ solving for topics covered. Start timed answer writing — 3 full written answers per week submitted for feedback.', tip: 'ODE Laplace transform questions carry 10–15 marks in most recent papers.' },
            { month: 'Month 4',   phase: 'Paper II Core', color: 'indigo', units: 'Abstract Algebra, Real Analysis, Complex Analysis', focus: 'Hardest topics. Slow, deep teaching. Daily 1-hour problem sessions. Feedback cycle on every submission. No shortcuts here.', tip: 'Abstract Algebra will either be your strongest or weakest topic. Treat it with respect.' },
            { month: 'Month 5',   phase: 'Paper II Completion', color: 'indigo', units: 'PDE, Numerical Analysis, Statistics & LPP, Mechanics', focus: 'Cover remaining Paper II units. First sectional mock tests. Begin full paper mock attempts on weekends.', tip: 'Statistics and LPP have very high marks-to-effort ratios. Prioritise these for quick gains.' },
            { month: 'Month 6',   phase: 'Integration & Polish', color: 'blue', units: 'Full Syllabus Revision + Mock Tests', focus: 'Two full-length mock papers per week under timed conditions. Teacher reviews every paper. Final answer writing polish. Examiner-strategy sessions.', tip: 'By this point, your score will be determined by presentation and paper-management — not just knowledge.' },
            { month: 'Exam Week', phase: 'Final Preparation', color: 'gray', units: 'High-Frequency PYQ Topics Only', focus: 'Only high-frequency PYQ topics. Short notes revision. No new topics. Paper attempt sequence planning. Rest and mental preparation.', tip: 'Trust your preparation. The exam rewards students who write confidently, not those who crammed the night before.' },
          ].map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${m.color === 'gray' ? 'bg-gray-100 text-gray-600' : m.color === 'indigo' ? 'bg-indigo-100 text-indigo-700' : 'bg-blue-100 text-blue-700'}`}>{m.month}</span>
                <span className="text-xs text-gray-400 font-semibold uppercase tracking-wide">{m.phase}</span>
              </div>
              <p className="text-xs font-bold text-gray-800 mb-2">{m.units}</p>
              <p className="text-gray-500 text-xs leading-relaxed mb-4">{m.focus}</p>
              <div className="bg-amber-50 border border-amber-100 rounded-lg p-3">
                <p className="text-amber-800 text-xs font-medium">⚡ {m.tip}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── FAQ ────────────────────────────────────────────────────────────── */}
      <Section className="bg-white">
        <SectionTitle title="Frequently Asked Questions" subtitle="Everything you want to know about Maths Optional — answered by the teacher." />
        <FaqAccordion />
      </Section>

      {/* ── FINAL CTA ──────────────────────────────────────────────────────── */}
      <Section className="bg-gradient-to-r from-blue-600 to-blue-900 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Learning Maths Optional the Right Way.</h2>
            <p className="text-blue-100 text-base mb-2">Attend a free demo class. Meet the teacher. Ask every question you have.</p>
            <p className="text-blue-200 text-sm mb-8">No commitment. No fee. Just one class — so you can decide for yourself.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary">Book a Free Demo Class</Button>
              </Link>
              <Link to="/teachers#maths-teacher">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Meet Your Maths Teacher First
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>

    </div>
  );
}