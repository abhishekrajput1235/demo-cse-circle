import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, BookOpen, PenTool, CheckCircle, Star,
  ChevronDown, ChevronUp, Users, Clock, Target,
  MessageSquare, Layers, TrendingUp, Lightbulb
} from 'lucide-react';
import Button from '../components/Button';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';

// ─── DATA ──────────────────────────────────────────────────────────────────

const mathsTeacher = {
  id: 'maths',
  name: 'Prof. [Teacher Name]',
  subject: 'Maths Optional',
  tagline: 'Concept-first. Proof-rooted. Deeply patient.',
  qualification: 'MSc Mathematics — [University Name]',
  experience: '10+ Years Teaching UPSC Maths Optional Exclusively',
  selections: '200+ Students Guided to Selection',
  accentFrom: 'from-blue-600',
  accentTo: 'to-blue-800',
  accentLight: 'bg-blue-50',
  accentText: 'text-blue-700',
  accentBorder: 'border-blue-600',
  accentBadge: 'bg-blue-100 text-blue-700',
  symbol: '∑',
  quote:
    'Mathematics is not difficult — it is unfamiliar. My job is to make it familiar, one concept at a time. Once a student truly understands why a theorem works — not just what it says — they can handle any question the examiner throws at them.',
  bio: [
    'For over a decade, I have taught one subject to one examination. Not university calculus. Not school algebra. Exclusively UPSC Mathematics Optional — Paper I and Paper II, every topic, every question pattern, every examiner nuance.',
    'My teaching begins with a question I ask every new student: "What is the last Maths topic you genuinely understood — not memorised, but understood?" That question tells me everything I need to know about where to start.',
    'I have analysed every UPSC Maths Optional paper from 2000 to the present. I know which topics appear in 9 of every 10 papers. I know which question types earn partial marks even with an incorrect final answer. I know how a 3-hour paper should be attempted — in what sequence, with what time allocation, and when to move on. This is not theory. This is the accumulated knowledge of 10 years of watching students walk in and out of that examination hall.',
    'What my students consistently say about my teaching is that I make the intimidating feel manageable. Abstract Algebra. Real Analysis. Differential Geometry. These sound like walls — until you see them as connected ideas that build on each other logically. That is what I teach: the logic that connects, not the formulas to memorise.',
  ],
  skills: [
    { icon: BookOpen,    label: 'Subject Mastery',        desc: 'Deep expertise across all 18 UPSC Maths Optional topics — Paper I & Paper II' },
    { icon: Target,      label: 'PYQ Pattern Analysis',   desc: '20+ years of past papers mapped by topic, difficulty, and examiner preference' },
    { icon: PenTool,     label: 'Answer Writing',         desc: 'Step-by-step evaluation with marks-per-step feedback on every answer submitted' },
    { icon: Lightbulb,   label: 'Concept-First Method',   desc: 'Builds understanding from first principles — not formula delivery or rote teaching' },
    { icon: MessageSquare, label: 'Direct Doubt Access',  desc: 'Weekly live sessions with the teacher — no TAs, no queue systems' },
    { icon: Layers,      label: 'Structured Sequencing',  desc: 'Topics sequenced by logical dependency, not by syllabus order, for deeper retention' },
  ],
  methodology: [
    { step: '01', title: 'PYQ Before Theory',       body: 'Every topic begins with a real past-year question. Before I teach a single definition, you see exactly what the examiner asked and what a full-marks answer looks like.' },
    { step: '02', title: 'Why Before What',          body: 'I never state a theorem without explaining why it is true. When you understand the reason, you can reconstruct it on exam day — even under pressure.' },
    { step: '03', title: 'Worked Problems Aloud',    body: 'I solve problems step by step on video, narrating every decision I make. You watch the thinking process — not just the final answer.' },
    { step: '04', title: 'Your Turn — Independently', body: 'You attempt the next problem before I show the solution. This builds genuine problem-solving ability, not dependency on the teacher.' },
    { step: '05', title: 'Answer Writing & Marking', body: 'You write a complete exam-format answer. I annotate it with marks per step and specific written feedback. A number tells you nothing — my annotation tells you everything.' },
    { step: '06', title: 'Timed PYQ Under Pressure', body: 'You attempt actual past questions under timed, exam conditions. From Week 1. Confidence is built through realistic practice, not comfort.' },
  ],
  topics: [
    'Linear Algebra', 'Calculus', 'Analytic Geometry', 'ODE',
    'Dynamics & Statics', 'Vector Analysis', 'Abstract Algebra',
    'Real Analysis', 'Complex Analysis', 'PDE',
    'Numerical Analysis', 'Statistics', 'Linear Programming',
    'Mechanics', 'Fluid Dynamics', 'Differential Geometry',
  ],
  testimonials: [
    {
      name: 'Aditya Kumar',
      rank: 'IAS — AIR 47, CSE 2023',
      score: 'Maths Optional: 312 / 500',
      text: 'My teacher is the most technically precise educator I have encountered — in any setting. They narrate the thinking process out loud while solving, which is exactly how a student learns to think. By Month 4 I was solving questions I would have found impossible in Month 1. Not because I worked harder — because I was taught better.',
    },
    {
      name: 'Arjun Pillai',
      rank: 'IAS — AIR 67, CSE 2022',
      score: 'Maths Optional: 304 / 500',
      text: 'The PYQ analysis sessions were unlike anything I had experienced. Twice a month, the teacher would take us through a paper — explaining why certain questions appeared, what concept they were really testing, and what a perfect answer would look like. Those sessions built an examiner-awareness I could not have developed alone.',
    },
    {
      name: 'Rahul Verma',
      rank: 'IRS — AIR 152, CSE 2022',
      score: 'Maths Optional: 287 / 500',
      text: 'I want to say something specific about the feedback process. My teacher writes more on my evaluated answers than I write in the answers themselves. Every evaluation is a teaching document — not a score sheet. I kept every single feedback sheet and re-read them. That was as valuable as attending new classes.',
    },
  ],
};

const sociologyTeacher = {
  id: 'sociology',
  name: 'Prof. [Teacher Name]',
  subject: 'Sociology Optional',
  tagline: 'Analytical. Contemporary. Genuinely invested in you.',
  qualification: 'MA / PhD Sociology — [University Name]',
  experience: '8+ Years Teaching UPSC Sociology Optional Exclusively',
  selections: '300+ Students Guided to Selection',
  accentFrom: 'from-indigo-600',
  accentTo: 'to-purple-700',
  accentLight: 'bg-indigo-50',
  accentText: 'text-indigo-700',
  accentBorder: 'border-indigo-600',
  accentBadge: 'bg-indigo-100 text-indigo-700',
  symbol: '⚖',
  quote:
    'Sociology is not abstract theory for its own sake — it is the most powerful lens we have to understand Indian society and the challenges an IAS officer will actually face. My goal is to make sure students walk into the exam not just remembering what Durkheim said, but knowing exactly how to use it.',
  bio: [
    `I teach one subject. I have taught it for years. And I have never stopped learning it myself — because Sociology, unlike most subjects, changes with the world it studies.`,
    `What I noticed early in my teaching career is that most Sociology Optional students fail not because they lack knowledge, but because they lack a sociological lens. They can recite Durkheim's definition of social fact. They cannot use it to analyse a 2024 news story in a 20-mark answer. My entire teaching methodology is designed to close that gap.`,
    `My signature approach — what students call "Theory + Today" — means that every class connects classical sociological theory to a current Indian example. We read the newspaper through Weber. We understand the farmers' protests through Gramsci. We analyse gender data through feminist sociology. By the time a student has finished my programme, their reading of the world has genuinely changed. And that shows in their answers.`,
    `I have evaluated thousands of Sociology Optional answers over the years. I know exactly what a 17-mark answer looks like versus a 12-mark answer — and more importantly, I know how to take a student from one to the other. This is the teaching I bring to The CSE Circle.`,
  ],
  skills: [
    { icon: BookOpen,     label: 'Thinker-Wise Depth',       desc: 'Every major sociological thinker taught as a living idea — not a name to memorise' },
    { icon: Target,       label: 'PYQ Theme Analysis',        desc: 'Recurring themes, examiner preferences, and high-weightage topics identified across 20 years' },
    { icon: PenTool,      label: '6-Part Answer Framework',   desc: 'Structured framework taught from Week 1 — introduction, theory, evidence, relevance, critique, conclusion' },
    { icon: TrendingUp,   label: 'Current Affairs Integration', desc: 'Monthly sessions connecting live news events to the sociological concepts studied that week' },
    { icon: MessageSquare, label: 'Direct Doubt Access',      desc: 'Weekly live sessions — conceptual doubts and answer writing doubts both addressed by the teacher' },
    { icon: Lightbulb,    label: 'Analytical Writing',        desc: 'Transforms descriptive students into analytical writers — the single biggest score differentiator' },
  ],
  methodology: [
    { step: '01', title: 'Thinker as Biography',         body: 'Every sociological thinker is taught as an intellectual story — what problem they were solving, what world they lived in, and why their idea was revolutionary. Students remember thinkers as ideas, not names.' },
    { step: '02', title: 'Theory + Today',               body: 'Every concept is immediately connected to a current Indian example — a newspaper story, a government report, a social movement. Theory becomes a tool you carry with you, not a fact you leave in the classroom.' },
    { step: '03', title: 'The 6-Part Answer Structure',   body: 'From Week 1, I teach a precise answer framework: Introduction → Theoretical Framework → Empirical Evidence → Contemporary Relevance → Critical Evaluation → Conclusion. Every answer is evaluated against this structure.' },
    { step: '04', title: 'Side-by-Side Model Answers',   body: 'After every answer writing session, I share my own model answer. Students compare directly — seeing exactly where marks were gained and lost against a benchmark.' },
    { step: '05', title: 'Progress Tracking by Answer',  body: 'I maintain a folder of each student\'s submitted answers across the course. We compare your Month 1 answer to your Month 5 answer together. Growth that is visible is growth that motivates.' },
    { step: '06', title: 'GS Integration',               body: 'Sociology Paper II overlaps deeply with GS Paper I. I teach both simultaneously — so every hour you spend on your optional strengthens your General Studies preparation too.' },
  ],
  topics: [
    'Sociological Theory', 'Research Methods', 'Sociological Thinkers',
    'Social Stratification', 'Work & Economic Life', 'Politics & Society',
    'Religion', 'Systems of Kinship', 'Indian Social Structure',
    'Caste System', 'Tribal Communities', 'Social Movements',
    'Agrarian Society', 'Gender & Society', 'Population Dynamics',
    'Urbanisation & Change',
  ],
  testimonials: [
    {
      name: 'Priya Sharma',
      rank: 'IPS — AIR 89, CSE 2023',
      score: 'Sociology Optional: 298 / 500',
      text: 'What my teacher did that nobody else had done was make me stop treating theory as information to memorise and start treating it as a tool to use. Once that shifted — once I understood that Durkheim\'s idea is a lens, not a fact — my answer writing changed completely. My second-attempt score was 80 marks higher. That is entirely a teaching outcome.',
    },
    {
      name: 'Sneha Iyer',
      rank: 'IFS — AIR 203, CSE 2023',
      score: 'Sociology Optional: 275 / 500',
      text: 'The thing that surprised me most was how personally my teacher knew me as a student. By Month 3, they could predict — correctly — which type of question I would underperform on and exactly why. That level of individual attention is not something you get from any platform that treats teaching as content delivery.',
    },
    {
      name: 'Meera Nair',
      rank: 'IRS — AIR 134, CSE 2023',
      score: 'Sociology Optional: 283 / 500',
      text: 'The "Theory + Today" sessions changed how I read the newspaper. Every morning, I could connect what I was reading to the sociological framework we had studied. By the time of the exam, answering questions felt natural — because I had been practising sociological thinking every single day, not just during study hours.',
    },
  ],
};

const sharedSkills = [
  { icon: CheckCircle, label: 'UPSC-Specific Teaching', desc: 'Not academic teaching adapted for UPSC — built for UPSC from the ground up' },
  { icon: Users,       label: 'Small Batch Sizes',      desc: 'Deliberate limits so every student\'s name, progress, and weak areas are known to the teacher' },
  { icon: Clock,       label: 'Flexible Access',        desc: 'All live sessions recorded; flexible doubt slots for working professionals' },
  { icon: Star,        label: 'Teacher-Written Notes',  desc: 'Study material written by the teacher — calibrated to how they explain in class' },
];

// ─── SUB-COMPONENTS ────────────────────────────────────────────────────────

function TeacherHero({ teacher }: { teacher: typeof mathsTeacher }) {
  return (
    <div className={`bg-gradient-to-br ${teacher.accentFrom} ${teacher.accentTo} text-white rounded-3xl overflow-hidden shadow-2xl`}>
      <div className="grid grid-cols-1 lg:grid-cols-5">
        {/* Left panel */}
        <div className="lg:col-span-2 p-10 flex flex-col justify-between bg-black/20">
          <div>
            <div className="text-7xl mb-6 opacity-80">{teacher.symbol}</div>
            <span className={`inline-block ${teacher.accentBadge} bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4`}>
              {teacher.subject}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">{teacher.name}</h2>
            <p className="text-white/70 text-sm font-medium italic mb-6">{teacher.tagline}</p>

            <div className="space-y-3">
              {[
                teacher.qualification,
                teacher.experience,
                teacher.selections,
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-white/60 mt-0.5 shrink-0" />
                  <span className="text-white/80 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quote */}
          <div className="mt-8 border-t border-white/20 pt-6">
            <p className="text-white/75 text-sm italic leading-relaxed">"{teacher.quote}"</p>
          </div>
        </div>

        {/* Right panel — bio */}
        <div className="lg:col-span-3 bg-white/5 backdrop-blur-sm p-10">
          <h3 className="text-lg font-bold text-white/90 mb-6 uppercase tracking-widest text-xs">
            In the Teacher's Own Words
          </h3>
          <div className="space-y-4">
            {teacher.bio.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-white/80 text-sm leading-7"
              >
                {para}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillGrid({ teacher }: { teacher: typeof mathsTeacher }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {teacher.skills.map((skill, i) => {
        const Icon = skill.icon;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className={`rounded-xl p-5 border border-gray-100 hover:shadow-lg transition-shadow ${teacher.accentLight}`}
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 bg-gradient-to-br ${teacher.accentFrom} ${teacher.accentTo}`}>
              <Icon size={20} className="text-white" />
            </div>
            <h4 className="font-bold text-gray-900 text-sm mb-1">{skill.label}</h4>
            <p className="text-gray-500 text-xs leading-relaxed">{skill.desc}</p>
          </motion.div>
        );
      })}
    </div>
  );
}

function MethodologyTimeline({ teacher }: { teacher: typeof mathsTeacher }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {teacher.methodology.map((m, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: i * 0.08 }}
          className={`flex gap-5 p-5 rounded-xl bg-white border-l-4 ${teacher.accentBorder} shadow-sm hover:shadow-md transition-shadow`}
        >
          <div className={`text-3xl font-black ${teacher.accentText} opacity-30 leading-none shrink-0`}>{m.step}</div>
          <div>
            <h4 className="font-bold text-gray-900 text-sm mb-1">{m.title}</h4>
            <p className="text-gray-500 text-xs leading-relaxed">{m.body}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function TopicCloud({ teacher }: { teacher: typeof mathsTeacher }) {
  return (
    <div className="flex flex-wrap gap-2">
      {teacher.topics.map((t) => (
        <span
          key={t}
          className={`${teacher.accentBadge} text-xs font-semibold px-3 py-1.5 rounded-full`}
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function TestimonialRow({ teacher }: { teacher: typeof mathsTeacher }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {teacher.testimonials.map((t, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: i * 0.1 }}
          className={`rounded-xl p-6 bg-white border border-gray-100 border-t-4 ${teacher.accentBorder} shadow-sm hover:shadow-lg transition-shadow`}
        >
          <div className={`text-4xl font-serif ${teacher.accentText} opacity-30 leading-none mb-3`}>"</div>
          <p className="text-gray-600 text-sm leading-relaxed italic mb-5">{t.text}</p>
          <div className={`border-t border-gray-100 pt-4`}>
            <p className="font-bold text-gray-900 text-sm">{t.name}</p>
            <p className={`${teacher.accentText} text-xs font-semibold`}>{t.rank}</p>
            <p className="text-gray-400 text-xs mt-0.5">{t.score}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function TeacherSection({ teacher }: { teacher: typeof mathsTeacher }) {
  const [openTab, setOpenTab] = useState<'method' | 'skills' | 'topics' | 'testimonials'>('method');

  const tabs: { key: typeof openTab; label: string }[] = [
    { key: 'method',       label: 'Teaching Method'   },
    { key: 'skills',       label: 'Teaching Skills'   },
    { key: 'topics',       label: 'Topics Covered'    },
    { key: 'testimonials', label: 'Student Voices'    },
  ];

  return (
    <div className="space-y-10">
      <TeacherHero teacher={teacher} />

      {/* Tab nav */}
      <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-px">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setOpenTab(tab.key)}
            className={`px-5 py-2.5 text-sm font-semibold rounded-t-lg transition-all ${
              openTab === tab.key
                ? `bg-gradient-to-br ${teacher.accentFrom} ${teacher.accentTo} text-white shadow`
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={openTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
        >
          {openTab === 'method'       && <MethodologyTimeline teacher={teacher} />}
          {openTab === 'skills'       && <SkillGrid teacher={teacher} />}
          {openTab === 'topics'       && (
            <div className={`rounded-2xl p-8 ${teacher.accentLight}`}>
              <p className="text-sm text-gray-500 mb-5">
                Every topic below is taught by the same teacher — not outsourced to different faculty across the programme.
              </p>
              <TopicCloud teacher={teacher} />
            </div>
          )}
          {openTab === 'testimonials' && <TestimonialRow teacher={teacher} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function AccordionItem({
  question, answer, open, onClick,
}: {
  question: string; answer: string; open: boolean; onClick: () => void;
}) {
  return (
    <div
      className={`border rounded-xl overflow-hidden transition-all ${open ? 'border-blue-300 shadow-md' : 'border-gray-200'}`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-5 text-left gap-4"
      >
        <span className={`font-semibold text-sm ${open ? 'text-blue-700' : 'text-gray-800'}`}>{question}</span>
        {open ? <ChevronUp size={18} className="text-blue-600 shrink-0" /> : <ChevronDown size={18} className="text-gray-400 shrink-0" />}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-gray-500 text-sm leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── MAIN PAGE ─────────────────────────────────────────────────────────────

export default function Teachers() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Will I have direct access to the teacher — or is it a TA system?',
      a: 'Direct access to your teacher is central to how The CSE Circle works. Live doubt sessions are conducted by the subject teacher, not teaching assistants. When you submit an answer for evaluation, it is your teacher who reads and annotates it. This is non-negotiable for us — because the teaching relationship only works when it is genuine and direct.',
    },
    {
      q: 'How does the teacher personalise the programme for each student?',
      a: 'In the first two weeks, the teacher conducts a diagnostic assessment — a short test or a direct conversation about your background, previous preparation, and specific weak areas. From this, they build a personalised study plan that adjusts topic sequencing, pacing, and answer writing frequency. As the programme progresses, this plan evolves based on test performance and observation of your written work.',
    },
    {
      q: 'Does the teacher write the study material themselves?',
      a: 'Yes. The study notes for both Maths Optional and Sociology Optional at The CSE Circle are written by the subject teachers — not sourced from publishers or compiled from other materials. The notes are calibrated to how the teacher explains concepts in class, making them significantly more useful as a revision tool than generic market notes.',
    },
    {
      q: 'How many students does each teacher teach per batch?',
      a: 'We deliberately keep batch sizes small to preserve the quality of the teaching relationship. Our teachers cannot provide genuine personalised attention to 500 students — and we do not pretend otherwise. Batch sizes are limited so that every student\'s answers are actually read, every doubt is actually addressed, and the teacher genuinely knows each student\'s preparation profile.',
    },
    {
      q: 'Can I attend a demo class before enrolling?',
      a: 'Yes — and we actively encourage it. A free demo class is available for both Maths Optional and Sociology Optional. Experience the teacher\'s style, ask them questions directly, and see how they explain a topic before you make any commitment. We have nothing to hide, and the demo class is the most honest way to evaluate whether this is the right fit for you.',
    },
    {
      q: 'What if I am joining mid-preparation — will the teacher accommodate me?',
      a: 'Absolutely. Many students join The CSE Circle after a semester at another institute or after months of self-study. The teacher begins with a brief diagnostic to understand where you are, then builds a forward plan from that point — covering any critical gaps while ensuring you do not repeat what you have already mastered.',
    },
  ];

  return (
    <div className="min-h-screen">

      {/* ── PAGE HERO ──────────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-white overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-700/10 -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-indigo-600/10 translate-y-1/2 -translate-x-1/4 blur-2xl" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block bg-white/10 border border-white/20 text-white/80 text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-6">
              The People Behind The Circle
            </span>

            {/* H1 */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Meet the Teachers
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                Behind The CSE Circle.
              </span>
            </h1>

            <p className="text-white/65 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              At The CSE Circle, the teacher is not a supporting role — the teacher is everything.
              Two dedicated experts. Two optional subjects. One uncompromising commitment to genuine teaching.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#maths-teacher">
                <Button size="lg" className="group bg-blue-600 hover:bg-blue-700">
                  Maths Optional Teacher
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Button>
              </a>
              <a href="#sociology-teacher">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Sociology Optional Teacher
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Teacher belief cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {[
              { icon: '🎯', title: 'Two Subjects Only',    body: 'Every teacher specialises in one optional and nothing else — so their knowledge of the exam is total.' },
              { icon: '✍️', title: 'Personal Feedback',   body: 'Your teacher reads and annotates every answer you submit. No TAs. No automated scoring.' },
              { icon: '🔍', title: 'PYQ-First Always',    body: 'Both teachers build their entire pedagogy around what UPSC has actually asked — not what textbooks cover.' },
            ].map((card, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left">
                <div className="text-3xl mb-3">{card.icon}</div>
                <h3 className="font-bold text-white text-sm mb-2">{card.title}</h3>
                <p className="text-white/55 text-xs leading-relaxed">{card.body}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SHARED TEACHING STANDARDS ──────────────────────────────────────── */}
      <Section className="bg-white">
        <SectionTitle
          title="What Both Teachers Share"
          subtitle="Before you meet each teacher individually — here is what every student at The CSE Circle can expect from any teacher on this platform."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sharedSkills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-white" />
                </div>
                <h4 className="font-bold text-gray-900 text-sm mb-2">{skill.label}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{skill.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* ── MATHS TEACHER ──────────────────────────────────────────────────── */}
      <Section className="bg-gradient-to-br from-blue-50 to-white" id="maths-teacher">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-1 h-12 rounded-full bg-gradient-to-b from-blue-600 to-blue-800" />
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-1">Maths Optional</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Your Mathematics Teacher</h2>
          </div>
        </div>
        <TeacherSection teacher={mathsTeacher} />
        <div className="mt-10 text-center">
          <Link to="/maths-optional">
            <Button size="lg" className="group bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900">
              Explore Maths Optional Programme
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
          </Link>
        </div>
      </Section>

      {/* ── DIVIDER ────────────────────────────────────────────────────────── */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      {/* ── SOCIOLOGY TEACHER ──────────────────────────────────────────────── */}
      <Section className="bg-gradient-to-br from-indigo-50 to-white" id="sociology-teacher">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-1 h-12 rounded-full bg-gradient-to-b from-indigo-600 to-purple-700" />
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-1">Sociology Optional</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Your Sociology Teacher</h2>
          </div>
        </div>
        <TeacherSection teacher={sociologyTeacher} />
        <div className="mt-10 text-center">
          <Link to="/sociology-optional">
            <Button size="lg" className="group bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800">
              Explore Sociology Optional Programme
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
          </Link>
        </div>
      </Section>

      {/* ── TEACHING SKILLS COMPARISON ─────────────────────────────────────── */}
      <Section className="bg-white">
        <SectionTitle
          title="Teaching Skills — Side by Side"
          subtitle="Both teachers are specialists. Here is how their specific expertise and methods compare."
        />
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="text-left p-4 font-semibold text-gray-300 w-1/4">Teaching Skill</th>
                <th className="text-left p-4 font-semibold text-blue-400">
                  <span className="text-xl mr-2">∑</span> Maths Optional Teacher
                </th>
                <th className="text-left p-4 font-semibold text-indigo-400">
                  <span className="text-xl mr-2">⚖</span> Sociology Optional Teacher
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Concept Explanation',    'Visual, step-by-step, proof-based teaching with worked examples narrated aloud',                             'Narrative-based teaching — thinkers taught as intellectual biographies, not definitions'],
                ['PYQ Approach',           '20-year paper analysis; question mapped by topic, difficulty, and marks-per-step allocation',                 'Theme and pattern analysis; identifies examiner\'s preferred sociological lenses and question types'],
                ['Answer Writing',         'Step-by-step evaluation; marks awarded per step; presentation and legibility guidance',                       '6-dimension rubric: structure, theory, evidence, contemporary relevance, critical analysis, conclusion'],
                ['Doubt Resolution',       'Weekly live sessions — problem-solving and concept doubts addressed by teacher directly',                     'Weekly live sessions — conceptual and answer writing doubts both addressed by teacher'],
                ['Personalisation',        'Diagnostic test → topic-specific study plan → tracks weak areas across test series',                         'Writing style assessment → analytical depth evaluation → tailored improvement plan per student'],
                ['Current Affairs',        'Brings real data sets and numerical examples into Statistics, Mechanics, and Fluid Dynamics problems',         'Dedicated monthly session — recent events read through the week\'s sociological framework'],
                ['Exam Strategy',          'Paper-attempt sequence; time allocation per topic; when to skip, when to attempt partially',                  'Answer selection strategy; Paper I vs Paper II balance; high-probability topic identification'],
                ['Motivational Approach',  'Breaks syllabus into small milestones; celebrates concrete skill achievements across the course',             'Connects preparation to the student\'s vision of public service and the social problems they want to solve'],
              ].map(([skill, maths, socio], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-4 font-semibold text-gray-700 align-top">{skill}</td>
                  <td className="p-4 text-gray-600 align-top border-l border-blue-100">{maths}</td>
                  <td className="p-4 text-gray-600 align-top border-l border-indigo-100">{socio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ── HOW TO EVALUATE A TEACHER ──────────────────────────────────────── */}
      <Section className="bg-gradient-to-br from-gray-50 to-white">
        <SectionTitle
          title="How to Evaluate Any UPSC Optional Teacher"
          subtitle="Before you commit to any programme — ask these questions. We actively encourage you to ask them of us too."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {[
            { q: 'Have they taught this specific optional for UPSC — not just the academic subject?',   a: 'A university professor of Sociology is not automatically a great Sociology Optional teacher. Ask specifically how long they have taught this optional for UPSC.' },
            { q: 'Can they show you PYQ analysis — not just the questions, but their reading of patterns?', a: 'A teacher who has truly studied the exam can show you which topics appeared in 9 of the last 10 years — and which appeared once.' },
            { q: 'How do they evaluate answer writing?',                                               a: 'A marks number is not feedback. Ask to see a sample evaluated answer. Does it tell you specifically what to improve and how?' },
            { q: 'Can you speak to a past student before enrolling?',                                  a: 'Any teacher with genuine results will connect you with former students. Evasiveness here is telling.' },
            { q: 'Will you actually have access to the teacher — or to a TA?',                         a: 'Ask specifically: who answers my doubts? Who evaluates my answers? The teacher or someone else?' },
            { q: 'How have they updated their material to reflect recent UPSC papers?',                 a: 'A teacher who has not updated their material to reflect the last 2–3 years of question patterns is teaching a syllabus, not an examination.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-3 items-start">
                <div className="w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-1">{item.q}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.a}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm mb-4">
            We actively encourage prospective students to ask all of the above questions — directly to our teachers.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="outline">
              Ask Our Teachers Directly →
            </Button>
          </Link>
        </div>
      </Section>

      {/* ── FAQ ────────────────────────────────────────────────────────────── */}
      <Section className="bg-white">
        <SectionTitle
          title="Questions About Our Teachers"
          subtitle="Everything you want to know before you commit to learning with us."
        />
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              question={faq.q}
              answer={faq.a}
              open={openFaq === i}
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
            />
          ))}
        </div>
      </Section>

      {/* ── FINAL CTA ──────────────────────────────────────────────────────── */}
      <Section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Experience the Teaching Before You Commit.
            </h2>
            <p className="text-blue-100 text-lg mb-2">
              Attend a free demo class. Meet your teacher in person.
            </p>
            <p className="text-blue-200 text-sm mb-8">
              No registration fee. No pressure. Just genuine teaching — so you can decide for yourself.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary">
                  Book a Free Demo Class
                </Button>
              </Link>
              <Link to="/pyq">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  Download Free PYQs First
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>

    </div>
  );
}