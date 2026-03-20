import { motion } from 'framer-motion';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import CourseCard from '../components/CourseCard';
import { courses } from '../data/data';

export default function Courses() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Courses</h1>
            <p className="text-xl text-blue-100">
              Comprehensive programs designed to guide you through every stage of your UPSC journey
            </p>
          </motion.div>
        </div>
      </section>

      <Section className="bg-white">
        <SectionTitle
          title="Choose Your Path to Success"
          subtitle="Select from our range of carefully crafted courses tailored to meet your specific preparation needs"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </Section>

      <Section className="bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            title="What's Included in Every Course"
            subtitle="Premium features designed to maximize your learning experience"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Live Interactive Classes',
                description: 'Engaging live sessions with expert faculty where you can ask questions and clarify doubts in real-time.'
              },
              {
                title: 'Comprehensive Study Material',
                description: 'Well-researched, updated, and easy-to-understand study material covering the entire UPSC syllabus.'
              },
              {
                title: 'Regular Mock Tests',
                description: 'Frequent tests designed to simulate actual UPSC exams with detailed performance analysis.'
              },
              {
                title: 'Personal Mentor Support',
                description: 'One-on-one guidance from experienced mentors to help you stay on track and motivated.'
              },
              {
                title: 'Current Affairs Updates',
                description: 'Daily current affairs coverage with analysis of important events relevant for UPSC.'
              },
              {
                title: 'Answer Writing Practice',
                description: 'Regular answer writing exercises with personalized feedback to improve your writing skills.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Not Sure Which Course is Right for You?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get free counselling from our expert advisors to find the perfect course for your needs
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-amber-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-600 transition-colors shadow-lg"
          >
            Book Free Counselling
          </motion.button>
        </motion.div>
      </Section>
    </div>
  );
}
