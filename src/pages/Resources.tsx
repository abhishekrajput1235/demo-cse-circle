// import { motion } from 'framer-motion';
// import { BookOpen, FileText, TrendingUp } from 'lucide-react';
// import Section from '../components/Section';
// import SectionTitle from '../components/SectionTitle';
// import BlogCard from '../components/BlogCard';
// import { blogPosts } from '../data/data';

// export default function Resources() {
//   const categories = [
//     { name: 'Preparation Strategy', count: 15, icon: BookOpen },
//     { name: 'Current Affairs', count: 32, icon: TrendingUp },
//     { name: 'Study Material', count: 24, icon: FileText }
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
//             <h1 className="text-4xl md:text-5xl font-bold mb-6">Resources & Blog</h1>
//             <p className="text-xl text-blue-100">
//               Expert articles, preparation tips, and current affairs to support your UPSC journey
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       <Section className="bg-white">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
//           {categories.map((category, index) => {
//             const Icon = category.icon;
//             return (
//               <motion.button
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ duration: 0.3, delay: index * 0.1 }}
//                 className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 text-left"
//               >
//                 <Icon className="w-10 h-10 text-blue-600 mb-3" />
//                 <h3 className="text-lg font-bold text-gray-900 mb-1">{category.name}</h3>
//                 <p className="text-sm text-gray-600">{category.count} Articles</p>
//               </motion.button>
//             );
//           })}
//         </div>

//         <SectionTitle
//           title="Latest Articles"
//           subtitle="Stay updated with our expert insights and preparation guidance"
//         />

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
//           {blogPosts.map((post) => (
//             <BlogCard key={post.id} {...post} />
//           ))}
//         </div>
//       </Section>

//       <Section className="bg-gradient-to-br from-blue-50 to-white">
//         <SectionTitle
//           title="UPSC Preparation Resources"
//           subtitle="Essential materials to enhance your preparation"
//         />

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
//           {[
//             {
//               title: 'UPSC Syllabus 2024',
//               description: 'Complete syllabus for Prelims and Mains examination with subject-wise breakdown.',
//               type: 'PDF Download'
//             },
//             {
//               title: 'Previous Year Papers',
//               description: 'Collection of last 10 years question papers with detailed solutions.',
//               type: 'PDF Download'
//             },
//             {
//               title: 'Current Affairs Monthly',
//               description: 'Comprehensive monthly compilation of important current affairs for UPSC.',
//               type: 'PDF Download'
//             },
//             {
//               title: 'Study Plan Templates',
//               description: 'Structured study plans for different phases of UPSC preparation.',
//               type: 'PDF Download'
//             }
//           ].map((resource, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
//             >
//               <div className="flex items-start justify-between mb-4">
//                 <div className="flex-1">
//                   <h3 className="text-xl font-bold text-gray-900 mb-2">{resource.title}</h3>
//                   <p className="text-gray-600 text-sm mb-3">{resource.description}</p>
//                 </div>
//               </div>
//               <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
//                 {resource.type}
//               </button>
//             </motion.div>
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
//             Want More Exclusive Content?
//           </h2>
//           <p className="text-xl mb-8 text-blue-100">
//             Subscribe to our newsletter for weekly updates, study tips, and exclusive resources
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
//             />
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-amber-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-600 transition-colors shadow-lg"
//             >
//               Subscribe
//             </motion.button>
//           </div>
//         </motion.div>
//       </Section>
//     </div>
//   );
// }




import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, BookOpen, FileText, TrendingUp, Download,
  Star, Lock, Unlock, ChevronRight, Search, Filter,
  PenTool, Target, Clock, Layers, ExternalLink
} from 'lucide-react';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import BlogCard from '../components/BlogCard';
import Button from '../components/Button';
import { blogPosts } from '../data/data';

// ─── IMAGE CONSTANTS ───────────────────────────────────────────────────────
const IMG = {
  hero:        'https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=1200',
  studyDesk:   'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=900',
  classRoom:   'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=900',
  answerWrite: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=900',
  mathsBoard:  'https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg?auto=compress&cs=tinysrgb&w=900',
  discussion:  'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=900',
  mentoring:   'https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&w=900',
  pyqStudy:    'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=900',
  library2:    'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=900',
};

// ─── DATA ──────────────────────────────────────────────────────────────────

const mathsBooks = [
  { title: 'Linear Algebra',       author: 'K.C. Prasad / Hoffman & Kunze',        use: 'Concept Building',    must: true,  paper: 'Paper I',  tag: 'bg-blue-50 text-blue-700'   },
  { title: 'Calculus',             author: 'Shanti Narayan / K.C. Sinha',           use: 'Concept + Problems',  must: true,  paper: 'Paper I',  tag: 'bg-blue-50 text-blue-700'   },
  { title: 'Analytic Geometry',    author: 'S.L. Loney / Gorakh Prasad',            use: 'Problems Focus',      must: false, paper: 'Paper I',  tag: 'bg-blue-50 text-blue-700'   },
  { title: 'ODE',                  author: 'G.F. Simmons / Earl Coddington',        use: 'Theory + Problems',   must: true,  paper: 'Paper I',  tag: 'bg-blue-50 text-blue-700'   },
  { title: 'Vector Analysis',      author: 'A.R. Vasishtha / Schaum Series',        use: 'Concept + PYQ',       must: true,  paper: 'Paper I',  tag: 'bg-blue-50 text-blue-700'   },
  { title: 'Abstract Algebra',     author: 'I.N. Herstein / Joseph Gallian',        use: 'Concept Building',    must: true,  paper: 'Paper II', tag: 'bg-indigo-50 text-indigo-700'},
  { title: 'Real Analysis',        author: 'S.K. Mapa / Rudin (selective)',         use: 'Concept Building',    must: true,  paper: 'Paper II', tag: 'bg-indigo-50 text-indigo-700'},
  { title: 'Complex Analysis',     author: 'S. Ponnuswamy / Churchill',             use: 'Concept + Examples',  must: true,  paper: 'Paper II', tag: 'bg-indigo-50 text-indigo-700'},
  { title: 'PDE',                  author: 'Sneddon / T. Amaranath',               use: 'Theory + Exam Focus', must: true,  paper: 'Paper II', tag: 'bg-indigo-50 text-indigo-700'},
  { title: 'Numerical Analysis',   author: 'M.K. Jain / B.S. Grewal',              use: 'Methods Focus',       must: false, paper: 'Paper II', tag: 'bg-indigo-50 text-indigo-700'},
  { title: 'Statistics',           author: 'S.C. Gupta / Hogg & Craig (select.)',   use: 'Concepts + PYQ',      must: true,  paper: 'Paper II', tag: 'bg-indigo-50 text-indigo-700'},
  { title: 'Linear Programming',   author: 'Kanti Swarup / S.D. Sharma',           use: 'Concept + Problems',  must: true,  paper: 'Paper II', tag: 'bg-indigo-50 text-indigo-700'},
];

const sociologyBooks = [
  { title: 'Sociology (General)',           author: 'Anthony Giddens — Sociology',                use: 'Conceptual Foundation',   must: true,  paper: 'Paper I',  tag: 'bg-purple-50 text-purple-700' },
  { title: 'Classical Thinkers',            author: 'George Ritzer — Classical Sociological Theory', use: 'Thinker Deep Dives',  must: true,  paper: 'Paper I',  tag: 'bg-purple-50 text-purple-700' },
  { title: 'Research Methods',             author: 'C.N. Shankar Rao — Research Methods',        use: 'Methods + Application',   must: true,  paper: 'Paper I',  tag: 'bg-purple-50 text-purple-700' },
  { title: 'Social Change in India',        author: 'M.N. Srinivas — Social Change in Modern India', use: 'Core Reading Paper II', must: true, paper: 'Paper II', tag: 'bg-pink-50 text-pink-700'    },
  { title: 'Caste System',                 author: 'Louis Dumont — Homo Hierarchicus (selective)', use: 'Caste Theory',          must: true,  paper: 'Paper II', tag: 'bg-pink-50 text-pink-700'    },
  { title: 'Indian Nationalism',           author: 'A.R. Desai — Social Background of Nationalism', use: 'Movements + Change',  must: true,  paper: 'Paper II', tag: 'bg-pink-50 text-pink-700'    },
  { title: 'Feminist Sociology',           author: 'Sylvia Walby — Theorizing Patriarchy',        use: 'Gender Theory',          must: false, paper: 'Paper I',  tag: 'bg-purple-50 text-purple-700' },
  { title: 'Agrarian Society',             author: 'Daniel Thorner — Agrarian Prospect in India', use: 'Agrarian Structure',      must: false, paper: 'Paper II', tag: 'bg-pink-50 text-pink-700'    },
  { title: 'CSE Circle Teacher Notes',     author: 'Written by the Sociology Optional Teacher',   use: 'Primary Reference',       must: true,  paper: 'Both',     tag: 'bg-amber-50 text-amber-700'  },
];

const pyqPdfs = [
  {
    title: 'Maths Optional PYQs — 2017–2020',
    subject: 'Maths Optional',
    papers: 'Paper I & II',
    years: '2017, 2018, 2019, 2020',
    includes: 'Original question papers + topic classification',
    free: true,
    icon: '∑',
    color: 'blue',
  },
  {
    title: 'Sociology Optional PYQs — 2017–2020',
    subject: 'Sociology Optional',
    papers: 'Paper I & II',
    years: '2017, 2018, 2019, 2020',
    includes: 'Original question papers + topic classification',
    free: true,
    icon: '⚖',
    color: 'indigo',
  },
  {
    title: 'Maths Optional PYQs — 2010–2016',
    subject: 'Maths Optional',
    papers: 'Paper I & II',
    years: '2010 to 2016 (7 years)',
    includes: 'Original question papers + topic-wise sort',
    free: true,
    icon: '∑',
    color: 'blue',
  },
  {
    title: 'Sociology Optional PYQs — 2010–2016',
    subject: 'Sociology Optional',
    papers: 'Paper I & II',
    years: '2010 to 2016 (7 years)',
    includes: 'Original question papers + theme classification',
    free: true,
    icon: '⚖',
    color: 'indigo',
  },
  {
    title: 'Maths PYQs + Model Answers 2021–2024',
    subject: 'Maths Optional',
    papers: 'Paper I & II',
    years: '2021, 2022, 2023, 2024',
    includes: 'Papers + Teacher-written model answers + marks map',
    free: false,
    icon: '∑',
    color: 'blue',
  },
  {
    title: 'Sociology PYQs + Model Answers 2021–2024',
    subject: 'Sociology Optional',
    papers: 'Paper I & II',
    years: '2021, 2022, 2023, 2024',
    includes: 'Papers + 6-part model answers + examiner notes',
    free: false,
    icon: '⚖',
    color: 'indigo',
  },
  {
    title: 'Maths Topic-Frequency Analysis 2000–2024',
    subject: 'Maths Optional',
    papers: 'All Units',
    years: '25-year frequency chart',
    includes: 'Topic frequency + examiner preference + teacher notes',
    free: false,
    icon: '∑',
    color: 'blue',
  },
  {
    title: 'Sociology Topic-Frequency Analysis 2000–2024',
    subject: 'Sociology Optional',
    papers: 'All Units',
    years: '25-year theme map',
    includes: 'Theme frequency + thinker coverage analysis',
    free: false,
    icon: '⚖',
    color: 'indigo',
  },
];

const blogCategories = [
  { key: 'all',       label: 'All Articles',         icon: BookOpen,  count: 24 },
  { key: 'maths',     label: 'Maths Optional',       icon: Target,    count: 9  },
  { key: 'sociology', label: 'Sociology Optional',   icon: PenTool,   count: 8  },
  { key: 'strategy',  label: 'Strategy & Planning',  icon: TrendingUp,count: 5  },
  { key: 'teachers',  label: 'Teacher Insights',     icon: Layers,    count: 2  },
];

const featuredBlogs = [
  {
    id: 'b1',
    category: 'maths',
    readTime: '8 min',
    title: 'Why Maths Optional is the Highest-Scoring Choice in UPSC Mains',
    excerpt: 'A data-backed analysis of Maths Optional score trends from 2015–2024 and why a well-prepared candidate regularly scores 300+. Includes our teacher\'s PYQ frequency breakdown.',
    img: IMG.mathsBoard,
    tag: 'bg-blue-100 text-blue-700',
    tagLabel: 'Maths Optional',
  },
  {
    id: 'b2',
    category: 'sociology',
    readTime: '7 min',
    title: 'How to Write a 20-Mark Sociology Answer That Scores 17+',
    excerpt: 'The CSE Circle\'s Sociology teacher shares the complete 6-part framework for high-scoring answers — with real illustrations of what separates a 12-mark answer from a 17-mark one.',
    img: IMG.answerWrite,
    tag: 'bg-indigo-100 text-indigo-700',
    tagLabel: 'Sociology Optional',
  },
  {
    id: 'b3',
    category: 'strategy',
    readTime: '10 min',
    title: 'Complete 6-Month Roadmap for UPSC Maths Optional',
    excerpt: 'A week-by-week preparation plan for Maths Optional — which topics to cover first, when to start answer writing, how to use PYQs, and how to build exam temperament.',
    img: IMG.studyDesk,
    tag: 'bg-green-100 text-green-700',
    tagLabel: 'Strategy',
  },
  {
    id: 'b4',
    category: 'teachers',
    readTime: '6 min',
    title: 'What a Great UPSC Optional Teacher Does Differently',
    excerpt: '7 specific teaching qualities that distinguish teachers whose students consistently score 280+ from those who plateau at 230. An honest, experience-backed breakdown.',
    img: IMG.mentoring,
    tag: 'bg-amber-100 text-amber-700',
    tagLabel: 'Teacher Insights',
  },
  {
    id: 'b5',
    category: 'sociology',
    readTime: '9 min',
    title: 'Sociology Optional vs Political Science: The Definitive Comparison',
    excerpt: 'GS overlap, scoring potential, preparation time, ideal candidate profile — a comprehensive, honest comparison to help you make the right optional choice.',
    img: IMG.discussion,
    tag: 'bg-indigo-100 text-indigo-700',
    tagLabel: 'Sociology Optional',
  },
  {
    id: 'b6',
    category: 'maths',
    readTime: '5 min',
    title: 'Topper Interview — AIR 47 on Scoring 312 in Maths Optional',
    excerpt: 'An exclusive interview with our CSE 2023 topper who scored 312 in Maths Optional — covering their complete strategy, books, and the specific teaching insights that made the difference.',
    img: IMG.library2,
    tag: 'bg-blue-100 text-blue-700',
    tagLabel: 'Maths Optional',
  },
];

// ─── MAIN PAGE ─────────────────────────────────────────────────────────────

export default function Resources() {
  const [bookTab, setBookTab]           = useState<'maths' | 'sociology'>('maths');
  const [pdfFilter, setPdfFilter]       = useState<'all' | 'maths' | 'sociology'>('all');
  const [blogCategory, setBlogCategory] = useState('all');
  const [searchQuery, setSearchQuery]   = useState('');

  const filteredPdfs = pyqPdfs.filter(p => {
    if (pdfFilter === 'all') return true;
    return pdfFilter === 'maths'
      ? p.subject === 'Maths Optional'
      : p.subject === 'Sociology Optional';
  });

  const filteredBlogs = featuredBlogs.filter(b => {
    const matchCat = blogCategory === 'all' || b.category === blogCategory;
    const matchSearch = searchQuery === '' ||
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen pt-20">

      {/* ═══════════════════════════════════════════════════════════════
          HERO — full image background
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG.hero} alt="UPSC study resources and books" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/96 via-blue-900/82 to-indigo-900/70" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-block bg-white/15 border border-white/25 text-white/85 text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-6">
                Free & Premium Learning Resources
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
                Every Resource You Need —<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
                  Built by Your Teachers.
                </span>
              </h1>
              <p className="text-white/72 text-base leading-relaxed mb-8 max-w-lg">
                Recommended books, free PYQ PDFs, teacher-written strategy blogs —
                all curated and created by the same experts who teach you.
                Nothing here is outsourced. Nothing is generic.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#pyq-pdfs">
                  <Button size="lg" className="group bg-amber-500 hover:bg-amber-400 text-white">
                    <Download size={17} className="mr-2" /> Download Free PYQs
                  </Button>
                </a>
                <a href="#blog-section">
                  <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10">
                    Read Strategy Blogs
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Right — quick nav cards */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="grid grid-cols-1 gap-3"
            >
              {[
                { icon: BookOpen,  label: 'Recommended Books',    sub: 'Teacher-curated reading lists — Maths & Sociology',  anchor: '#books',       color: 'from-blue-600 to-blue-700' },
                { icon: FileText,  label: 'PYQ PDF Downloads',    sub: '20+ years of past papers — free & enrolled access',  anchor: '#pyq-pdfs',    color: 'from-indigo-600 to-purple-700' },
                { icon: PenTool,   label: 'Strategy Blog Posts',  sub: 'Expert articles written by your teachers',            anchor: '#blog-section', color: 'from-blue-700 to-indigo-700' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={i}
                    href={item.anchor}
                    whileHover={{ x: 6 }}
                    className={`flex items-center gap-4 bg-gradient-to-r ${item.color} text-white rounded-2xl px-6 py-4 shadow-lg hover:shadow-xl transition-shadow group`}
                  >
                    <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-sm">{item.label}</p>
                      <p className="text-white/65 text-xs leading-snug">{item.sub}</p>
                    </div>
                    <ChevronRight size={16} className="text-white/50 group-hover:text-white transition-colors" />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 50L1440 50L1440 25C1200 50 960 0 720 25C480 50 240 0 0 25Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          RECOMMENDED BOOKS — tabbed by optional
      ═══════════════════════════════════════════════════════════════ */}
      <Section className="bg-white" id="books">

        {/* Section header with image banner */}
        <div className="relative h-48 md:h-56 rounded-3xl overflow-hidden mb-14 shadow-xl">
          <img src={IMG.classRoom} alt="Teacher-recommended books for UPSC optional" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-transparent flex items-center px-10 md:px-16">
            <div className="max-w-lg">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2">Teacher-Curated Reading Lists</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-snug">
                Recommended Books for<br />UPSC Optional Preparation
              </h2>
              <p className="text-white/65 text-sm leading-relaxed">
                Every book below is recommended directly by the subject teacher — based on years of teaching
                this exact optional to this exact examination.
              </p>
            </div>
          </div>
        </div>

        {/* Teacher note */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-8 max-w-3xl">
          <div className="flex gap-3 items-start">
            <Star size={16} className="text-amber-600 shrink-0 mt-0.5" />
            <p className="text-amber-800 text-sm leading-relaxed">
              <strong>Teacher's Note:</strong> The CSE Circle notes are your <em>primary</em> reference for both optionals —
              they are calibrated to how your teacher explains each concept in class.
              Standard books below supplement specific topics as directed. Do not collect more books than you need.
            </p>
          </div>
        </div>

        {/* Tab switcher */}
        <div className="flex gap-3 mb-8 flex-wrap">
          <button
            onClick={() => setBookTab('maths')}
            className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${bookTab === 'maths' ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            ∑ Maths Optional Books
          </button>
          <button
            onClick={() => setBookTab('sociology')}
            className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${bookTab === 'sociology' ? 'bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            ⚖ Sociology Optional Books
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={bookTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {(bookTab === 'maths' ? mathsBooks : sociologyBooks).map((book, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all group hover:border-blue-200"
                >
                  {/* Book spine visual */}
                  <div className={`h-1.5 rounded-full mb-4 ${bookTab === 'maths' ? (book.paper === 'Paper I' ? 'bg-blue-500' : 'bg-indigo-500') : (book.paper === 'Paper I' ? 'bg-purple-500' : book.paper === 'Both' ? 'bg-amber-500' : 'bg-pink-500')}`} />

                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h4 className="font-bold text-gray-900 text-sm leading-snug flex-1">{book.title}</h4>
                    {book.must && (
                      <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-0.5 rounded-full shrink-0">Must Read</span>
                    )}
                  </div>

                  <p className="text-gray-500 text-xs mb-3 leading-relaxed">{book.author}</p>

                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${book.tag}`}>{book.paper}</span>
                    <span className="text-gray-400 text-xs">{book.use}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Books CTA */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative h-40 rounded-2xl overflow-hidden shadow-lg group">
            <img src={IMG.mathsBoard} alt="Maths Optional books and study" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-blue-900/72 flex flex-col justify-end p-5">
              <p className="text-white font-bold text-sm mb-1">Maths Optional — Full Reading List</p>
              <p className="text-blue-200 text-xs mb-3">Including the teacher's topic-priority notes for each book.</p>
              <Link to="/maths-optional">
                <button className="text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 px-4 py-1.5 rounded-lg transition-colors inline-flex items-center gap-1.5">
                  Explore Maths Optional <ArrowRight size={12} />
                </button>
              </Link>
            </div>
          </div>
          <div className="relative h-40 rounded-2xl overflow-hidden shadow-lg group">
            <img src={IMG.discussion} alt="Sociology Optional books and study" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-indigo-900/72 flex flex-col justify-end p-5">
              <p className="text-white font-bold text-sm mb-1">Sociology Optional — Full Reading List</p>
              <p className="text-indigo-200 text-xs mb-3">Including the teacher's note on which chapters to prioritise.</p>
              <Link to="/sociology-optional">
                <button className="text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-1.5 rounded-lg transition-colors inline-flex items-center gap-1.5">
                  Explore Sociology Optional <ArrowRight size={12} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
          PYQ PDF DOWNLOADS
      ═══════════════════════════════════════════════════════════════ */}
      <Section className="bg-gradient-to-br from-gray-50 to-white" id="pyq-pdfs">

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

          {/* Left — image + context */}
          <div className="lg:col-span-2 space-y-4 lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-64 rounded-2xl overflow-hidden shadow-xl group"
            >
              <img src={IMG.pyqStudy} alt="PYQ PDF download UPSC" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/85 to-transparent flex items-end p-6">
                <div>
                  <div className="text-4xl font-black text-amber-400 mb-1">20+</div>
                  <p className="text-white font-bold text-sm">Years of PYQs Available</p>
                  <p className="text-gray-300 text-xs mt-0.5">2000–2024 · Maths Optional + Sociology Optional</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow">
                Free — No Login
              </div>
            </motion.div>

            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
              <p className="font-bold text-gray-900 text-sm mb-3">What's Included in Free PDFs</p>
              {['Complete original question papers', 'Topic-wise classification for all units', 'Frequency count (which topics appear most)', 'Both Paper I and Paper II'].map((f, i) => (
                <div key={i} className="flex items-center gap-2 py-1.5 border-b border-gray-50 last:border-0">
                  <Unlock size={13} className="text-green-600 shrink-0" />
                  <span className="text-gray-600 text-xs">{f}</span>
                </div>
              ))}
            </div>

            <div className="bg-blue-600 text-white rounded-2xl p-5 shadow-sm">
              <p className="font-bold text-sm mb-2">Enrolled Students Get More</p>
              {['Teacher-written model answers', 'Marks-per-step breakdown (Maths)', '6-part answer frameworks (Sociology)', 'Examiner preference notes per topic'].map((f, i) => (
                <div key={i} className="flex items-center gap-2 py-1.5">
                  <Star size={12} className="text-amber-400 shrink-0" />
                  <span className="text-blue-100 text-xs">{f}</span>
                </div>
              ))}
              <Link to="/contact" className="block mt-4">
                <button className="w-full bg-white text-blue-700 font-bold text-xs py-2.5 rounded-xl hover:bg-blue-50 transition-colors">
                  Enrol to Access →
                </button>
              </Link>
            </div>
          </div>

          {/* Right — PDF grid */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-1">UPSC Previous Year Question Papers</p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-snug">
                PYQ PDF Downloads
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                Download complete UPSC Maths Optional and Sociology Optional PYQs.
                Free papers (2010–2020) require no login. Recent papers with model answers are for enrolled students.
              </p>

              {/* Filter */}
              <div className="flex gap-2 mb-6 flex-wrap">
                {(['all', 'maths', 'sociology'] as const).map((f) => (
                  <button
                    key={f}
                    onClick={() => setPdfFilter(f)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                      pdfFilter === f
                        ? f === 'sociology' ? 'bg-indigo-600 text-white' : 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {f === 'all' ? 'All PDFs' : f === 'maths' ? '∑ Maths Optional' : '⚖ Sociology Optional'}
                  </button>
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={pdfFilter}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
                className="space-y-3"
              >
                {filteredPdfs.map((pdf, i) => {
                  const isMaths = pdf.color === 'blue';
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className={`bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex items-center gap-5 group ${pdf.free ? 'hover:border-green-200' : 'hover:border-amber-200'}`}
                    >
                      {/* Icon */}
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-black shrink-0 ${isMaths ? 'bg-blue-50 text-blue-700' : 'bg-indigo-50 text-indigo-700'}`}>
                        {pdf.icon}
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <h4 className="font-bold text-gray-900 text-sm leading-snug">{pdf.title}</h4>
                          {pdf.free
                            ? <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full shrink-0">Free</span>
                            : <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-0.5 rounded-full shrink-0">Enrolled Only</span>
                          }
                        </div>
                        <p className="text-gray-400 text-xs mb-1">{pdf.years} · {pdf.papers}</p>
                        <p className="text-gray-500 text-xs leading-snug">{pdf.includes}</p>
                      </div>

                      {/* Action */}
                      <div className="shrink-0">
                        {pdf.free ? (
                          <button className="flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors shadow-sm">
                            <Download size={13} /> Download
                          </button>
                        ) : (
                          <Link to="/contact">
                            <button className="flex items-center gap-1.5 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors shadow-sm">
                              <Lock size={13} /> Enrol
                            </button>
                          </Link>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            <div className="mt-6">
              <Link to="/pyq">
                <Button variant="outline" className="group">
                  View Full PYQ Bank & Frequency Analysis
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={15} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
          STUDY MATERIAL OVERVIEW — 3 pillars
      ═══════════════════════════════════════════════════════════════ */}
      <Section className="bg-white">
        <SectionTitle
          title="What's Inside Our Study Material"
          subtitle="Every resource at The CSE Circle is created by the teacher — not outsourced, not compiled. Here is what that means in practice."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {[
            {
              img:   IMG.mathsBoard,
              icon:  '∑',
              title: 'Maths Optional Notes',
              color: 'blue',
              from:  'from-blue-600', to: 'to-blue-800',
              points: [
                'Concept-first explanations before formula delivery',
                'Step-by-step worked examples for every topic',
                'PYQ-aligned — every note maps to past questions',
                'Marks-per-step breakdown for answer presentation',
                'Updated after every UPSC Mains paper',
              ],
              link: '/maths-optional',
              cta: 'Explore Maths Optional →',
            },
            {
              img:   IMG.discussion,
              icon:  '⚖',
              title: 'Sociology Optional Notes',
              color: 'indigo',
              from:  'from-indigo-600', to: 'to-purple-700',
              points: [
                'Thinker-wise notes with intellectual biography context',
                'Theory + Today integration — current affairs built in',
                '6-part answer structure in every model answer',
                'Paper II maps directly to GS Paper I topics',
                'Updated monthly with current affairs integration',
              ],
              link: '/sociology-optional',
              cta: 'Explore Sociology Optional →',
            },
            {
              img:   IMG.answerWrite,
              icon:  '✍',
              title: 'Answer Writing Workbook',
              color: 'green',
              from:  'from-green-600', to: 'to-teal-600',
              points: [
                'PYQ-based answer writing prompts for every topic',
                'Sample answers at 3 performance levels (12 / 15 / 17 marks)',
                'Common mistakes annotated with correction guidance',
                'Rubric used by teacher to evaluate submissions',
                'Progressive difficulty — Week 1 to Exam Month',
              ],
              link: '/contact',
              cta: 'Enrol to Access →',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 group hover:shadow-xl transition-shadow"
            >
              {/* Image header */}
              <div className="relative h-44 overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className={`absolute inset-0 bg-gradient-to-t ${item.from.replace('from-', 'from-').split('from-')[1] ? `from-${item.from.split('-')[1]}-900/90` : 'from-gray-900/90'} to-transparent flex items-end p-5`}
                  style={{ background: `linear-gradient(to top, rgba(0,0,0,0.85), transparent)` }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{item.icon}</span>
                    <h3 className="text-white font-bold text-base">{item.title}</h3>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="bg-white p-6">
                <ul className="space-y-2 mb-5">
                  {item.points.map((pt, pi) => (
                    <li key={pi} className="flex items-start gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${item.color === 'blue' ? 'bg-blue-500' : item.color === 'indigo' ? 'bg-indigo-500' : 'bg-green-500'}`} />
                      <span className="text-gray-600 text-xs leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>
                <Link to={item.link}>
                  <button className={`w-full py-2.5 rounded-xl text-sm font-bold text-white transition-colors bg-gradient-to-r ${item.from} ${item.to} hover:opacity-90`}>
                    {item.cta}
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
          BLOG / ARTICLES — filterable with search
      ═══════════════════════════════════════════════════════════════ */}
      <Section className="bg-gradient-to-br from-gray-50 to-white" id="blog-section">

        {/* Section header with image banner */}
        <div className="relative h-48 md:h-56 rounded-3xl overflow-hidden mb-12 shadow-xl">
          <img src={IMG.library2} alt="Strategy blogs and articles by UPSC teachers" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/88 via-gray-900/60 to-transparent flex items-center px-10 md:px-16">
            <div className="max-w-lg">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2">Written by Your Teachers</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Strategy Blogs & Articles</h2>
              <p className="text-white/65 text-sm leading-relaxed">
                In-depth articles on optional strategy, answer writing, PYQ analysis, topper interviews,
                and current affairs integration — all written by the teachers, not content agencies.
              </p>
            </div>
          </div>
        </div>

        {/* Search + Category Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-start md:items-center">
          {/* Search */}
          <div className="relative flex-1 max-w-sm">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200 bg-white"
            />
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {blogCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.key}
                  onClick={() => setBlogCategory(cat.key)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                    blogCategory === cat.key
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-white border border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-600'
                  }`}
                >
                  <Icon size={12} />
                  {cat.label}
                  <span className={`text-xs ${blogCategory === cat.key ? 'text-blue-200' : 'text-gray-400'}`}>({cat.count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Blog grid — featured cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${blogCategory}-${searchQuery}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            {filteredBlogs.length === 0 ? (
              <div className="text-center py-16 text-gray-400">
                <Filter size={32} className="mx-auto mb-3 opacity-40" />
                <p className="font-semibold text-sm">No articles match your search.</p>
                <button onClick={() => { setBlogCategory('all'); setSearchQuery(''); }} className="text-blue-600 text-xs mt-2 hover:underline">
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBlogs.map((blog, i) => (
                  <motion.div
                    key={blog.id}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: i * 0.07 }}
                    className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group cursor-pointer"
                  >
                    {/* Blog image */}
                    <div className="relative h-44 overflow-hidden">
                      <img src={blog.img} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${blog.tag}`}>{blog.tagLabel}</span>
                      </div>
                      <div className="absolute bottom-4 right-4 bg-black/40 text-white text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1">
                        <Clock size={11} />
                        {blog.readTime}
                      </div>
                    </div>

                    {/* Blog body */}
                    <div className="p-5">
                      <h3 className="font-bold text-gray-900 text-sm leading-snug mb-2 group-hover:text-blue-700 transition-colors line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="text-gray-500 text-xs leading-relaxed line-clamp-3 mb-4">{blog.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-blue-600 text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read Article <ArrowRight size={12} />
                        </span>
                        <ExternalLink size={13} className="text-gray-300 group-hover:text-blue-400 transition-colors" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Dynamic blog data from data.ts */}
        {blogPosts && blogPosts.length > 0 && (
          <div className="mt-14">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-gray-900">More from the Blog</h3>
              <Link to="/resources" className="text-blue-600 text-sm font-semibold hover:underline flex items-center gap-1">
                View All <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7 max-w-4xl">
              {blogPosts.map((post) => (
                <BlogCard key={post.id} {...post} />
              ))}
            </div>
          </div>
        )}
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
          NEWSLETTER + FINAL CTA
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG.classRoom} alt="The CSE Circle resources" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800/97 via-blue-800/90 to-indigo-800/85" />
        </div>

        <div className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center max-w-5xl mx-auto">

            {/* Left — newsletter */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2">Weekly Teacher Insights</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-snug">
                Get Strategy Updates<br />Directly from the Teachers.
              </h2>
              <p className="text-blue-100 text-sm leading-relaxed mb-6">
                One email per week — new blog posts, PYQ analysis updates, current affairs integration
                notes, and preparation strategy tips. Written by the teachers. No promotional content.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-5 py-3.5 rounded-xl text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white"
                />
                <button className="bg-amber-500 hover:bg-amber-400 text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-colors shadow-lg whitespace-nowrap">
                  Subscribe Free
                </button>
              </div>
              <p className="text-blue-300 text-xs mt-3">No spam. Unsubscribe anytime. ~350 word weekly email.</p>
            </motion.div>

            {/* Right — CTA to programmes */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-2">Ready to Go Deeper?</p>
              {[
                { label: 'Download All Free PYQs',          sub: 'No registration needed — 2010 to 2020',  link: '#pyq-pdfs',           bg: 'bg-white/10 hover:bg-white/20', icon: Download },
                { label: 'Book a Free Demo Class',           sub: 'Meet your teacher before you commit',     link: '/contact',            bg: 'bg-amber-500 hover:bg-amber-400', icon: ArrowRight },
                { label: 'Explore Maths Optional Programme', sub: 'Complete syllabus · PYQs · Live teaching', link: '/maths-optional',    bg: 'bg-blue-600 hover:bg-blue-700', icon: BookOpen  },
                { label: 'Explore Sociology Optional',       sub: 'Theory + Today · 6-part answer framework', link: '/sociology-optional', bg: 'bg-indigo-600 hover:bg-indigo-700', icon: PenTool },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <Link key={i} to={item.link}>
                    <motion.div
                      whileHover={{ x: 4 }}
                      className={`flex items-center gap-4 ${item.bg} text-white rounded-xl px-5 py-3.5 transition-colors cursor-pointer group mb-3`}
                    >
                      <Icon size={16} className="shrink-0" />
                      <div className="flex-1">
                        <p className="font-bold text-sm">{item.label}</p>
                        <p className="text-white/60 text-xs">{item.sub}</p>
                      </div>
                      <ChevronRight size={14} className="text-white/40 group-hover:text-white transition-colors" />
                    </motion.div>
                  </Link>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
