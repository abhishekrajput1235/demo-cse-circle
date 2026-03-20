// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { ArrowRight, Users, BookOpen, FileText, UserCheck, TrendingUp, Award } from 'lucide-react';
// import type { LucideIcon } from 'lucide-react';
// import Button from '../components/Button';
// import Section from '../components/Section';
// import SectionTitle from '../components/SectionTitle';
// import { features, testimonials } from '../data/data';
// import TestimonialCard from '../components/TestimonialCard';

// export default function Home() {
//   const stats = [
//     { icon: Users, value: '5000+', label: 'Students Enrolled' },
//     { icon: Award, value: '500+', label: 'Successful Candidates' },
//     { icon: TrendingUp, value: '85%', label: 'Success Rate' },
//     { icon: BookOpen, value: '15+', label: 'Years of Excellence' }
//   ];

//   const iconMap: Record<string, LucideIcon> = {
//     Users,
//     BookOpen,
//     FileText,
//     UserCheck
//   };

//   return (
//     <div className="min-h-screen">
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
//         <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5"></div>

//         <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <motion.div
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="inline-block mb-6"
//             >
//               <span className="bg-blue-100 text-blue-700 px-6 py-2 rounded-full text-sm font-semibold">
//                 India's Premier UPSC Coaching Institute
//               </span>
//             </motion.div>

//             <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
//               Empowering Future
//               <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
//                 Civil Servants
//               </span>
//             </h1>

//             <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
//               Join thousands of successful aspirants who transformed their dreams into reality with our expert guidance, comprehensive study material, and personalized mentorship.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//               <Link to="/courses">
//                 <Button size="lg" className="group">
//                   Enroll Now
//                   <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
//                 </Button>
//               </Link>
//               <Link to="/courses">
//                 <Button size="lg" variant="outline">
//                   Explore Courses
//                 </Button>
//               </Link>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
//           >
//             {stats.map((stat, index) => {
//               const Icon = stat.icon;
//               return (
//                 <motion.div
//                   key={index}
//                   whileHover={{ scale: 1.05 }}
//                   className="bg-white rounded-xl p-6 shadow-lg"
//                 >
//                   <Icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
//                   <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
//                   <div className="text-sm text-gray-600">{stat.label}</div>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </div>
//       </section>

//       <Section className="bg-white">
//         <SectionTitle
//           title="Why Choose The CSE CIRCLE?"
//           subtitle="Experience excellence in UPSC preparation with our comprehensive approach"
//         />

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((feature, index) => {
//             const Icon = iconMap[feature.icon];
//             return (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="text-center p-6 rounded-xl hover:shadow-xl transition-shadow bg-gradient-to-br from-blue-50 to-white"
//               >
//                 <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Icon size={32} className="text-white" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
//                 <p className="text-gray-600">{feature.description}</p>
//               </motion.div>
//             );
//           })}
//         </div>
//       </Section>

//       <Section className="bg-gradient-to-br from-blue-50 to-white">
//         <SectionTitle
//           title="Success Stories"
//           subtitle="Hear from our achievers who cracked UPSC with flying colors"
//         />

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {testimonials.map((testimonial) => (
//             <TestimonialCard key={testimonial.id} {...testimonial} />
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <Link to="/results">
//             <Button variant="outline" size="lg">
//               View All Results
//             </Button>
//           </Link>
//         </div>
//       </Section>

//       <Section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
//         <div className="text-center max-w-4xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">
//               Ready to Start Your UPSC Journey?
//             </h2>
//             <p className="text-xl mb-8 text-blue-100">
//               Join thousands of aspirants who are already on their path to success
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link to="/contact">
//                 <Button size="lg" variant="secondary">
//                   Get Free Counselling
//                 </Button>
//               </Link>
//               <Link to="/courses">
//                 <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
//                   View All Courses
//                 </Button>
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </Section>
//     </div>
//   );
// }




import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, BookOpen, FileText, UserCheck, TrendingUp, Award } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Button from '../components/Button';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import { features, testimonials } from '../data/data';
import TestimonialCard from '../components/TestimonialCard';

export default function Home() {
  const stats = [
    { icon: Users,     value: '5,000+', label: 'Students Taught Personally'   },
    { icon: Award,     value: '500+',   label: 'Selections Guided by Teachers' },
    { icon: TrendingUp,value: '2',      label: 'Dedicated Expert Teachers'     },
    { icon: BookOpen,  value: '20+',    label: 'Years of PYQs Analysed'        },
  ];

  const iconMap: Record<string, LucideIcon> = {
    Users,
    BookOpen,
    FileText,
    UserCheck,
  };

  return (
    <div className="min-h-screen">

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="bg-blue-100 text-blue-700 px-6 py-2 rounded-full text-sm font-semibold">
                Teacher-Led UPSC Optional Learning — Maths &amp; Sociology
              </span>
            </motion.div>

            {/* H1 */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Great Teaching
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                Changes Everything.
              </span>
            </h1>

            {/* Sub-text */}
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              At The CSE Circle, you learn Maths Optional and Sociology Optional directly from
              dedicated expert teachers — educators who have spent years studying one subject,
              one exam, and one student at a time. Not content. Not lectures. Real teaching.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/teachers">
                <Button size="lg" className="group">
                  Meet Your Teachers
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
              <Link to="/pyq">
                <Button size="lg" variant="outline">
                  Download Free PYQs
                </Button>
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
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-xl p-6 shadow-lg"
                >
                  <Icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ─── WHY THE CSE CIRCLE ────────────────────────────────────────────── */}
      <Section className="bg-white">
        <SectionTitle
          title="What Makes Learning Here Different?"
          subtitle="You don't need more content. You need a better teacher — one who knows the subject, knows the exam, and knows you."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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

      {/* ─── TEACHING APPROACH HIGHLIGHT ──────────────────────────────────── */}
      <Section className="bg-gradient-to-br from-blue-50 to-white">
        <SectionTitle
          title="How Our Teachers Teach"
          subtitle="A 6-stage teaching method built over years — specifically for UPSC Maths Optional and Sociology Optional"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              step: '01',
              title: 'PYQ First — Always',
              desc:  'Every new topic begins with a real past-year question so you immediately understand why you are learning it and what the examiner expects.',
            },
            {
              step: '02',
              title: 'Concept Before Content',
              desc:  'No formula dumping. No rote definitions. The teacher builds understanding from first principles — so you can handle any question format, not just ones you have seen before.',
            },
            {
              step: '03',
              title: 'Answer Writing from Week 1',
              desc:  'Writing practice begins on the very first day — not after you finish the syllabus. By exam day, structured answer writing is a habit, not a skill you are still developing.',
            },
            {
              step: '04',
              title: 'Personal Written Feedback',
              desc:  'Every answer you submit is read and annotated by the teacher personally — not a TA, not an automated system. Feedback tells you exactly what went wrong and how to fix it.',
            },
            {
              step: '05',
              title: 'Student-Paced Depth',
              desc:  'Teachers adapt to where you are, not where the timetable says you should be. No student gets left behind because the class moved faster than their understanding.',
            },
            {
              step: '06',
              title: 'Contemporary Integration',
              desc:  'Especially in Sociology — current events are woven into every class so your answers feel relevant, fresh, and examiner-worthy without any separate current affairs module.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border-t-4 border-blue-600"
            >
              <div className="text-4xl font-bold text-blue-100 mb-3 leading-none">{item.step}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ─── OPTIONALS ────────────────────────────────────────────────────── */}
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
            className="rounded-2xl overflow-hidden shadow-lg border border-gray-100"
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white">
              <div className="text-5xl mb-4">∑</div>
              <h3 className="text-2xl font-bold mb-2">Maths Optional</h3>
              <p className="text-blue-100 text-sm">
                Taught by a specialist who has studied the UPSC Maths Optional paper for over a decade —
                every question pattern, every topic's weight, every step that earns marks.
              </p>
            </div>
            <div className="bg-white p-6">
              <p className="text-gray-600 text-sm mb-4">
                Our Maths teacher's method: concept-first, proof-based, PYQ-anchored teaching that makes
                Linear Algebra, Real Analysis, Mechanics, and every other topic feel genuinely understandable —
                not just covereable.
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {['Linear Algebra','Real Analysis','Abstract Algebra','Mechanics','Statistics','Complex Analysis','PDE / ODE','Numerical Analysis'].map(tag => (
                  <span key={tag} className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              <Link to="/maths-optional">
                <Button variant="outline" className="w-full group">
                  Explore Maths Optional
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
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
            className="rounded-2xl overflow-hidden shadow-lg border border-gray-100"
          >
            <div className="bg-gradient-to-r from-indigo-600 to-purple-700 p-8 text-white">
              <div className="text-5xl mb-4">⚖</div>
              <h3 className="text-2xl font-bold mb-2">Sociology Optional</h3>
              <p className="text-indigo-100 text-sm">
                Taught by an educator who makes sociological thinkers feel alive — not names to memorise,
                but ideas to use when analysing contemporary India in a 20-mark answer.
              </p>
            </div>
            <div className="bg-white p-6">
              <p className="text-gray-600 text-sm mb-4">
                Our Sociology teacher's signature: "Theory + Today" — every concept is taught alongside
                a current Indian example so your GS preparation and your optional preparation strengthen
                each other simultaneously.
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {['Sociological Theory','Research Methods','Indian Society','Caste & Class','Social Movements','Tribal Communities','Gender','Agrarian Structure'].map(tag => (
                  <span key={tag} className="bg-indigo-50 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              <Link to="/sociology-optional">
                <Button variant="outline" className="w-full group">
                  Explore Sociology Optional
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ─── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <Section className="bg-gradient-to-br from-blue-50 to-white">
        <SectionTitle
          title="What Students Say — About Their Teachers"
          subtitle="Real students. Real ranks. Real accounts of how expert teaching transformed their optional score."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/results">
            <Button variant="outline" size="lg">
              View All Student Results
            </Button>
          </Link>
        </div>
      </Section>

      {/* ─── TEACHER QUOTE STRIP ──────────────────────────────────────────── */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-l-4 border-blue-600"
          >
            <div className="text-5xl text-blue-200 font-serif mb-4">"</div>
            <p className="text-gray-700 text-base italic leading-relaxed mb-5">
              Mathematics is not difficult — it is unfamiliar. My job is to make it familiar,
              one concept at a time. Once a student truly understands why a theorem works —
              not just what it says — they can handle any question the examiner throws at them.
            </p>
            <div>
              <p className="font-bold text-gray-900 text-sm">Maths Optional Teacher</p>
              <p className="text-blue-600 text-xs font-semibold">The CSE Circle</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border-l-4 border-indigo-600"
          >
            <div className="text-5xl text-indigo-200 font-serif mb-4">"</div>
            <p className="text-gray-700 text-base italic leading-relaxed mb-5">
              Sociology is not abstract theory for its own sake — it is the most powerful lens
              we have to understand Indian society and the challenges an IAS officer will actually face.
              My goal is to make sure students walk into the exam not just remembering what Durkheim
              said, but knowing exactly how to use it.
            </p>
            <div>
              <p className="font-bold text-gray-900 text-sm">Sociology Optional Teacher</p>
              <p className="text-indigo-600 text-xs font-semibold">The CSE Circle</p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ─── FINAL CTA ────────────────────────────────────────────────────── */}
      <Section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Optional Score Starts with the Right Teacher.
            </h2>
            <p className="text-xl mb-2 text-blue-100">
              Attend a free demo class. Meet your teacher. Ask every question you have.
            </p>
            <p className="text-base mb-8 text-blue-200">
              No commitment required — just experience what teaching at The CSE Circle actually feels like.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary">
                  Book a Free Demo Class
                </Button>
              </Link>
              <Link to="/teachers">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  Meet Your Teachers
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>

    </div>
  );
}