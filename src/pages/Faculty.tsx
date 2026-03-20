import { motion } from 'framer-motion';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import FacultyCard from '../components/FacultyCard';
import { faculty } from '../data/data';

export default function Faculty() {
  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Expert Faculty</h1>
            <p className="text-xl text-blue-100">
              Learn from the best minds in UPSC coaching with years of experience and proven track records
            </p>
          </motion.div>
        </div>
      </section>

      <Section className="bg-white">
        <SectionTitle
          title="Meet Our Experienced Mentors"
          subtitle="Dedicated professionals committed to your success"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {faculty.map((member) => (
            <FacultyCard key={member.id} {...member} />
          ))}
        </div>
      </Section>

      <Section className="bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            title="Why Our Faculty Stand Out"
            subtitle="What makes our teaching team exceptional"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Deep Subject Expertise',
                description: 'Each faculty member has specialized knowledge and years of teaching experience in their respective subjects.',
                stat: '15+ Years'
              },
              {
                title: 'Proven Track Record',
                description: 'Our faculty has successfully mentored hundreds of students who have cleared UPSC examinations.',
                stat: '500+ Selections'
              },
              {
                title: 'Student-Centric Approach',
                description: 'Focus on individual student needs with personalized guidance and continuous support throughout the journey.',
                stat: '100% Dedication'
              }
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
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Faculty-Led Programs
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Experience personalized mentorship and expert guidance from India's finest UPSC educators
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-600 transition-colors shadow-lg"
            >
              Enroll Now
            </motion.button>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
