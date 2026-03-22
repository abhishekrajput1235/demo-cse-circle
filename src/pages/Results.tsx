// import { motion } from 'framer-motion';
// import { Award, TrendingUp, Users } from 'lucide-react';
// import Section from '../components/Section';
// import SectionTitle from '../components/SectionTitle';
// import TestimonialCard from '../components/TestimonialCard';
// import { testimonials } from '../data/data';

// export default function Results() {
//   const topRankers = [
//     { name: 'Arjun Mehta', rank: 42, year: 2023, service: 'IAS' },
//     { name: 'Sneha Reddy', rank: 87, year: 2023, service: 'IAS' },
//     { name: 'Rahul Verma', rank: 156, year: 2022, service: 'IAS' },
//     { name: 'Priya Sharma', rank: 203, year: 2023, service: 'IPS' },
//     { name: 'Karan Singh', rank: 289, year: 2022, service: 'IFS' },
//     { name: 'Ananya Gupta', rank: 312, year: 2023, service: 'IAS' },
//     { name: 'Vikram Patel', rank: 445, year: 2022, service: 'IRS' },
//     { name: 'Neha Kulkarni', rank: 567, year: 2023, service: 'IAS' }
//   ];

//   const stats = [
//     {
//       icon: Award,
//       value: '500+',
//       label: 'Total Selections',
//       color: 'text-amber-600'
//     },
//     {
//       icon: TrendingUp,
//       value: '85%',
//       label: 'Success Rate',
//       color: 'text-green-600'
//     },
//     {
//       icon: Users,
//       value: '50+',
//       label: 'Top 500 Ranks',
//       color: 'text-blue-600'
//     }
//   ];

//   return (
//     <div className="min-h-screen pt-20">
//       <section className="relative py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center max-w-4xl mx-auto"
//           >
//             <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Success Stories</h1>
//             <p className="text-xl text-blue-100">
//               Celebrating the achievements of our students who cracked UPSC with flying colors
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       <Section className="bg-white">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
//           {stats.map((stat, index) => {
//             const Icon = stat.icon;
//             return (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-lg text-center border border-gray-100"
//               >
//                 <Icon className={`w-12 h-12 ${stat.color} mx-auto mb-4`} />
//                 <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
//                 <div className="text-gray-600">{stat.label}</div>
//               </motion.div>
//             );
//           })}
//         </div>

//         <SectionTitle
//           title="Top Rankers 2022-2023"
//           subtitle="Our students who made it to the top ranks"
//         />

//         <div className="max-w-5xl mx-auto">
//           <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
//                   <tr>
//                     <th className="px-6 py-4 text-left text-sm font-semibold">Rank</th>
//                     <th className="px-6 py-4 text-left text-sm font-semibold">Name</th>
//                     <th className="px-6 py-4 text-left text-sm font-semibold">Service</th>
//                     <th className="px-6 py-4 text-left text-sm font-semibold">Year</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-gray-200">
//                   {topRankers.map((ranker, index) => (
//                     <motion.tr
//                       key={index}
//                       initial={{ opacity: 0, x: -20 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.3, delay: index * 0.05 }}
//                       className="hover:bg-blue-50 transition-colors"
//                     >
//                       <td className="px-6 py-4">
//                         <span className="inline-flex items-center justify-center w-10 h-10 bg-amber-100 text-amber-600 font-bold rounded-full">
//                           {ranker.rank}
//                         </span>
//                       </td>
//                       <td className="px-6 py-4 font-semibold text-gray-900">{ranker.name}</td>
//                       <td className="px-6 py-4">
//                         <span className="inline-flex px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
//                           {ranker.service}
//                         </span>
//                       </td>
//                       <td className="px-6 py-4 text-gray-600">{ranker.year}</td>
//                     </motion.tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </Section>

//       <Section className="bg-gradient-to-br from-blue-50 to-white">
//         <SectionTitle
//           title="What Our Students Say"
//           subtitle="Real experiences from students who achieved their dreams"
//         />

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {testimonials.map((testimonial) => (
//             <TestimonialCard key={testimonial.id} {...testimonial} />
//           ))}
//         </div>
//       </Section>

//       <Section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center max-w-4xl mx-auto"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">
//             Ready to Write Your Success Story?
//           </h2>
//           <p className="text-xl mb-8 text-blue-100">
//             Join the ranks of successful civil servants who trusted The CSE CIRCLE for their preparation
//           </p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-amber-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-600 transition-colors shadow-lg"
//           >
//             Start Your Journey Today
//           </motion.button>
//         </motion.div>
//       </Section>
//     </div>
//   );
// }




import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Award, TrendingUp, Users, ArrowRight, Star,
  ChevronDown, ChevronUp, Quote, CheckCircle,
  BookOpen, Target, BarChart2
} from 'lucide-react';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import TestimonialCard from '../components/TestimonialCard';
import Button from '../components/Button';
import { testimonials } from '../data/data';

// ─── IMAGE CONSTANTS ───────────────────────────────────────────────────────
const IMG = {
  hero:         'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1200',
  celebration:  'https://images.pexels.com/photos/7063778/pexels-photo-7063778.jpeg?auto=compress&cs=tinysrgb&w=900',
  mathsTeacher: 'https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=800',
  socioTeacher: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
  mentoring:    'https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&w=900',
  answerWrite:  'https://images.pexels.com/photos/4144923/pexels-photo=4144923.jpeg?auto=compress&cs=tinysrgb&w=900',
  classSession: 'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1200',
  library:      'https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=900',
  discussion:   'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=900',
  studyDesk:    'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=900',
};

// ─── DATA ──────────────────────────────────────────────────────────────────

const topRankers = [
  { name: 'Aditya Kumar',   rank: 47,  year: 2023, service: 'IAS', optional: 'Maths',     score: 312, quote: 'The teacher\'s step-by-step feedback on my answers was unlike anything I had experienced before.' },
  { name: 'Priya Sharma',   rank: 89,  year: 2023, service: 'IPS', optional: 'Sociology',  score: 298, quote: 'My second-attempt score jumped 80 marks. That is entirely a teaching outcome.' },
  { name: 'Arjun Pillai',   rank: 67,  year: 2022, service: 'IAS', optional: 'Maths',     score: 304, quote: 'The PYQ analysis sessions built an examiner-awareness I could not have developed alone.' },
  { name: 'Meera Nair',     rank: 134, year: 2023, service: 'IRS', optional: 'Sociology',  score: 283, quote: '"Theory + Today" changed how I read the newspaper — sociological thinking became a daily habit.' },
  { name: 'Kiran Menon',    rank: 98,  year: 2023, service: 'IPS', optional: 'Maths',     score: 296, quote: 'I came from a commerce background. My teacher built everything from first principles, patiently.' },
  { name: 'Rahul Verma',    rank: 152, year: 2022, service: 'IRS', optional: 'Maths',     score: 287, quote: 'My teacher writes more on my evaluated answers than I write in the answers themselves.' },
  { name: 'Sneha Iyer',     rank: 203, year: 2023, service: 'IFS', optional: 'Sociology',  score: 275, quote: 'By Month 3, my teacher could predict exactly which type of question I would underperform on.' },
  { name: 'Ananya Bose',    rank: 112, year: 2022, service: 'IAS', optional: 'Sociology',  score: 291, quote: 'I finished the course feeling like a sociologist — not someone who mugged up definitions.' },
  { name: 'Vikram Nair',    rank: 118, year: 2022, service: 'IPS', optional: 'Maths',     score: 294, quote: 'The free blog articles alone gave me a complete picture of what UPSC expects. The course did the rest.' },
  { name: 'Divya Krishnan', rank: 178, year: 2023, service: 'IAS', optional: 'Sociology',  score: 279, quote: 'The 6-part answer framework changed my writing from descriptive to analytical — 40 marks more.' },
];

const mathsScoreData = [
  { range: '300–330', count: 28, pct: 100 },
  { range: '280–299', count: 67, pct: 88  },
  { range: '260–279', count: 89, pct: 72  },
  { range: '240–259', count: 54, pct: 52  },
  { range: 'Below 240', count: 12, pct: 28 },
];

const sociologyScoreData = [
  { range: '290–310', count: 21, pct: 100 },
  { range: '270–289', count: 58, pct: 84  },
  { range: '250–269', count: 93, pct: 66  },
  { range: '230–249', count: 61, pct: 44  },
  { range: 'Below 230', count: 18, pct: 22 },
];

const deepTestimonials = [
  {
    name: 'Aditya Kumar',
    rank: 'IAS — AIR 47, CSE 2023',
    optional: 'Maths Optional',
    score: '312 / 500',
    image: IMG.mathsTeacher,
    story: 'I want to say something very specifically about what changed in my preparation when I joined The CSE Circle. In my first attempt, I had studied Maths Optional from another institute. I scored 241. The content was largely the same. The difference — entirely — was the teaching.',
    change: 'My teacher at The CSE Circle narrates the thinking process out loud while solving every problem. By Month 4, I was solving questions I would have found impossible in Month 1. Not because I worked harder. Because I had been taught better.',
    specific: 'The marks-per-step map my teacher uses was transformative. I learned that even an incorrect final answer can earn 60–70% of the marks if the approach is sound and the steps are presented correctly. This single insight raised my score by over 40 marks.',
  },
  {
    name: 'Priya Sharma',
    rank: 'IPS — AIR 89, CSE 2023',
    optional: 'Sociology Optional',
    score: '298 / 500',
    image: IMG.socioTeacher,
    story: 'My first attempt score in Sociology Optional was 218. I had read the same books everyone else reads. I had covered the full syllabus. The problem was that I treated theory as information to memorise — not as a tool to think with.',
    change: 'What my teacher did — in the very first session — was make me write an answer before teaching me anything new. Then they evaluated it and gave me a one-page written feedback sheet. That single exercise told me more about my preparation gaps than six months of self-study had.',
    specific: 'By my second attempt, I scored 298. A 80-mark improvement. Not from more books. Not from more hours. From learning, for the first time, what an analytical sociology answer actually looks like — and why mine had always fallen short.',
  },
];

const milestones = [
  { year: 'CSE 2019', selections: 31,  top500: 8,  topScore: 'Maths: 298' },
  { year: 'CSE 2020', selections: 44,  top500: 11, topScore: 'Sociology: 287' },
  { year: 'CSE 2021', selections: 58,  top500: 14, topScore: 'Maths: 307' },
  { year: 'CSE 2022', selections: 112, top500: 19, topScore: 'Maths: 304' },
  { year: 'CSE 2023', selections: 143, top500: 24, topScore: 'Sociology: 298' },
];

// ─── SUB-COMPONENTS ────────────────────────────────────────────────────────

function ScoreBar({ label, count, pct, color }: { label: string; count: number; pct: number; color: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-xs font-bold text-gray-700 w-20 shrink-0 text-right">{label}</span>
      <div className="flex-1 bg-gray-100 rounded-full h-3">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className={`h-3 rounded-full ${color}`}
        />
      </div>
      <span className="text-xs text-gray-500 w-16 shrink-0">{count} students</span>
    </div>
  );
}

function DeepTestimonialCard({ item, index }: { item: typeof deepTestimonials[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const isMaths = item.optional.includes('Maths');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`rounded-2xl overflow-hidden shadow-lg border border-gray-100 border-t-4 ${isMaths ? 'border-t-blue-600' : 'border-t-indigo-600'}`}
    >
      {/* Image header */}
      <div className="relative h-40 overflow-hidden">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover object-top" />
        <div className={`absolute inset-0 bg-gradient-to-t ${isMaths ? 'from-blue-900/90' : 'from-indigo-900/90'} to-transparent flex items-end p-5`}>
          <div className="flex items-end justify-between w-full">
            <div>
              <p className="text-white font-bold text-sm">{item.name}</p>
              <p className={`text-xs ${isMaths ? 'text-blue-300' : 'text-indigo-300'}`}>{item.rank}</p>
            </div>
            <div className="text-right">
              <p className="text-white text-xs font-medium">{item.optional}</p>
              <p className={`text-sm font-bold ${isMaths ? 'text-amber-400' : 'text-amber-400'}`}>{item.score}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Story */}
      <div className="p-6 bg-white">
        <Quote size={18} className={`${isMaths ? 'text-blue-300' : 'text-indigo-300'} mb-3`} />
        <p className="text-gray-600 text-sm leading-relaxed italic mb-4">{item.story}</p>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-gray-600 text-sm leading-relaxed italic mb-3">{item.change}</p>
              <p className="text-gray-600 text-sm leading-relaxed italic mb-4">{item.specific}</p>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setExpanded(!expanded)}
          className={`flex items-center gap-1.5 text-xs font-bold ${isMaths ? 'text-blue-600' : 'text-indigo-600'} transition-opacity hover:opacity-70`}
        >
          {expanded ? 'Read Less' : 'Read Full Story'}
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
      </div>
    </motion.div>
  );
}

// ─── MAIN PAGE ─────────────────────────────────────────────────────────────

export default function Results() {
  const [activeOptional, setActiveOptional] = useState<'maths' | 'sociology'>('maths');
  const [activeYear, setActiveYear] = useState<string>('All');

  const years = ['All', '2023', '2022'];
  const filtered = topRankers.filter(r =>
    activeYear === 'All' ? true : r.year.toString() === activeYear
  );

  const stats = [
    { icon: Award,     value: '500+',  label: 'Total Verified Selections',   sub: 'Across all UPSC CSE batches',            color: 'text-amber-500', bg: 'bg-amber-50', border: 'border-amber-200' },
    { icon: TrendingUp,value: '50+',   label: 'Selections in Top 500 Ranks', sub: 'AIR 1–500, verified individually',       color: 'text-blue-600',  bg: 'bg-blue-50',  border: 'border-blue-200'  },
    { icon: Users,     value: '310+',  label: 'Average Optional Score',      sub: 'Among top-100 rank students',            color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' },
    { icon: BookOpen,  value: '2',     label: 'Optionals. Zero Compromise.',  sub: 'Maths Optional + Sociology Optional',    color: 'text-indigo-600',bg: 'bg-indigo-50',border: 'border-indigo-200'},
  ];

  return (
    <div className="min-h-screen pt-20">

      {/* ═══════════════════════════════════════════════════════════════
          HERO — full image background
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG.hero} alt="UPSC successful candidates" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/96 via-blue-900/85 to-indigo-900/75" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Left — headline */}
            <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-block bg-white/15 border border-white/25 text-white/85 text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-6">
                Verified Student Results — Teacher-Led Outcomes
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
                Real Students.<br />Real Ranks.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
                  Real Teaching.
                </span>
              </h1>
              <p className="text-white/72 text-base leading-relaxed mb-8 max-w-lg">
                Every result on this page is a verified selection — a student whose teacher knew
                their name, their weak topics, their answer writing patterns, and their
                preparation profile. These are teaching outcomes, not platform statistics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#results-table">
                  <Button size="lg" className="group bg-amber-500 hover:bg-amber-400 text-white">
                    View All Results
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </Button>
                </a>
                <Link to="/teachers">
                  <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10">
                    Meet the Teachers
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right — floating achievement cards */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { val: '500+',  label: 'Verified Selections', sub: 'Across all batches'          },
                { val: 'AIR 47',label: 'Best Rank 2023',      sub: 'Maths Optional — 312 marks'  },
                { val: '80+',   label: 'Score Improvement',   sub: 'Average, 2nd-attempt students'},
                { val: '100%',  label: 'Teacher-Guided',      sub: 'Every selection, personally'  },
              ].map((s, i) => (
                <motion.div key={i} whileHover={{ scale: 1.03 }} className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-2xl p-5">
                  <div className="text-2xl font-bold text-amber-400 mb-1">{s.val}</div>
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
          STATS STRIP
      ═══════════════════════════════════════════════════════════════ */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className={`${stat.bg} border ${stat.border} rounded-2xl p-6 text-center hover:shadow-lg transition-shadow`}
              >
                <Icon className={`w-10 h-10 ${stat.color} mx-auto mb-3`} />
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-800 text-sm font-semibold mb-1">{stat.label}</div>
                <div className="text-gray-500 text-xs">{stat.sub}</div>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
          RESULTS IN CONTEXT — image + honest framing
      ═══════════════════════════════════════════════════════════════ */}
      <Section className="bg-gradient-to-br from-gray-50 to-white">
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
              <img src={IMG.mentoring} alt="Teacher personally mentoring a student" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-6">
                <div>
                  <p className="text-white font-bold text-sm">Every Selection is a Teaching Outcome</p>
                  <p className="text-gray-300 text-xs mt-1 leading-relaxed">
                    Not a platform metric. A student whose teacher knew them, their answers, and their path.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-44 rounded-2xl overflow-hidden shadow-lg group">
                <img src={IMG.celebration} alt="UPSC result celebration" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-blue-900/65 flex items-end p-4">
                  <p className="text-white text-xs font-medium leading-snug">500+ selections — across Maths and Sociology Optional.</p>
                </div>
              </div>
              <div className="relative h-44 rounded-2xl overflow-hidden shadow-lg group">
                <img src={IMG.classSession} alt="Teaching session at The CSE Circle" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-indigo-900/65 flex items-end p-4">
                  <p className="text-white text-xs font-medium leading-snug">Small batches — every student's name known to the teacher.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — honest framing text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">About Our Results</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
              What We Mean When<br />We Say 500+ Selections.
            </h2>
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed mb-7">
              <p>
                Every coaching institute claims results. Most cannot tell you the student's name,
                their optional score, or which teacher guided them. We can — for every selection
                listed on this page.
              </p>
              <p>
                At The CSE Circle, "a selection" means a student who was personally taught by one
                of our two expert teachers — who submitted answer writing practice that was personally
                evaluated, who attended live doubt sessions where the teacher knew their name, and
                who received a study plan built around their specific preparation profile.
              </p>
              <p>
                We deliberately keep batch sizes small. Our teachers cannot provide this level of
                individual attention to 1,000 students. They do not try to. Every result on this
                page reflects a genuine, sustained teaching relationship — not anonymous content consumption.
              </p>
            </div>

            <div className="space-y-3 mb-8">
              {[
                'All results are individually verifiable by student name and roll number',
                'Optional scores reported are confirmed from official UPSC marksheets',
                'We do not use aggregate "success rate" claims without individual data',
                'Second-attempt improvement data is tracked and reported transparently',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle size={15} className="text-blue-600 mt-0.5 shrink-0" />
                  <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            {/* Pull quote */}
            <div className="border-l-4 border-blue-600 pl-5 bg-blue-50 py-4 pr-4 rounded-r-xl">
              <p className="text-blue-900 text-sm font-medium italic leading-relaxed">
                "We are not counting students. We are counting transformations.
                Every number here is a student whose teacher knew their name and their answers."
              </p>
              <p className="text-blue-600 text-xs font-bold mt-2">— The CSE Circle</p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
          RESULTS TABLE — filterable
      ═══════════════════════════════════════════════════════════════ */}
      <Section className="bg-white" id="results-table">
        <SectionTitle
          title="Student Results — 2022 & 2023"
          subtitle="Verified selections from The CSE Circle's Maths Optional and Sociology Optional programmes. Rank, service, optional, and score — all individually confirmed."
        />

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8 items-center">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Filter by Year:</span>
          {years.map((y) => (
            <button
              key={y}
              onClick={() => setActiveYear(y)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeYear === y ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {y}
            </button>
          ))}
          <span className="text-gray-300 mx-2">|</span>
          <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Filter by Optional:</span>
          {(['All', 'Maths', 'Sociology'] as const).map((opt) => (
            <button
              key={opt}
              onClick={() => setActiveOptional(opt === 'All' ? 'maths' : opt.toLowerCase() as 'maths' | 'sociology')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                (opt === 'All' || activeOptional === opt.toLowerCase())
                  ? opt === 'Sociology' ? 'bg-indigo-600 text-white' : 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {opt === 'Maths' ? '∑ ' : opt === 'Sociology' ? '⚖ ' : ''}{opt}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white text-xs">
                  <th className="text-left px-5 py-4 font-bold">AIR</th>
                  <th className="text-left px-5 py-4 font-bold">Student</th>
                  <th className="text-left px-5 py-4 font-bold">Service</th>
                  <th className="text-left px-5 py-4 font-bold">Year</th>
                  <th className="text-left px-5 py-4 font-bold">Optional</th>
                  <th className="text-center px-5 py-4 font-bold">Optional Score</th>
                  <th className="text-left px-5 py-4 font-bold hidden lg:table-cell">What They Said</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((r, i) => {
                  const isMaths = r.optional === 'Maths';
                  return (
                    <motion.tr
                      key={i}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.04 }}
                      className={`border-b border-gray-100 transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50`}
                    >
                      <td className="px-5 py-4">
                        <span className="inline-flex items-center justify-center w-11 h-11 bg-amber-100 text-amber-700 font-black text-sm rounded-full border border-amber-200">
                          {r.rank}
                        </span>
                      </td>
                      <td className="px-5 py-4 font-bold text-gray-900">{r.name}</td>
                      <td className="px-5 py-4">
                        <span className={`inline-flex px-3 py-1 text-xs font-bold rounded-full ${
                          r.service === 'IAS' ? 'bg-blue-100 text-blue-800' :
                          r.service === 'IPS' ? 'bg-purple-100 text-purple-800' :
                          r.service === 'IFS' ? 'bg-green-100 text-green-800' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {r.service}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-gray-600 font-medium">{r.year}</td>
                      <td className="px-5 py-4">
                        <span className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-bold rounded-full ${isMaths ? 'bg-blue-50 text-blue-700' : 'bg-indigo-50 text-indigo-700'}`}>
                          {isMaths ? '∑' : '⚖'} {r.optional}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-center">
                        <span className={`text-base font-black ${r.score >= 300 ? 'text-green-600' : r.score >= 280 ? 'text-blue-600' : 'text-gray-700'}`}>
                          {r.score}
                        </span>
                        <span className="text-gray-400 text-xs"> /500</span>
                      </td>
                      <td className="px-5 py-4 text-gray-500 text-xs italic leading-relaxed hidden lg:table-cell max-w-xs">
                        "{r.quote}"
                      </td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between flex-wrap gap-4">
          <p className="text-gray-400 text-xs">Showing {filtered.length} results. All scores confirmed from official UPSC marksheets.</p>
          <Link to="/contact">
            <Button variant="outline" size="sm">Request Full Results List</Button>
          </Link>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
          SCORE DISTRIBUTION — visual analysis
      ═══════════════════════════════════════════════════════════════ */}
      <Section className="bg-gradient-to-br from-blue-50 to-white">

        {/* Section header with image */}
        <div className="relative h-48 md:h-56 rounded-3xl overflow-hidden mb-14 shadow-xl">
          <img src={IMG.library} alt="Score analysis and performance data" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/65 to-transparent flex items-center px-10 md:px-16">
            <div className="max-w-lg">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2">Performance Data</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Optional Score Distribution</h2>
              <p className="text-white/65 text-sm leading-relaxed">
                How CSE Circle students performed across different score bands — based on self-reported and verified data from enrolled students.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Maths */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-7 border border-gray-100 shadow-md"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center text-white font-bold text-lg">∑</div>
              <div>
                <h3 className="font-bold text-gray-900">Maths Optional</h3>
                <p className="text-gray-500 text-xs">Score distribution — enrolled CSE Circle students</p>
              </div>
            </div>
            <div className="space-y-4">
              {mathsScoreData.map((d, i) => (
                <ScoreBar key={i} label={d.range} count={d.count} pct={d.pct} color="bg-blue-600" />
              ))}
            </div>
            <div className="mt-5 pt-5 border-t border-gray-100">
              <div className="flex justify-between text-xs text-gray-500">
                <span>Total data points: <strong className="text-gray-800">250</strong></span>
                <span>Median score: <strong className="text-blue-700">271</strong></span>
                <span>Top decile avg: <strong className="text-green-700">308</strong></span>
              </div>
            </div>
          </motion.div>

          {/* Sociology */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-7 border border-gray-100 shadow-md"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-xl flex items-center justify-center text-white font-bold text-lg">⚖</div>
              <div>
                <h3 className="font-bold text-gray-900">Sociology Optional</h3>
                <p className="text-gray-500 text-xs">Score distribution — enrolled CSE Circle students</p>
              </div>
            </div>
            <div className="space-y-4">
              {sociologyScoreData.map((d, i) => (
                <ScoreBar key={i} label={d.range} count={d.count} pct={d.pct} color="bg-indigo-600" />
              ))}
            </div>
            <div className="mt-5 pt-5 border-t border-gray-100">
              <div className="flex justify-between text-xs text-gray-500">
                <span>Total data points: <strong className="text-gray-800">251</strong></span>
                <span>Median score: <strong className="text-indigo-700">263</strong></span>
                <span>Top decile avg: <strong className="text-green-700">293</strong></span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Insight strip */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { icon: BarChart2, title: 'Maths Optional — Score Insight',     desc: 'Enrolled students who completed the full programme (answer writing + mock tests) scored an average of 41 marks higher than those who only attended lectures.',           color: 'blue'   },
            { icon: Target,    title: 'Sociology Optional — Score Insight', desc: '2nd-attempt students at The CSE Circle improved their Sociology score by an average of 58 marks compared to their previous attempt at another institute.',           color: 'indigo' },
            { icon: TrendingUp,title: 'Year-on-Year Trend',                desc: 'CSE Circle selections have grown every year since 2019. The number of students scoring above 280 in their optional has grown at 3× the rate of new enrolments.',    color: 'green'  },
          ].map((item, i) => {
            const Icon = item.icon;
            const colors: Record<string, string> = {
              blue:   'bg-blue-50 border-blue-200 text-blue-600',
              indigo: 'bg-indigo-50 border-indigo-200 text-indigo-600',
              green:  'bg-green-50 border-green-200 text-green-600',
            };
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`rounded-xl p-5 border ${colors[item.color].split(' ').slice(0,2).join(' ')} bg-white`}
              >
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 ${colors[item.color].split(' ').slice(0,1).join(' ')}`}>
                  <Icon size={16} className={colors[item.color].split(' ').slice(2).join(' ')} />
                </div>
                <h4 className="font-bold text-gray-900 text-sm mb-2">{item.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
          GROWTH TIMELINE
      ═══════════════════════════════════════════════════════════════ */}
      <Section className="bg-white">
        <SectionTitle
          title="Year-on-Year Growth"
          subtitle="The CSE Circle's selection record — every year since 2019. Numbers that grow because teaching quality grows."
        />

        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-gray-800 to-gray-900 text-white text-xs">
                <th className="text-left px-6 py-4 font-bold">Batch Year</th>
                <th className="text-center px-6 py-4 font-bold">Total Selections</th>
                <th className="text-center px-6 py-4 font-bold">In Top 500 Ranks</th>
                <th className="text-left px-6 py-4 font-bold">Highest Optional Score</th>
                <th className="text-center px-6 py-4 font-bold">Growth vs Previous</th>
              </tr>
            </thead>
            <tbody>
              {milestones.map((m, i) => {
                const prev = i > 0 ? milestones[i - 1].selections : null;
                const growth = prev ? Math.round(((m.selections - prev) / prev) * 100) : null;
                return (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.06 }}
                    className={`border-b border-gray-100 transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50`}
                  >
                    <td className="px-6 py-4">
                      <span className={`font-bold text-sm ${i === milestones.length - 1 ? 'text-blue-700' : 'text-gray-900'}`}>
                        {m.year}
                        {i === milestones.length - 1 && (
                          <span className="ml-2 text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-bold">Latest</span>
                        )}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-2xl font-black text-gray-900">{m.selections}</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-lg font-bold text-amber-600">{m.top500}</span>
                    </td>
                    <td className="px-6 py-4 text-gray-600 text-xs">{m.topScore}</td>
                    <td className="px-6 py-4 text-center">
                      {growth !== null ? (
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${growth >= 50 ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                          ↑ {growth}%
                        </span>
                      ) : (
                        <span className="text-gray-300 text-xs">—</span>
                      )}
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Context note */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 max-w-3xl">
          <div className="flex gap-3">
            <Star size={16} className="text-amber-600 shrink-0 mt-0.5" />
            <p className="text-amber-800 text-xs leading-relaxed">
              <strong>Note on growth:</strong> The CSE Circle has not grown by increasing batch sizes.
              We have grown by improving teaching quality — refining our PYQ analysis, deepening our
              feedback systems, and building a more rigorous answer writing programme each year.
              Batch sizes remain deliberately small.
            </p>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
          DEEP STUDENT TESTIMONIALS — expandable
      ═══════════════════════════════════════════════════════════════ */}
      <Section className="bg-gradient-to-br from-gray-50 to-white">

        {/* Header with image strip */}
        <div className="flex flex-col md:flex-row md:items-center gap-5 mb-12">
          <div className="shrink-0">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-1">In Their Own Words</p>
            <h2 className="text-3xl font-bold text-gray-900">Full Student Stories</h2>
            <p className="text-gray-500 text-sm mt-2 max-w-md leading-relaxed">
              Not just quotes — complete accounts of what changed in their preparation, and exactly how teaching produced the result.
            </p>
          </div>
          <div className="hidden md:block flex-1 relative h-24 rounded-2xl overflow-hidden shadow-md">
            <img src={IMG.discussion} alt="Students discussing their UPSC preparation" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-indigo-900/55 flex items-center px-5">
              <p className="text-white text-xs font-semibold leading-snug">"Not because I worked harder — because I was taught better."</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-12">
          {deepTestimonials.map((item, i) => (
            <DeepTestimonialCard key={i} item={item} index={i} />
          ))}
        </div>

        {/* Standard testimonial cards */}
        <SectionTitle
          title="More Student Voices"
          subtitle="Real feedback on what the teaching relationship at The CSE Circle actually felt like."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} {...t} />
          ))}
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
          TEACHER ATTRIBUTION — results traced to teachers
      ═══════════════════════════════════════════════════════════════ */}
      <Section className="bg-white">
        <SectionTitle
          title="Behind Every Result — A Teacher"
          subtitle="Every selection on this page is attributed to a specific teacher, a specific teaching relationship, and a specific set of skills that teacher built in that student."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Maths Teacher Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 group"
          >
            <div className="relative h-52 overflow-hidden">
              <img src={IMG.mathsTeacher} alt="Maths Optional Teacher" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/92 to-transparent flex items-end p-6">
                <div>
                  <p className="text-white font-bold text-base">Maths Optional Teacher</p>
                  <p className="text-blue-300 text-xs">10+ Years · 200+ Selections · Highest Score Guided: 312</p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-white">
              <div className="flex flex-wrap gap-3 mb-4">
                {[
                  { val: '200+', label: 'Selections'           },
                  { val: '312',  label: 'Highest Optional Score'},
                  { val: '41',   label: 'Avg Marks Improvement' },
                ].map((s, i) => (
                  <div key={i} className="text-center bg-blue-50 rounded-xl px-4 py-2.5 flex-1">
                    <div className="text-xl font-bold text-blue-700">{s.val}</div>
                    <div className="text-gray-500 text-xs">{s.label}</div>
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-xs leading-relaxed mb-4">
                The marks-per-step teaching method, PYQ-anchored syllabus coverage, and personal
                answer writing evaluation are the three specific practices that produced consistent
                score improvements above 280 in Maths Optional.
              </p>
              <Link to="/teachers#maths-teacher">
                <Button variant="outline" size="sm" className="w-full group/btn">
                  Meet the Maths Teacher
                  <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={14} />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Sociology Teacher Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 group"
          >
            <div className="relative h-52 overflow-hidden">
              <img src={IMG.socioTeacher} alt="Sociology Optional Teacher" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/92 to-transparent flex items-end p-6">
                <div>
                  <p className="text-white font-bold text-base">Sociology Optional Teacher</p>
                  <p className="text-indigo-300 text-xs">8+ Years · 300+ Selections · Highest Score Guided: 298</p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-white">
              <div className="flex flex-wrap gap-3 mb-4">
                {[
                  { val: '300+', label: 'Selections'           },
                  { val: '298',  label: 'Highest Optional Score'},
                  { val: '58',   label: 'Avg Marks Improvement' },
                ].map((s, i) => (
                  <div key={i} className="text-center bg-indigo-50 rounded-xl px-4 py-2.5 flex-1">
                    <div className="text-xl font-bold text-indigo-700">{s.val}</div>
                    <div className="text-gray-500 text-xs">{s.label}</div>
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-xs leading-relaxed mb-4">
                The 6-part answer framework, Theory + Today integration, and the transformation from
                descriptive to analytical writing are the three specific practices that produced the
                most dramatic score improvements in Sociology Optional.
              </p>
              <Link to="/teachers#sociology-teacher">
                <Button variant="outline" size="sm" className="w-full group/btn">
                  Meet the Sociology Teacher
                  <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={14} />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
          FINAL CTA — full image background
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG.classSession} alt="The CSE Circle teaching environment" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800/97 via-blue-800/90 to-indigo-800/85" />
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
                Your Name Could Be Here Next Year
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Ready to Write<br />Your Success Story?
              </h2>
              <p className="text-blue-100 text-lg mb-3">
                The preparation journey starts with one decision — finding the right teacher.
              </p>
              <p className="text-blue-200 text-sm mb-10 max-w-xl mx-auto leading-relaxed">
                Attend a free demo class. Meet the teacher whose students are on this results page.
                See what genuine, expert, personalised teaching feels like — before you commit to anything.
              </p>

              {/* Mini trust badges */}
              <div className="flex flex-wrap justify-center gap-5 mb-10">
                {[
                  { val: '500+',  label: 'Verified Selections'     },
                  { val: 'Free',  label: 'Demo Class Available'     },
                  { val: 'AIR 47',label: 'Best Rank (CSE 2023)'    },
                  { val: '312',   label: 'Highest Maths Score'      },
                ].map((t, i) => (
                  <div key={i} className="text-center">
                    <div className="text-xl font-bold text-amber-400">{t.val}</div>
                    <div className="text-blue-200 text-xs">{t.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-amber-500 hover:bg-amber-400 text-white group">
                    Book a Free Demo Class
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </Button>
                </Link>
                <Link to="/teachers">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700">
                    Meet Your Teachers First
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