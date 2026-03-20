import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, CheckCircle, ChevronDown, ChevronUp,
  BookOpen, PenTool, Target, TrendingUp,
  Download, Star, AlertCircle, Lightbulb, Users, Layers
} from 'lucide-react';
import Button from '../components/Button';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';

// ─── DATA ──────────────────────────────────────────────────────────────────

const syllabus = [
  {
    paper: 'Paper I — Fundamentals of Sociology',
    color: 'indigo',
    units: [
      {
        title: 'Sociology — The Discipline',
        weight: 'Medium',
        topics: 'Modernity and social changes in Europe. Emergence of Sociology. Scope and subject matter. Comparison with social anthropology and social philosophy. Sociology and common sense.',
        pyqFreq: '6/10 years',
        teacherNote: 'Start here conceptually — it gives you a framework for everything that follows. Questions from this unit are typically 10-mark introduction-style answers.',
      },
      {
        title: 'Sociology as Science',
        weight: 'High',
        topics: 'Science and scientific method. Positivism and its critique. Anti-positivism. Post-positivism. Fact, value and objectivity in social research.',
        pyqFreq: '7/10 years',
        teacherNote: 'The positivism debate — Comte vs Weber vs contemporary critics — is a recurring 20-mark question area. Understand it, do not just memorise it.',
      },
      {
        title: 'Research Methods & Analysis',
        weight: 'High',
        topics: 'Qualitative and quantitative methods. Participant and non-participant observation. Interview — structured and unstructured. Questionnaire and schedule. Case study. Content analysis. Data analysis and interpretation.',
        pyqFreq: '8/10 years',
        teacherNote: 'Applied methodology questions are increasingly common. I teach these through actual Indian sociological studies — NFHS, NSSO, ethnographic examples.',
      },
      {
        title: 'Sociological Thinkers',
        weight: 'Very High',
        topics: 'Auguste Comte — Positivism. Herbert Spencer — Social Darwinism & evolution. Karl Marx — Historical materialism, alienation, class struggle. Emile Durkheim — Social facts, division of labour, suicide, religion. Max Weber — Social action, ideal types, authority, bureaucracy, Protestant ethic. Talcott Parsons — Social system, pattern variables. Robert K. Merton — Manifest & latent functions, anomie, reference groups. George Herbert Mead — Self and identity.',
        pyqFreq: '10/10 years',
        teacherNote: 'Every paper has thinker questions. I teach each as an intellectual biography — the problem they were solving, the era they lived in, and exactly how to contrast them with each other in a 20-mark answer.',
      },
      {
        title: 'Stratification & Mobility',
        weight: 'Very High',
        topics: 'Concepts — equality, inequality, hierarchy, exclusion. Theories of stratification — Marx, Weber, Davis & Moore. Types: caste, class, race, gender. Social mobility — types, open and closed systems.',
        pyqFreq: '9/10 years',
        teacherNote: 'Overlaps heavily with GS Paper I (Indian Society) and GS Paper IV (Ethics). One of the highest-return units in the entire optional.',
      },
      {
        title: 'Works & Economic Life',
        weight: 'Medium',
        topics: 'Social organisation of work. Formal and informal economies. Labour market and society. Industrial capitalism and its social consequences.',
        pyqFreq: '6/10 years',
        teacherNote: 'Connect to contemporary gig economy, platform work, and informal labour debates in India — these appear regularly in recent papers.',
      },
      {
        title: 'Politics & Society',
        weight: 'High',
        topics: 'Sociological theories of power — Marx, Weber, Foucault. Concepts: power, authority, legitimacy. Nation, state, citizenship, democracy, civil society, ideology. Protest, agitation, social movements.',
        pyqFreq: '7/10 years',
        teacherNote: 'Foucault on power is increasingly relevant in recent papers. Do not skip this — most students do, which makes it a scoring opportunity.',
      },
      {
        title: 'Religion & Society',
        weight: 'High',
        topics: 'Sociological theories of religion — Durkheim, Weber, Marx. Types and social functions of religion. Magic, religion and science. Religion in modern societies. Secularisation.',
        pyqFreq: '7/10 years',
        teacherNote: 'Durkheim\'s theory of religion is a favourite 20-mark area. Weber\'s Protestant Ethic connects beautifully to capitalism questions.',
      },
      {
        title: 'Systems of Kinship',
        weight: 'Medium',
        topics: 'Family, household, marriage — types and forms. Lineage and descent. Patriarchy and feminist perspectives. Reproduction, family, and social change.',
        pyqFreq: '6/10 years',
        teacherNote: 'Questions here often bring in feminist sociology. A strong feminist lens across all kinship answers earns you differentiation marks.',
      },
    ],
  },
  {
    paper: 'Paper II — Indian Society: Structure and Change',
    color: 'purple',
    units: [
      {
        title: 'Introducing Indian Society',
        weight: 'High',
        topics: 'Perspectives on studying Indian society: G.S. Ghurye (indological), M.N. Srinivas (field view), Louis Dumont (structuralist), A.R. Desai (Marxist).',
        pyqFreq: '8/10 years',
        teacherNote: 'Ghurye vs Srinivas vs Desai is a guaranteed question area. Know each thinker\'s methodology, key concepts, and their critics.',
      },
      {
        title: 'Social Structure',
        weight: 'Very High',
        topics: 'Rural and agrarian social structure. Land tenure systems, land reforms, Green Revolution, agrarian class structure. Caste system — perspectives, features, untouchability, mobility, dimensions of change. Industrial class structure. Middle classes in India.',
        pyqFreq: '10/10 years',
        teacherNote: 'This is Paper II\'s highest-weightage area. Caste questions appear in every paper. I dedicate 4 full classes to this unit alone.',
      },
      {
        title: 'Tribal Communities',
        weight: 'High',
        topics: 'Defining tribal communities. Geographical spread. Colonial policies. Issues of integration and autonomy. Ethnicity and identity.',
        pyqFreq: '7/10 years',
        teacherNote: 'Tribal issues connect to current affairs strongly — displacement, forest rights, PVTG policies. Contemporary integration is the key to scoring here.',
      },
      {
        title: 'Social Changes in India',
        weight: 'Very High',
        topics: 'Visions of social change — planning, mixed economy. Constitution, law and social change. Education and social change. Industrialisation, urbanisation, and social change.',
        pyqFreq: '9/10 years',
        teacherNote: 'Constitutional morality questions are increasingly appearing. Connect B.R. Ambedkar\'s vision to current debates — reservation, personal law reform, LGBTQ rights.',
      },
      {
        title: 'Social Movements in India',
        weight: 'Very High',
        topics: 'Peasants and farmers movements. Women\'s movement. Backward class and Dalit movements. Environmental movements. Ethnicity and identity movements. Workers\' and trade union movements.',
        pyqFreq: '9/10 years',
        teacherNote: 'The most current-affairs-connected unit. I maintain a running list of recent movements and their sociological classification — updated every month.',
      },
      {
        title: 'Population Dynamics',
        weight: 'Medium',
        topics: 'Population size, growth, composition and distribution. Fertility, mortality and migration. Demographic transition. National Population Policy. Implications for development.',
        pyqFreq: '6/10 years',
        teacherNote: 'Data-rich answers score well here. NFHS-5 findings are directly applicable. I teach the demographic transition theory with Indian data overlaid.',
      },
      {
        title: 'Challenges of Social Transformation',
        weight: 'High',
        topics: 'Crisis of development — displacement, environmental problems. Human rights issues. Communalism, secularism, fundamentalism. Youth unrest. Family violence, domestic violence.',
        pyqFreq: '7/10 years',
        teacherNote: 'Communalism and secularism are politically sensitive in UPSC — answers must be analytical, not polemical. I teach a specific framework for this.',
      },
    ],
  },
];

const answerFramework = [
  { part: 'Introduction',         marks: '3–4 lines', icon: '①', desc: 'Define the key concept. Name 1–2 thinkers most associated with it. State your argument — what you will demonstrate in this answer. A strong introduction signals immediately that you know what you are talking about.' },
  { part: 'Theoretical Framework', marks: '6–8 lines', icon: '②', desc: 'Present 2–3 distinct theoretical perspectives. The best answers use contrast — how Marx sees the issue differently from Durkheim, or how Weber adds nuance to Parsons. Show their relationships, not just their definitions.' },
  { part: 'Empirical Evidence',    marks: '6–8 lines', icon: '③', desc: 'Ground your theory in reality. Use specific Indian examples — SECC 2011, NFHS-5, committee reports (Mandal, Sachchar, Punchhi), case studies. Statistics from official sources carry significant weight.' },
  { part: 'Contemporary Relevance',marks: '3–4 lines', icon: '④', desc: 'Connect the concept to something happening now. This is where Theory + Today pays off. A student who links Weber\'s bureaucracy to PM-JAY implementation demonstrates thinking that earns bonus marks.' },
  { part: 'Critical Evaluation',   marks: '2–3 lines', icon: '⑤', desc: 'Every theory has critics and limitations. Acknowledge them briefly. This signals intellectual maturity — the examiner knows you are not just parroting a textbook.' },
  { part: 'Conclusion',            marks: '2 lines',   icon: '⑥', desc: 'One synthesis sentence. One sentence on implications for contemporary India or for sociology as a discipline. Short, clear, memorable — do not introduce new ideas here.' },
];

const pyqYears = [
  { year: '2024', p1Topics: 'Sociological Thinkers, Stratification, Science',     p2Topics: 'Social Movements, Caste System, Social Change', free: false },
  { year: '2023', p1Topics: 'Durkheim, Weber, Research Methods',                  p2Topics: 'Tribal Communities, Agrarian Structure, Urbanisation', free: false },
  { year: '2022', p1Topics: 'Marx, Parsons, Stratification',                      p2Topics: 'Caste, Social Movements, Population', free: false },
  { year: '2021', p1Topics: 'Mead, Merton, Power & Society',                      p2Topics: 'Ghurye, Srinivas, Indian Kinship', free: false },
  { year: '2020', p1Topics: 'Durkheim Religion, Positivism, Kinship',             p2Topics: 'Dalit Movement, Agrarian Class, Education', free: true  },
  { year: '2019', p1Topics: 'Weber Bureaucracy, Research Methods, Stratification', p2Topics: 'Women\'s Movement, Tribal Identity, Social Change', free: true  },
  { year: '2018', p1Topics: 'Marx Alienation, Comte, Power & Authority',          p2Topics: 'Caste Mobility, Agrarian Structure, Communalism', free: true  },
  { year: '2017', p1Topics: 'Parsons AGIL, Merton, Kinship Systems',              p2Topics: 'Peasant Movements, Population, Displacement', free: true  },
];

const books = [
  { topic: 'Sociological Theory (General)',   author: 'Anthony Giddens — Sociology',                   use: 'Conceptual Foundation',   must: true  },
  { topic: 'Classical Thinkers',              author: 'George Ritzer — Classical Sociological Theory',  use: 'Thinker Deep Dives',     must: true  },
  { topic: 'Research Methods',               author: 'C.N. Shankar Rao — Research Methods',            use: 'Methods + Application',  must: true  },
  { topic: 'Indian Society (General)',        author: 'M.N. Srinivas — Social Change in Modern India', use: 'Core Reading Paper II',  must: true  },
  { topic: 'Indian Society (Structural)',     author: 'D.N. Majumdar — Races and Cultures of India',   use: 'Social Structure',       must: false },
  { topic: 'Caste',                          author: 'Louis Dumont — Homo Hierarchicus',               use: 'Caste Theory (select)',  must: true  },
  { topic: 'Social Movements',               author: 'A.R. Desai — Social Background of Indian Nationalism', use: 'Movements',     must: true  },
  { topic: 'Agrarian Society',               author: 'Daniel Thorner — Agrarian Prospect in India',   use: 'Agrarian Structure',     must: false },
  { topic: 'Gender & Feminist Sociology',    author: 'Sylvia Walby — Theorizing Patriarchy',          use: 'Gender Theory',         must: false },
  { topic: 'Answer Writing (Practice)',      author: 'CSE Circle Teacher Notes + Model Answers',      use: 'Primary Reference',     must: true  },
];

const testimonials = [
  { name: 'Priya Sharma',  rank: 'IPS — AIR 89, CSE 2023', score: '298 / 500', text: 'What my teacher did that nobody else had done was make me stop treating theory as information to memorise and start treating it as a tool to use. My second-attempt score was 80 marks higher than my first. That is entirely a teaching outcome.' },
  { name: 'Sneha Iyer',    rank: 'IFS — AIR 203, CSE 2023', score: '275 / 500', text: 'By Month 3, my teacher could predict — correctly — exactly which type of question I would underperform on and why. That level of individual attention is not something you find on any platform that treats teaching as content delivery.' },
  { name: 'Meera Nair',    rank: 'IRS — AIR 134, CSE 2023', score: '283 / 500', text: 'The "Theory + Today" sessions changed how I read the newspaper. Every morning I could connect current events to the sociological framework we had studied. By exam day, answering questions felt natural — because I had been practising sociological thinking every single day.' },
  { name: 'Ananya Bose',   rank: 'IAS — AIR 112, CSE 2022', score: '291 / 500', text: 'I had a science background and was genuinely worried Sociology Optional would feel alien. My teacher\'s approach — starting with contemporary examples and working backwards to theory — made every concept feel intuitive. I finished the course feeling like a sociologist, not like someone who had mugged up definitions.' },
];

const faqs = [
  { q: 'How long does it take to prepare Sociology Optional?', a: 'A focused aspirant can cover the full syllabus in 4–5 months. Paper I (Sociological Theory and Research Methods) requires 2.5–3 months due to the density of thinkers and concepts. Paper II (Indian Society) is more accessible and can be covered in 1.5–2 months. The significant overlap with GS Paper I effectively reduces your total preparation burden.' },
  { q: 'What is a realistic score in Sociology Optional?', a: 'Well-prepared candidates consistently score 270–300. Scores above 290 require strong analytical writing, consistent current affairs integration, and thorough thinker coverage. Our teacher\'s 6-part answer framework is specifically designed to push students from 250 to 280+ through structural improvement alone.' },
  { q: 'Does Sociology Optional overlap with General Studies?', a: 'Substantially, yes. Paper II of Sociology directly covers topics from GS Paper I: Urbanisation, Population Dynamics, Women and Society, Tribal Issues, Social Movements, Caste, and Class. GS Paper IV (Ethics) also benefits from the sociological lens. You are not studying Sociology Optional in addition to GS — you are studying it alongside GS, with significant mutual reinforcement.' },
  { q: 'Is Sociology Optional good for candidates with a science or engineering background?', a: 'Some of our highest-scoring Sociology Optional students have engineering backgrounds. Science students often bring strong analytical skills and structured writing habits that translate extremely well to Sociology. The teacher builds conceptual foundations from the beginning — no prior humanities background is assumed.' },
  { q: 'How are current affairs integrated into Sociology Optional preparation?', a: 'Our teacher runs dedicated monthly current affairs integration sessions — bringing recent events, government reports, and social phenomena directly into the theoretical frameworks studied that week. You never need to treat current affairs as a separate Sociology Optional module — it is woven into every class.' },
  { q: 'What is the most common reason Sociology Optional students underperform?', a: 'Descriptive answers, not analytical ones. Students who can recite Durkheim\'s definition of social fact but cannot use it to analyse a contemporary Indian question will always score below 250. Our teacher\'s approach — building analytical thinking from Week 1 through the 6-part framework — is specifically designed to prevent this.' },
];

// ─── SUB-COMPONENTS ────────────────────────────────────────────────────────

function WeightBadge({ weight }: { weight: string }) {
  const map: Record<string, string> = { 'Very High': 'bg-red-100 text-red-700', 'High': 'bg-amber-100 text-amber-700', 'Medium': 'bg-green-100 text-green-700' };
  return <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${map[weight] ?? 'bg-gray-100 text-gray-600'}`}>{weight}</span>;
}

function SyllabusAccordion() {
  const [open, setOpen] = useState<string | null>('Sociological Thinkers');
  return (
    <div className="space-y-10">
      {syllabus.map((paper) => {
        const isIndigo = paper.color === 'indigo';
        return (
          <div key={paper.paper}>
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold mb-4 ${isIndigo ? 'bg-indigo-600 text-white' : 'bg-purple-600 text-white'}`}>{paper.paper}</div>
            <div className="space-y-2">
              {paper.units.map((unit) => {
                const isOpen = open === unit.title;
                return (
                  <div key={unit.title} className={`border rounded-xl overflow-hidden transition-all ${isOpen ? (isIndigo ? 'border-indigo-300 shadow-md' : 'border-purple-300 shadow-md') : 'border-gray-200'}`}>
                    <button onClick={() => setOpen(isOpen ? null : unit.title)} className="w-full flex items-center justify-between p-4 text-left gap-3">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="font-semibold text-gray-900 text-sm">{unit.title}</span>
                        <WeightBadge weight={unit.weight} />
                        <span className="text-xs text-gray-400">PYQ: {unit.pyqFreq}</span>
                      </div>
                      {isOpen ? <ChevronUp size={16} className={isIndigo ? 'text-indigo-600 shrink-0' : 'text-purple-600 shrink-0'} /> : <ChevronDown size={16} className="text-gray-400 shrink-0" />}
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28 }} className="overflow-hidden">
                          <div className={`px-4 pb-4 pt-1 ${isIndigo ? 'bg-indigo-50' : 'bg-purple-50'} border-t border-gray-100`}>
                            <p className="text-gray-600 text-xs leading-relaxed mb-3">{unit.topics}</p>
                            <div className={`flex items-start gap-2 p-3 rounded-lg ${isIndigo ? 'bg-indigo-100' : 'bg-purple-100'}`}>
                              <AlertCircle size={14} className={`${isIndigo ? 'text-indigo-600' : 'text-purple-600'} mt-0.5 shrink-0`} />
                              <p className={`text-xs font-medium ${isIndigo ? 'text-indigo-800' : 'text-purple-800'}`}>Teacher's Note: {unit.teacherNote}</p>
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
        <div key={i} className={`border rounded-xl overflow-hidden transition-all ${open === i ? 'border-indigo-300 shadow-md' : 'border-gray-200'}`}>
          <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left gap-4">
            <span className={`font-semibold text-sm ${open === i ? 'text-indigo-700' : 'text-gray-800'}`}>{faq.q}</span>
            {open === i ? <ChevronUp size={16} className="text-indigo-600 shrink-0" /> : <ChevronDown size={16} className="text-gray-400 shrink-0" />}
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

export default function SociologyOptional() {
  const [activeSection, setActiveSection] = useState<'syllabus' | 'framework' | 'pyq' | 'books'>('syllabus');

  const tabs = [
    { key: 'syllabus'   as const, label: 'Complete Syllabus'   },
    { key: 'framework'  as const, label: 'Answer Framework'    },
    { key: 'pyq'        as const, label: 'PYQ Bank'            },
    { key: 'books'      as const, label: 'Recommended Books'   },
  ];

  return (
    <div className="min-h-screen">

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #a78bfa 0%, transparent 50%), radial-gradient(circle at 80% 20%, #c084fc 0%, transparent 40%)' }} />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-block bg-white/10 border border-white/20 text-white/80 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                Sociology Optional — UPSC Civil Services
              </span>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
                UPSC Sociology Optional —<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">
                  Learn to Think Like
                </span>
                <br />a Sociologist.
              </h1>
              <p className="text-white/70 text-base leading-relaxed mb-8 max-w-lg">
                Our Sociology teacher does not teach you theory to memorise — they teach you a lens
                to see the world through. By the time you write your exam, sociological thinking
                will be a habit, not a technique.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="group bg-white text-indigo-700 hover:bg-indigo-50">
                    Book a Free Demo Class
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </Button>
                </Link>
                <a href="#pyq-section">
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    <Download size={16} className="mr-2" /> Download Free PYQs
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Right — stat cards */}
            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="grid grid-cols-2 gap-4">
              {[
                { val: '280–310',   label: 'Consistent Score Target',       sub: 'With structured preparation'          },
                { val: '20+ Years', label: 'PYQs Analysed & Theme-Mapped',  sub: '2000–2024, topic-wise'                },
                { val: '2 Papers',  label: '16 Units — One Teacher',         sub: 'No split faculty, no hand-offs'       },
                { val: '6-Part',    label: 'Answer Framework Taught Week 1', sub: 'Structure that earns marks, not just points' },
              ].map((s, i) => (
                <motion.div key={i} whileHover={{ scale: 1.03 }} className="bg-white/10 border border-white/15 backdrop-blur-sm rounded-2xl p-5">
                  <div className="text-2xl font-bold text-white mb-1">{s.val}</div>
                  <div className="text-indigo-200 text-xs font-semibold mb-1">{s.label}</div>
                  <div className="text-white/40 text-xs">{s.sub}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

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
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2">Is This Right for You?</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-5">Who Should Choose Sociology Optional?</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Sociology Optional rewards students who can think analytically, write structurally,
              and connect theory to contemporary India. Here is how to know if you are that candidate.
            </p>
            <div className="space-y-4">
              {[
                { yes: true,  text: 'You enjoy reading about society, culture, and contemporary India' },
                { yes: true,  text: 'You have a social sciences, humanities, or political science background' },
                { yes: true,  text: 'You want an optional with significant GS Paper I overlap' },
                { yes: true,  text: 'You can write analytically — connecting concepts to examples' },
                { yes: true,  text: 'You follow current affairs and can integrate them into your answers' },
                { yes: true,  text: 'You prefer qualitative, interpretive thinking over mathematical precision' },
                { yes: false, text: 'You want to memorise definitions and reproduce them without analysis' },
                { yes: false, text: 'You are unwilling to engage with abstract theoretical concepts' },
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

          <div className="space-y-5">
            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white rounded-2xl p-8">
              <div className="text-5xl font-serif opacity-30 leading-none mb-3">"</div>
              <p className="text-white/85 text-sm leading-7 mb-6 italic">
                The most common reason Sociology Optional students score below 250 is not lack of knowledge —
                it is descriptive, not analytical, writing. They tell the examiner what Durkheim said.
                They do not use Durkheim to analyse the question. My entire programme is designed
                to build this one shift — from description to analysis — and it changes scores
                by 40–80 marks on its own.
              </p>
              <div>
                <p className="font-bold text-white text-sm">Sociology Optional Teacher</p>
                <p className="text-indigo-200 text-xs">The CSE Circle</p>
              </div>
            </div>

            {/* GS Overlap visual */}
            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6">
              <h4 className="font-bold text-gray-900 text-sm mb-4">GS Overlap — Sociology vs Other Optionals</h4>
              <div className="space-y-3">
                {[
                  { subject: 'Sociology Optional (Paper II)', overlap: 'Very High — GS I, GS IV', width: 'w-5/6', color: 'bg-indigo-600' },
                  { subject: 'History Optional',              overlap: 'High — GS I, Essay',      width: 'w-3/5', color: 'bg-indigo-400' },
                  { subject: 'Maths Optional',                overlap: 'Low — independent',      width: 'w-1/5', color: 'bg-indigo-200' },
                ].map((s, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs text-gray-500 mb-1"><span>{s.subject}</span><span className="font-semibold text-gray-700">{s.overlap}</span></div>
                    <div className="h-2 bg-gray-100 rounded-full"><div className={`h-2 rounded-full ${s.color} ${s.width}`} /></div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-3">Overlap means every study hour for Sociology Optional also improves your GS score.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── MAIN TABBED SECTION ────────────────────────────────────────────── */}
      <Section className="bg-gray-50">
        <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-px mb-10">
          {tabs.map((tab) => (
            <button key={tab.key} onClick={() => setActiveSection(tab.key)}
              className={`px-5 py-2.5 text-sm font-semibold rounded-t-lg transition-all ${activeSection === tab.key ? 'bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow' : 'text-gray-500 hover:text-gray-800'}`}>
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={activeSection} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.28 }}>

            {/* SYLLABUS */}
            {activeSection === 'syllabus' && (
              <div>
                <div className="flex flex-wrap gap-4 mb-8">
                  {[{ label: 'Very High Weightage', color: 'bg-red-100 text-red-700' }, { label: 'High Weightage', color: 'bg-amber-100 text-amber-700' }, { label: 'Medium Weightage', color: 'bg-green-100 text-green-700' }].map((b) => (
                    <span key={b.label} className={`text-xs font-bold px-3 py-1 rounded-full ${b.color}`}>{b.label}</span>
                  ))}
                  <span className="text-xs text-gray-400 self-center">PYQ frequency shown per unit (out of last 10 papers)</span>
                </div>
                <SyllabusAccordion />
              </div>
            )}

            {/* ANSWER FRAMEWORK */}
            {activeSection === 'framework' && (
              <div>
                <div className="mb-8 max-w-2xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">The 6-Part Answer Framework</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    This framework is taught from Week 1 and refined throughout the course.
                    It is what separates a 12-mark answer from a 17-mark answer on the same topic.
                    Every answer you write at The CSE Circle is evaluated against these six dimensions.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {answerFramework.map((part, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                      className="bg-white rounded-xl p-6 border border-gray-100 border-l-4 border-l-indigo-600 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className="text-3xl text-indigo-200 font-bold shrink-0 leading-none">{part.icon}</div>
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-bold text-gray-900 text-sm">{part.part}</h4>
                            <span className="text-xs bg-indigo-50 text-indigo-600 font-semibold px-2 py-0.5 rounded-full">{part.marks}</span>
                          </div>
                          <p className="text-gray-500 text-xs leading-relaxed">{part.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-8 bg-amber-50 border border-amber-100 rounded-xl p-6 max-w-2xl">
                  <div className="flex gap-3">
                    <Lightbulb size={18} className="text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-amber-800 text-sm mb-1">Teacher's Most Important Advice</p>
                      <p className="text-amber-700 text-xs leading-relaxed">
                        The single biggest mistake: spending 60% of your answer on theoretical description and only 20% on examples.
                        The examiner already knows the theories — they want to see your analytical application.
                        From Month 3 onwards, flip the ratio: more evidence, more contemporary connection, less theory recitation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* PYQ */}
            {activeSection === 'pyq' && (
              <div id="pyq-section">
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">UPSC Sociology Optional — Previous Year Questions</h3>
                  <p className="text-gray-500 text-sm max-w-2xl">20+ years of PYQs for Sociology Optional, classified by unit and theme for both Paper I and Paper II. Free download available for 2017–2020.</p>
                </div>
                <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-900 text-white text-xs">
                        <th className="text-left p-4 font-semibold">Year</th>
                        <th className="text-left p-4 font-semibold">Paper I — Key Themes</th>
                        <th className="text-left p-4 font-semibold">Paper II — Key Themes</th>
                        <th className="text-center p-4 font-semibold">Access</th>
                        <th className="text-center p-4 font-semibold">Download</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pyqYears.map((row, i) => (
                        <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-indigo-50 transition-colors`}>
                          <td className="p-4"><span className="bg-indigo-900 text-indigo-200 text-xs font-bold px-2.5 py-1 rounded">{row.year}</span></td>
                          <td className="p-4 text-gray-600 text-xs">{row.p1Topics}</td>
                          <td className="p-4 text-gray-600 text-xs">{row.p2Topics}</td>
                          <td className="p-4 text-center">
                            <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${row.free ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>{row.free ? 'Free' : 'Enrolled'}</span>
                          </td>
                          <td className="p-4 text-center">
                            <button className={`text-xs font-semibold flex items-center gap-1 mx-auto transition-colors ${row.free ? 'text-indigo-600 hover:text-indigo-800' : 'text-gray-300 cursor-not-allowed'}`} disabled={!row.free}>
                              <Download size={14} /> {row.free ? 'Download' : 'Enrol to Access'}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact"><Button className="bg-gradient-to-r from-indigo-600 to-purple-700">Enrol to Access All Years + Model Answers</Button></Link>
                  <Button variant="outline"><Download size={16} className="mr-2" />Download All Free PYQs (2017–2020)</Button>
                </div>
              </div>
            )}

            {/* BOOKS */}
            {activeSection === 'books' && (
              <div>
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Recommended Books — Sociology Optional</h3>
                  <p className="text-gray-500 text-sm max-w-2xl">A curated reading list from the teacher. The CSE Circle notes are the primary reference — standard texts provide additional depth on specific thinkers and themes.</p>
                </div>
                <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-900 text-white text-xs">
                        <th className="text-left p-4 font-semibold">Topic Area</th>
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
                            <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${b.must ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-500'}`}>{b.must ? 'Must Read' : 'Reference'}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </Section>

      {/* ── TESTIMONIALS ───────────────────────────────────────────────────── */}
      <Section className="bg-white">
        <SectionTitle title="Sociology Optional — Student Results" subtitle="Real students. Real ranks. Real accounts of what their teacher built in them." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.08 }}
              className="bg-white border border-gray-100 border-t-4 border-t-indigo-600 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-1 mb-4">{[...Array(5)].map((_, j) => <Star key={j} size={12} className="text-amber-400 fill-amber-400" />)}</div>
              <p className="text-gray-600 text-sm leading-relaxed italic mb-5">"{t.text}"</p>
              <div className="border-t border-gray-100 pt-4 flex items-center justify-between flex-wrap gap-2">
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-indigo-600 text-xs font-semibold">{t.rank}</p>
                </div>
                <span className="bg-indigo-50 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full">{t.score}</span>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/results"><Button variant="outline" size="lg">View All Sociology Optional Results →</Button></Link>
        </div>
      </Section>

      {/* ── THINKERS QUICK REFERENCE ───────────────────────────────────────── */}
      <Section className="bg-gradient-to-br from-indigo-50 to-white">
        <SectionTitle title="Key Sociological Thinkers — Quick Reference" subtitle="Every thinker below is taught as an intellectual story — the problem they were solving, the era they lived in, and how to use them in a 20-mark answer." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: 'Auguste Comte',    concept: 'Positivism, Hierarchy of Sciences',      exam: 'Sociology as science questions' },
            { name: 'Karl Marx',        concept: 'Historical materialism, Class, Alienation', exam: 'Stratification, social change' },
            { name: 'Emile Durkheim',   concept: 'Social facts, Division of labour, Suicide', exam: 'Almost every paper — very high frequency' },
            { name: 'Max Weber',        concept: 'Social action, Authority, Protestant Ethic', exam: 'Power, religion, bureaucracy questions' },
            { name: 'Talcott Parsons',  concept: 'AGIL schema, Pattern variables',          exam: 'Structural functionalism questions' },
            { name: 'Robert K. Merton', concept: 'Manifest/latent functions, Anomie',        exam: 'Dysfunction, deviance, reference group' },
            { name: 'G.H. Mead',        concept: 'Self, I and Me, Significant others',      exam: 'Identity and socialisation questions' },
            { name: 'M.N. Srinivas',    concept: 'Sanskritisation, Dominant caste, Field view', exam: 'Indian society, caste mobility' },
            { name: 'G.S. Ghurye',      concept: 'Indological approach, Caste and race',    exam: 'Perspectives on Indian society' },
            { name: 'Louis Dumont',     concept: 'Homo Hierarchicus, Hierarchy',            exam: 'Caste system, purity-pollution' },
            { name: 'A.R. Desai',       concept: 'Marxist approach, Nationalism',           exam: 'Social change, agrarian movements' },
            { name: 'Michel Foucault',  concept: 'Power-knowledge, Discipline',             exam: 'Power, institutions, surveillance' },
          ].map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.05 }}
              className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:border-indigo-200 hover:shadow-md transition-all">
              <p className="font-bold text-gray-900 text-sm mb-1">{t.name}</p>
              <p className="text-indigo-600 text-xs font-medium mb-2 leading-relaxed">{t.concept}</p>
              <p className="text-gray-400 text-xs">Exam Use: {t.exam}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── FAQ ────────────────────────────────────────────────────────────── */}
      <Section className="bg-white">
        <SectionTitle title="Frequently Asked Questions" subtitle="Everything you want to know about Sociology Optional — answered by the teacher." />
        <FaqAccordion />
      </Section>

      {/* ── FINAL CTA ──────────────────────────────────────────────────────── */}
      <Section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Learning Sociology Optional the Right Way.</h2>
            <p className="text-indigo-100 text-base mb-2">One free demo class. Meet the teacher. See the teaching.</p>
            <p className="text-indigo-200 text-sm mb-8">No commitment. No fee. Just one class — so you can decide for yourself.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact"><Button size="lg" variant="secondary">Book a Free Demo Class</Button></Link>
              <Link to="/teachers#sociology-teacher">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600">Meet Your Sociology Teacher First</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>

    </div>
  );
}