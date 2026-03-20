import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, BookOpen, TrendingUp } from 'lucide-react';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';

export default function About() {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality education and maintaining academic excellence in every aspect.'
    },
    {
      icon: Users,
      title: 'Student-Centric',
      description: 'Every decision we make is focused on providing the best learning experience for our students.'
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Learning',
      description: 'Holistic approach covering all aspects of UPSC preparation from foundation to final stage.'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Growth',
      description: 'Constantly evolving our teaching methods and content to match the dynamic UPSC pattern.'
    }
  ];

  const achievements = [
    { number: '15+', label: 'Years of Excellence' },
    { number: '5000+', label: 'Students Trained' },
    { number: '500+', label: 'Successful Candidates' },
    { number: '85%', label: 'Success Rate' }
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About The CSE CIRCLE</h1>
            <p className="text-xl text-blue-100">
              Nurturing civil servants for over 15 years with dedication, expertise, and proven results
            </p>
          </motion.div>
        </div>
      </section>

      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Students studying"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              The CSE CIRCLE is one of India's most trusted UPSC coaching institutes, established with the vision of making quality civil services education accessible to all aspirants. With over 15 years of excellence, we have successfully guided thousands of students towards achieving their dream of becoming civil servants.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our institute is built on the foundation of experienced faculty, comprehensive study material, regular testing, and personalized mentorship. We understand that every student is unique, and our approach is tailored to bring out the best in each individual.
            </p>
            <p className="text-gray-600 leading-relaxed">
              What sets us apart is our commitment to not just teaching but transforming lives. We don't just prepare you for an examination; we prepare you for a lifetime of public service and leadership.
            </p>
          </motion.div>
        </div>
      </Section>

      <Section className="bg-gradient-to-br from-blue-50 to-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To empower UPSC aspirants with world-class education, comprehensive resources, and personalized guidance, enabling them to achieve their dreams of serving the nation as civil servants. We strive to make quality education accessible and affordable while maintaining the highest standards of teaching excellence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be recognized as India's most trusted and result-oriented UPSC coaching institute, creating future leaders who will serve the nation with integrity, dedication, and excellence. We envision a future where every deserving aspirant has access to the best resources and guidance to realize their potential.
            </p>
          </motion.div>
        </div>
      </Section>

      <Section className="bg-white">
        <SectionTitle
          title="Our Core Values"
          subtitle="The principles that guide everything we do"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Section>

      <Section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <SectionTitle
          title="Our Achievements"
          subtitle="Numbers that reflect our commitment to excellence"
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold mb-3 text-amber-400">
                {achievement.number}
              </div>
              <div className="text-lg text-blue-100">{achievement.label}</div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
