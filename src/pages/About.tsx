// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { Target, Eye, Award, Users, BookOpen, TrendingUp, CheckCircle, ArrowRight, Quote } from 'lucide-react';
// import Section from '../components/Section';
// import SectionTitle from '../components/SectionTitle';
// import Button from '../components/Button';
// import Avinashsir from '../assets/AvinashSirMaths.jpg';


// // ─── IMAGE CONSTANTS ──────────────────────────────────────────────────────
// const IMAGES = {
//   whoWeAre:     'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800',
//   teaching:     'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=900',
//   mentoring:    'https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&w=900',
//   library:      'https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=900',
//   discussion:   'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=900',
//   answerWrite:  'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800',
//   studyDesk:    'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800',
// };

// export default function About() {

//   const values = [
//     {
//       icon: Award,
//       color: 'from-blue-600 to-blue-800',
//       title: 'Teaching Excellence',
//       description: 'Every educator at The CSE Circle is selected not just for subject knowledge but for their ability to teach — to explain, to diagnose, to give feedback that genuinely improves a student.',
//     },
//     {
//       icon: Users,
//       color: 'from-indigo-600 to-indigo-800',
//       title: 'Student-First Design',
//       description: "Every decision — batch size, feedback frequency, doubt session structure — is made around one question: what does this student actually need to improve? Not what is convenient for us to provide.",
//     },
//     {
//       icon: BookOpen,
//       color: 'from-blue-500 to-indigo-600',
//       title: 'Depth Over Breadth',
//       description: 'We teach two optional subjects and nothing else. This is not a constraint — it is a commitment. Focused expertise produces better teaching, better material, and better results than generalist sprawl ever can.',
//     },
//     {
//       icon: TrendingUp,
//       color: 'from-indigo-500 to-purple-700',
//       title: 'Transparent Results',
//       description: 'We publish real student scores, real ranks, and real testimonials — not aggregate claims. Every selection we mention is verifiable. We believe your decision to trust us should be based on evidence.',
//     },
//   ];

//   const achievements = [
//     { number: '500+',    label: 'Students Guided to Selection',      sub: 'Verified selections across UPSC CSE batches' },
//     { number: '5,000+',  label: 'Students Taught Personally',        sub: 'Every student known by name and preparation level' },
//     { number: '2',       label: 'Dedicated Expert Teachers',         sub: 'One per optional — no split faculty, no hand-offs' },
//     { number: '20+',     label: 'Years of PYQs Analysed',           sub: 'Every paper from 2000 to present, mapped and classified' },
//   ];

//   const notList = [
//     'We are not a factory. We do not enrol 3,000 students per batch.',
//     'We are not a content archive. Recorded lectures are supplements to teaching — not substitutes for it.',
//     'We are not a brand with a hundred hired faculty. We are two dedicated teachers and the programme they have built.',
//     'We are not coaching aspirants to merely clear their optional. We are teaching them to master it.',
//   ];

//   const areList = [
//     'A teacher-first learning platform where the educator\'s relationship with the student is the core product.',
//     'A subject-specialist operation — two optionals, two dedicated teachers, zero dilution.',
//     'An evidence-based programme where every teaching decision is anchored in PYQ analysis and student feedback.',
//     'A community where alumni stay engaged because they believe in what this circle gave them.',
//   ];

//   const timeline = [
//     { year: 'Founded',      event: 'The Circle Begins',         desc: 'The CSE Circle is founded on a single conviction: two dedicated expert teachers, two optional subjects, and an uncompromising commitment to teaching quality over institutional scale.' },
//     { year: 'Year 2–3',     event: 'PYQ Architecture Built',    desc: 'The teacher-led PYQ analysis system is completed — 20+ years of UPSC Maths and Sociology Optional papers mapped by topic, difficulty, frequency, and examiner preference.' },
//     { year: 'Year 4–5',     event: 'Answer Writing Framework',  desc: 'The 6-Part Sociology Answer Framework and the Maths Marks-Map methodology are formalised after analysing thousands of student submissions and examiner patterns.' },
//     { year: 'Year 6–8',     event: '100+ Selections',           desc: 'The first hundred verifiable selections. Students begin referring peers — not because of marketing, but because the teaching genuinely changed their preparation.' },
//     { year: 'Year 9–11',    event: 'Digital Expansion',         desc: 'The full programme moves online — live classes, recorded lectures, digital answer submission and evaluation — making The CSE Circle accessible to aspirants across India and abroad.' },
//     { year: 'Today',        event: '500+ Selections',           desc: 'Over 500 verified selections. The same two teachers. The same philosophy. The same commitment to knowing every student\'s name, weak areas, and preparation level.' },
//   ];

//   return (
//     <div className="min-h-screen pt-20">

//       {/* ── PAGE HERO ──────────────────────────────────────────────────────── */}
//       <section className="relative py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden">
//         <div className="absolute inset-0 opacity-10"
//           style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, #818cf8 0%, transparent 40%), radial-gradient(circle at 10% 80%, #60a5fa 0%, transparent 50%)' }} />

//         <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center max-w-4xl mx-auto"
//           >
//             <span className="inline-block bg-white/15 border border-white/25 text-white/85 text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-6">
//               Our Story & Philosophy
//             </span>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
//               About The CSE Circle
//             </h1>
//             <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
//               Built around teachers. Not around marketing.
//               Two dedicated experts. Two optional subjects. One uncompromising commitment to genuine teaching.
//             </p>
//           </motion.div>

//           {/* Hero stat strip */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-5 max-w-3xl mx-auto"
//           >
//             {[
//               { val: '500+',   label: 'Selections' },
//               { val: '5,000+', label: 'Students Taught' },
//               { val: '2',      label: 'Expert Teachers' },
//               { val: '20+',    label: 'Years of PYQs' },
//             ].map((s, i) => (
//               <div key={i} className="text-center bg-white/10 border border-white/15 rounded-2xl py-5 px-3">
//                 <div className="text-3xl font-bold text-amber-400 mb-1">{s.val}</div>
//                 <div className="text-blue-200 text-xs font-medium">{s.label}</div>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* ── WHO WE ARE ─────────────────────────────────────────────────────── */}
//       <Section className="bg-white">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

//           {/* Image */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="relative"
//           >
//             <img
//               src={Avinashsir}
//               alt="Teacher working closely with a UPSC student at The CSE Circle"
//               className="rounded-2xl shadow-2xl w-full object-cover"
//             />
//             {/* Floating badge */}
//             <div className="absolute -bottom-5 -right-5 bg-blue-600 text-white rounded-2xl px-6 py-4 shadow-xl hidden md:block">
//               <div className="text-2xl font-bold">Teacher-Led</div>
//               <div className="text-blue-200 text-xs font-medium mt-0.5">Not content-led. Not platform-led.</div>
//             </div>
//           </motion.div>

//           {/* Text */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">Who We Are</p>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
//               Born from a Frustration.<br />Built on a Conviction.
//             </h2>

//             <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
//               <p>
//                 The CSE Circle was founded on a frustration and a conviction.
//               </p>
//               <p>
//                 <strong className="text-gray-900">The frustration:</strong> watching talented, hardworking UPSC aspirants
//                 fail their optional not because they lacked effort, but because the instruction they received was
//                 generic, impersonal, and examination-blind.
//               </p>
//               <p>
//                 <strong className="text-gray-900">The conviction:</strong> that two expert teachers — truly expert,
//                 with years of specific experience teaching UPSC Maths Optional and Sociology Optional — could build
//                 something better than any large, generalist coaching institute. Not bigger. Better.
//               </p>
//               <p>
//                 So we built The CSE Circle around exactly that: dedicated expert teachers, two optional subjects,
//                 and a relentless focus on the quality of the teaching act rather than the scale of the operation.
//                 Every resource on this platform — the notes, the blog articles, the PYQ analysis, the test series —
//                 is an extension of what our teachers actually do in class. Nothing here is outsourced.
//                 Nothing is generic. Everything is shaped by educators who have spent years understanding exactly
//                 what UPSC Maths and Sociology Optional demands from a student.
//               </p>
//             </div>

//             <div className="mt-8 flex gap-4 flex-wrap">
//               <Link to="/teachers">
//                 <Button className="group bg-gradient-to-r from-blue-600 to-blue-800">
//                   Meet Our Teachers
//                   <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
//                 </Button>
//               </Link>
//               <Link to="/contact">
//                 <Button variant="outline">Book a Free Demo Class</Button>
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </Section>

//       {/* ── WHAT WE ARE / WHAT WE ARE NOT ──────────────────────────────────── */}
//       <Section className="bg-gradient-to-br from-gray-50 to-white">
//         <SectionTitle
//           title="What The CSE Circle Is — and Is Not"
//           subtitle="We believe in being honest about what we offer so the right students find us and the wrong expectations never enter."
//         />

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

//           {/* What we are NOT */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.55 }}
//             className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
//           >
//             <div className="flex items-center gap-3 mb-6">
//               <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
//                 <span className="text-red-500 font-bold text-lg">✗</span>
//               </div>
//               <h3 className="text-xl font-bold text-gray-900">What We Are Not</h3>
//             </div>
//             <div className="space-y-4">
//               {notList.map((item, i) => (
//                 <div key={i} className="flex items-start gap-3">
//                   <div className="w-5 h-5 rounded-full bg-red-50 border border-red-200 flex items-center justify-center shrink-0 mt-0.5">
//                     <span className="text-red-400 text-xs font-bold">✗</span>
//                   </div>
//                   <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
//                 </div>
//               ))}
//             </div>

//             {/* Small contextual image */}
//             <div className="mt-7 relative h-36 rounded-xl overflow-hidden">
//               <img src={IMAGES.studyDesk} alt="Focused individual study" className="w-full h-full object-cover" />
//               <div className="absolute inset-0 bg-gray-900/55 flex items-end p-4">
//                 <p className="text-white text-xs font-medium leading-snug">
//                   We deliberately stay small so every student is genuinely known to the teacher.
//                 </p>
//               </div>
//             </div>
//           </motion.div>

//           {/* What we ARE */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.55, delay: 0.15 }}
//             className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
//           >
//             <div className="flex items-center gap-3 mb-6">
//               <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
//                 <CheckCircle size={18} className="text-green-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900">What We Are</h3>
//             </div>
//             <div className="space-y-4">
//               {areList.map((item, i) => (
//                 <div key={i} className="flex items-start gap-3">
//                   <CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0" />
//                   <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
//                 </div>
//               ))}
//             </div>

//             {/* Small contextual image */}
//             <div className="mt-7 relative h-36 rounded-xl overflow-hidden">
//               <img src={IMAGES.mentoring} alt="Teacher mentoring a student directly" className="w-full h-full object-cover" />
//               <div className="absolute inset-0 bg-blue-900/60 flex items-end p-4">
//                 <p className="text-white text-xs font-medium leading-snug">
//                   Direct access to your teacher — every week, for every doubt, on every answer.
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </Section>

//       {/* ── MISSION & VISION ────────────────────────────────────────────────── */}
//       <Section className="bg-white">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

//           {/* Mission */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="rounded-2xl overflow-hidden shadow-lg border border-gray-100"
//           >
//             {/* Image header */}
//             <div className="relative h-48">
//               <img src={IMAGES.teaching} alt="Teacher-led UPSC class" className="w-full h-full object-cover" />
//               <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent flex items-end p-6">
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shrink-0">
//                     <Target className="w-6 h-6 text-white" />
//                   </div>
//                   <h3 className="text-2xl font-bold text-white">Our Mission</h3>
//                 </div>
//               </div>
//             </div>
//             {/* Content */}
//             <div className="p-7 bg-white">
//               <p className="text-gray-600 text-sm leading-relaxed mb-4">
//                 To make world-class UPSC optional preparation accessible, affordable, and exceptional —
//                 for every aspirant who wants to master their optional, not just pass it.
//               </p>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 We achieve this through dedicated expert teachers, subject-specific depth, PYQ-anchored
//                 pedagogy, and a personal feedback loop that treats every student as an individual — not a
//                 batch member, not a number, not a subscription.
//               </p>
//               <div className="mt-5 flex flex-wrap gap-2">
//                 {['Expert Teachers', 'PYQ-Anchored', 'Personal Feedback', 'Subject-Specific'].map(tag => (
//                   <span key={tag} className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">{tag}</span>
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//           {/* Vision */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.15 }}
//             className="rounded-2xl overflow-hidden shadow-lg border border-gray-100"
//           >
//             {/* Image header */}
//             <div className="relative h-48">
//               <img src={IMAGES.discussion} alt="Students in class discussion" className="w-full h-full object-cover object-center" />
//               <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-indigo-900/40 to-transparent flex items-end p-6">
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shrink-0">
//                     <Eye className="w-6 h-6 text-white" />
//                   </div>
//                   <h3 className="text-2xl font-bold text-white">Our Vision</h3>
//                 </div>
//               </div>
//             </div>
//             {/* Content */}
//             <div className="p-7 bg-white">
//               <p className="text-gray-600 text-sm leading-relaxed mb-4">
//                 To be recognised as India's most trusted teacher-led UPSC optional platform — where
//                 the quality of teaching, not the size of the batch, is the defining standard.
//               </p>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 We envision a future where every serious UPSC aspirant has access to a teacher who
//                 genuinely knows them, their preparation, and their path forward — and where the measure
//                 of a preparation platform is not how many students it enrolls, but how many it transforms.
//               </p>
//               <div className="mt-5 flex flex-wrap gap-2">
//                 {['Genuine Teaching', 'Trusted Results', 'Student Transformation', 'Accessible'].map(tag => (
//                   <span key={tag} className="bg-indigo-50 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full">{tag}</span>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </Section>

//       {/* ── CORE VALUES ────────────────────────────────────────────────────── */}
//       <Section className="bg-gradient-to-br from-blue-50 to-white">
//         <SectionTitle
//           title="Our Core Values"
//           subtitle="The principles that shape every teaching decision, every resource, and every interaction at The CSE Circle."
//         />

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
//           {values.map((value, index) => {
//             const Icon = value.icon;
//             return (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow text-center"
//               >
//                 <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-md`}>
//                   <Icon className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
//                 <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
//               </motion.div>
//             );
//           })}
//         </div>
//       </Section>

//       {/* ── FOUNDING STORY — FULL WIDTH IMAGE + TEXT ────────────────────────── */}
//       <Section className="bg-white">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

//           {/* Text side */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">Why We Exist</p>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
//               The Insight That Built<br />The CSE Circle
//             </h2>

//             <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
//               <p>
//                 Most coaching institutes try to be everything to everyone — offering 25 optionals,
//                 hundreds of students per course, and a faculty roster that changes every batch.
//                 The result is almost always mediocre: diluted attention, outdated material, and mentors
//                 stretched too thin to care about any individual student.
//               </p>
//               <p>
//                 We chose a different path.
//               </p>
//               <p>
//                 The CSE Circle was built to specialise deeply in exactly two UPSC optionals —
//                 <strong className="text-gray-900"> Maths Optional</strong> and
//                 <strong className="text-gray-900"> Sociology Optional</strong>. Not because these
//                 are easy to teach. They are not. But because we believe that when a teacher commits entirely
//                 to one subject and one examination, the quality of everything they produce —
//                 the notes, the feedback, the test papers, the strategy — becomes genuinely exceptional.
//               </p>
//               <p>
//                 Every piece of content on this platform has been tested, revised, and refined across
//                 multiple UPSC cycles before it reaches you. We have seen what works, what does not,
//                 and why. That accumulated knowledge is what you access when you join The CSE Circle.
//               </p>
//             </div>

//             {/* Pull quote */}
//             <div className="mt-8 border-l-4 border-blue-600 pl-5 bg-blue-50 py-4 pr-4 rounded-r-xl">
//               <Quote size={18} className="text-blue-400 mb-2" />
//               <p className="text-blue-900 text-sm font-medium italic leading-relaxed">
//                 "We do two optionals — and we do them exceptionally well. This is not a limitation.
//                 It is our greatest strength."
//               </p>
//               <p className="text-blue-600 text-xs font-bold mt-2">The CSE Circle — Founding Philosophy</p>
//             </div>
//           </motion.div>

//           {/* Image side */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="space-y-4"
//           >
//             <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl group">
//               <img
//                 src={IMAGES.answerWrite}
//                 alt="Teacher personally evaluating student answer"
//                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 to-transparent flex items-end p-6">
//                 <div>
//                   <p className="text-white font-bold text-sm">Personal Answer Feedback</p>
//                   <p className="text-gray-300 text-xs mt-0.5">Your teacher reads and annotates every answer. Not a TA. Not automation.</p>
//                 </div>
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <div className="relative h-40 rounded-2xl overflow-hidden shadow-lg group">
//                 <img
//                   src={IMAGES.library}
//                   alt="Teacher-written study material"
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-indigo-900/65 flex items-end p-4">
//                   <div>
//                     <p className="text-white font-bold text-xs">Teacher-Written Notes</p>
//                     <p className="text-indigo-200 text-xs mt-0.5 leading-snug">Calibrated to how the teacher explains in class</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="relative h-40 rounded-2xl overflow-hidden shadow-lg group">
//                 <img
//                   src={IMAGES.mentoring}
//                   alt="One-on-one student mentoring"
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-blue-900/65 flex items-end p-4">
//                   <div>
//                     <p className="text-white font-bold text-xs">Direct Mentorship</p>
//                     <p className="text-blue-200 text-xs mt-0.5 leading-snug">Weekly live sessions with the teacher — no queue</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </Section>

//       {/* ── JOURNEY TIMELINE ───────────────────────────────────────────────── */}
//       <Section className="bg-gradient-to-br from-gray-50 to-white">
//         <SectionTitle
//           title="Our Journey"
//           subtitle="From a conviction about teaching to 500+ verified selections — how The CSE Circle grew."
//         />

//         <div className="relative max-w-4xl mx-auto">
//           {/* Vertical line */}
//           <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600 via-indigo-400 to-transparent hidden sm:block" />

//           <div className="space-y-10">
//             {timeline.map((item, i) => {
//               const isEven = i % 2 === 0;
//               return (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: i * 0.08 }}
//                   className={`relative flex flex-col md:flex-row gap-6 items-start md:items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
//                 >
//                   {/* Content card */}
//                   <div className={`flex-1 ${isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} pl-14 md:pl-0`}>
//                     <div className={`bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow inline-block w-full`}>
//                       <span className={`inline-block text-xs font-bold px-2.5 py-0.5 rounded-full mb-2 ${i === timeline.length - 1 ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-700'}`}>
//                         {item.year}
//                       </span>
//                       <h4 className="font-bold text-gray-900 text-sm mb-1">{item.event}</h4>
//                       <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
//                     </div>
//                   </div>

//                   {/* Centre dot */}
//                   <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow-md shrink-0 top-5 md:top-auto" />

//                   {/* Spacer for opposite side */}
//                   <div className="flex-1 hidden md:block" />
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </Section>

//       {/* ── ACHIEVEMENTS ───────────────────────────────────────────────────── */}
//       <Section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
//         <SectionTitle
//           title="The Numbers Behind The Teaching"
//           subtitle="Every number below is a teaching outcome — not a marketing claim."
//         />

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {achievements.map((a, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, scale: 0.85 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: i * 0.1 }}
//               className="text-center bg-white/10 border border-white/15 rounded-2xl p-7"
//             >
//               <div className="text-5xl md:text-6xl font-bold mb-2 text-amber-400">{a.number}</div>
//               <div className="text-base font-semibold text-white mb-1">{a.label}</div>
//               <div className="text-blue-200 text-xs leading-relaxed">{a.sub}</div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Wide image inside achievements section */}
//         <div className="mt-14 relative h-52 rounded-2xl overflow-hidden shadow-xl">
//           <img
//             src={IMAGES.teaching}
//             alt="The CSE Circle teaching session in progress"
//             className="w-full h-full object-cover object-center"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/55 to-transparent flex items-center px-10">
//             <div className="max-w-xl">
//               <p className="text-white text-xl font-bold mb-2 leading-snug">
//                 "We are not counting students. We are counting transformations."
//               </p>
//               <p className="text-blue-200 text-sm">
//                 Every selection we reference is a student whose teacher knew their name, their weak topics,
//                 and their answers — personally.
//               </p>
//             </div>
//           </div>
//         </div>
//       </Section>

//       {/* ── FINAL CTA ──────────────────────────────────────────────────────── */}
//       <Section className="bg-white">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

//           {/* Text */}
//           <div>
//             <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">Start Here</p>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-snug">
//               The Best Way to Know<br />if We Are Right for You
//             </h2>
//             <p className="text-gray-500 text-sm leading-relaxed mb-6">
//               Attend a free demo class. Meet your teacher. See how they explain a concept,
//               how they respond to questions, and whether their teaching style resonates with you.
//               No fee. No pressure. No commitment.
//             </p>
//             <p className="text-gray-500 text-sm leading-relaxed mb-8">
//               We have nothing to hide — and the demo class is the most honest way
//               for you to evaluate whether The CSE Circle is the right home for your optional preparation.
//             </p>
//             <div className="flex flex-wrap gap-4">
//               <Link to="/contact">
//                 <Button size="lg" className="group bg-gradient-to-r from-blue-600 to-blue-800">
//                   Book a Free Demo Class
//                   <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
//                 </Button>
//               </Link>
//               <Link to="/teachers">
//                 <Button size="lg" variant="outline">Meet Our Teachers First</Button>
//               </Link>
//             </div>
//           </div>

//           {/* Image */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="relative"
//           >
//             <img
//               src={IMAGES.whoWeAre}
//               alt="Join The CSE Circle — teacher-led UPSC optional preparation"
//               className="rounded-2xl shadow-xl w-full object-cover h-80"
//             />
//             {/* Testimonial overlay */}
//             <div className="absolute -bottom-5 -left-5 bg-white border border-gray-100 rounded-2xl p-5 shadow-xl max-w-xs hidden md:block">
//               <Quote size={16} className="text-blue-400 mb-2" />
//               <p className="text-gray-700 text-xs italic leading-relaxed mb-2">
//                 "I attended the demo class on a Wednesday. I enrolled on Thursday.
//                 I have never made a faster or more confident decision in my preparation."
//               </p>
//               <p className="text-blue-600 text-xs font-bold">IAS — AIR 89, CSE 2023</p>
//             </div>
//           </motion.div>
//         </div>
//       </Section>

//     </div>
//   );
// }


import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, CheckCircle, Star, Award,
  Users, BookOpen, TrendingUp
} from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import Avinashsir from '../assets/AvinashSirMaths.jpg';

// ─── IMAGES ────────────────────────────────────────────────────────────────
const IMG = {
  mentoring:  'https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&w=900',
  discussion: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=900',
  teaching:   'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=900',
  library:    'https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=900',
};

// ─── DATA ──────────────────────────────────────────────────────────────────
const toppers = [
  { name: 'Aditya Kumar',  rank: 'AIR 47',  year: 2023, service: 'IAS', optional: 'Maths',     score: 312 },
  { name: 'Arjun Pillai',  rank: 'AIR 67',  year: 2022, service: 'IAS', optional: 'Maths',     score: 304 },
  { name: 'Priya Sharma',  rank: 'AIR 89',  year: 2023, service: 'IPS', optional: 'Sociology', score: 298 },
  { name: 'Kiran Menon',   rank: 'AIR 98',  year: 2023, service: 'IPS', optional: 'Maths',     score: 296 },
  { name: 'Ananya Bose',   rank: 'AIR 112', year: 2022, service: 'IAS', optional: 'Sociology', score: 291 },
  { name: 'Vikram Nair',   rank: 'AIR 118', year: 2022, service: 'IPS', optional: 'Maths',     score: 294 },
  { name: 'Meera Nair',    rank: 'AIR 134', year: 2023, service: 'IRS', optional: 'Sociology', score: 283 },
  { name: 'Rahul Verma',   rank: 'AIR 152', year: 2022, service: 'IRS', optional: 'Maths',     score: 287 },
  { name: 'Sneha Iyer',    rank: 'AIR 203', year: 2023, service: 'IFS', optional: 'Sociology', score: 275 },
];

const values = [
  { icon: Award,      color: 'bg-blue-600',   title: 'Teaching Excellence',  desc: 'Selected not just for subject mastery but for the ability to explain, diagnose, and give feedback that produces measurable improvement.' },
  { icon: Users,      color: 'bg-indigo-600', title: 'Student-First',        desc: 'Batch sizes are deliberately small. Every student is known personally — their name, their weak areas, their written work.' },
  { icon: BookOpen,   color: 'bg-blue-700',   title: 'Depth Over Breadth',   desc: 'Two optionals. Two teachers. Nothing else. Deep specialisation produces better material, better teaching, and better results.' },
  { icon: TrendingUp, color: 'bg-indigo-700', title: 'Transparent Results',  desc: 'Real names, real ranks, real scores — individually verifiable. Your trust should be based on evidence, not claims.' },
];

// ─── PAGE ──────────────────────────────────────────────────────────────────
export default function About() {
  return (
    <div className="min-h-screen pt-20">

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-end">

            {/* Left — text (3 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-3"
            >
              <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-blue-400 mb-5">
                About The CSE Circle
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6">
                Built Around<br />
                <span className="text-amber-400">Teachers.</span><br />
                Not Marketing.
              </h1>
              <p className="text-slate-300 text-base leading-relaxed max-w-lg mb-8">
                Two dedicated expert teachers. Two optional subjects. An uncompromising
                commitment to genuine, personal, examination-focused teaching — since day one.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/teachers">
                  <Button className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold group">
                    Meet Our Teachers
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-white/25 text-white hover:bg-white/8">
                    Book Free Demo Class
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right — teacher card (2 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={Avinashsir}
                  alt="Maths Optional Teacher — The CSE Circle"
                  className="w-full h-72 lg:h-80 object-cover object-top"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/40 to-transparent" />
                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
                    Maths Optional Teacher
                  </p>
                  <p className="text-white font-bold text-base leading-tight">The CSE Circle</p>
                  <p className="text-slate-400 text-xs mt-1">10+ Years · UPSC Exclusive · 200+ Selections</p>
                </div>
                {/* Top score badge */}
                <div className="absolute top-4 right-4 bg-amber-500 text-slate-900 rounded-xl px-3 py-2 text-center shadow-lg">
                  <div className="text-xl font-black leading-none">312</div>
                  <div className="text-xs font-bold opacity-75">Best Score</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden"
          >
            {[
              { value: '500+',   label: 'Verified Selections'     },
              { value: '5,000+', label: 'Students Taught'         },
              { value: '2',      label: 'Expert Teachers'         },
              { value: '20+',    label: 'Years of PYQs Analysed' },
            ].map((s, i) => (
              <div key={i} className="bg-white/5 py-6 px-4 text-center">
                <div className="text-2xl md:text-3xl font-black text-amber-400 mb-1">{s.value}</div>
                <div className="text-slate-400 text-xs font-medium">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── WHO WE ARE ───────────────────────────────────────────────── */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src={Avinashsir}
              alt="The CSE Circle — Teacher-led UPSC optional preparation"
              className="rounded-2xl w-full h-[28rem] object-cover object-top shadow-2xl"
            />
            <div className="absolute -bottom-5 -right-5 bg-blue-600 text-white rounded-xl px-5 py-3 shadow-xl hidden md:block">
              <div className="text-sm font-bold">Teacher-Led</div>
              <div className="text-blue-200 text-xs">Not content-led. Not platform-led.</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">Who We Are</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
              Born from a Frustration.<br />Built on a Conviction.
            </h2>

            <div className="space-y-4 text-gray-600 text-sm leading-[1.85]">
              <p>
                The CSE Circle was founded after watching talented, hardworking UPSC aspirants fail
                their optional — not because they lacked effort, but because the instruction they
                received was generic, impersonal, and examination-blind.
              </p>
              <p>
                We built this around two expert teachers — one for Maths Optional, one for Sociology
                Optional. Not bigger than any institute. Better. Every resource here is an extension
                of what our teachers actually do in class. Nothing outsourced. Nothing generic.
              </p>
              <p>
                When you join The CSE Circle, you are not buying access to a content library.
                You are entering a teaching relationship with an educator who will know your name,
                your weak topics, and your preparation — personally.
              </p>
            </div>

            <div className="mt-7 space-y-2.5">
              {[
                'Two optionals only — Maths Optional & Sociology Optional',
                'Every answer personally evaluated by the subject teacher',
                'Small batches — every student individually known',
                'All results verifiable by student name and roll number',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle size={15} className="text-blue-600 mt-0.5 shrink-0" />
                  <p className="text-gray-600 text-sm">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-3 flex-wrap">
              <Link to="/teachers">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white group">
                  Meet Our Teachers
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={15} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline">Book Free Demo</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ── STUDENT RESULTS SHOWCASE ──────────────────────────────────── */}
      <Section className="bg-gray-50">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">Verified Results</p>
            <h2 className="text-3xl font-bold text-gray-900">Our Students' Achievements</h2>
            <p className="text-gray-500 text-sm mt-2 max-w-md">
              Every name below is a student personally taught by one of our two teachers —
              with confirmed optional scores from official UPSC marksheets.
            </p>
          </div>
          <Link to="/results" className="shrink-0">
            <Button variant="outline" className="group">
              View All Results
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={15} />
            </Button>
          </Link>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {toppers.map((t, i) => {
            const isMaths = t.optional === 'Maths';
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                {/* Colour top strip */}
                <div className={`h-1 ${isMaths ? 'bg-blue-600' : 'bg-indigo-600'}`} />

                <div className="p-5">
                  {/* Top row — rank + stars */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-2xl font-black ${isMaths ? 'text-blue-700' : 'text-indigo-700'}`}>
                      {t.rank}
                    </span>
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} size={11} className="text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                  </div>

                  {/* Name */}
                  <p className="font-bold text-gray-900 text-base mb-3">{t.name}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-2.5 py-1 rounded-full">
                      {t.service} · {t.year}
                    </span>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${isMaths ? 'bg-blue-50 text-blue-700' : 'bg-indigo-50 text-indigo-700'}`}>
                      {isMaths ? '∑' : '⚖'} {t.optional} Optional
                    </span>
                  </div>

                  {/* Score row */}
                  <div className="border-t border-gray-100 pt-3 flex items-center justify-between">
                    <span className="text-gray-400 text-xs">Optional Score</span>
                    <div className="text-right">
                      <span className={`font-black text-lg leading-none ${isMaths ? 'text-blue-700' : 'text-indigo-700'}`}>
                        {t.score}
                      </span>
                      <span className="text-gray-400 text-xs"> / 500</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* ── CORE VALUES ──────────────────────────────────────────────── */}
      <Section className="bg-white">
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">What We Stand For</p>
          <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-blue-100 transition-all"
              >
                <div className={`w-11 h-11 ${v.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-2">{v.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* ── MISSION + VISION ─────────────────────────────────────────── */}
      <Section className="bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
          >
            <div className="relative h-40 overflow-hidden">
              <img src={IMG.teaching} alt="Teaching" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent flex items-end p-5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-blue-500 rounded-lg flex items-center justify-center shrink-0">
                    <BookOpen size={17} className="text-white" />
                  </div>
                  <h3 className="text-white font-bold text-lg">Our Mission</h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 text-sm leading-relaxed">
                To make world-class UPSC optional preparation accessible and exceptional —
                for every aspirant who wants to master their optional, not just pass it.
                Through dedicated expert teachers, subject-specific depth, PYQ-anchored pedagogy,
                and a personal feedback loop that treats every student as an individual.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
          >
            <div className="relative h-40 overflow-hidden">
              <img src={IMG.discussion} alt="Discussion" className="w-full h-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-transparent flex items-end p-5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-indigo-500 rounded-lg flex items-center justify-center shrink-0">
                    <TrendingUp size={17} className="text-white" />
                  </div>
                  <h3 className="text-white font-bold text-lg">Our Vision</h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 text-sm leading-relaxed">
                To be India's most trusted teacher-led UPSC optional platform — where
                the quality of teaching, not the size of the batch, is the defining standard.
                Where success is measured not by enrolments, but by genuine student transformations.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ── FINAL CTA ────────────────────────────────────────────────── */}
      <Section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
              The Best Way to Know<br />if We Are Right for You
            </h2>
            <p className="text-blue-100 text-base leading-relaxed mb-8">
              Attend a free demo class. Meet your teacher. See how they explain, how they answer
              questions, and whether their teaching resonates with you.
              No fee. No commitment.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold group">
                  Book a Free Demo Class
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Button>
              </Link>
              <Link to="/teachers">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Meet Our Teachers
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Image + quote */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative hidden lg:block"
          >
            <img
              src={IMG.mentoring}
              alt="Teacher mentoring a UPSC student at The CSE Circle"
              className="rounded-2xl w-full h-64 object-cover shadow-2xl"
            />
            <div className="absolute -bottom-5 -left-5 bg-white rounded-xl p-4 shadow-2xl max-w-[260px]">
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-gray-700 text-xs italic leading-relaxed mb-2">
                "I attended the demo on Wednesday. I enrolled on Thursday.
                The most confident decision in my UPSC preparation."
              </p>
              <p className="text-blue-600 text-xs font-bold">IAS — AIR 89, CSE 2023</p>
            </div>
          </motion.div>
        </div>
      </Section>

    </div>
  );
}