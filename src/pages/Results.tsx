import { motion } from 'framer-motion';
import { Award, TrendingUp, Users } from 'lucide-react';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import TestimonialCard from '../components/TestimonialCard';
import { testimonials } from '../data/data';

export default function Results() {
  const topRankers = [
    { name: 'Arjun Mehta', rank: 42, year: 2023, service: 'IAS' },
    { name: 'Sneha Reddy', rank: 87, year: 2023, service: 'IAS' },
    { name: 'Rahul Verma', rank: 156, year: 2022, service: 'IAS' },
    { name: 'Priya Sharma', rank: 203, year: 2023, service: 'IPS' },
    { name: 'Karan Singh', rank: 289, year: 2022, service: 'IFS' },
    { name: 'Ananya Gupta', rank: 312, year: 2023, service: 'IAS' },
    { name: 'Vikram Patel', rank: 445, year: 2022, service: 'IRS' },
    { name: 'Neha Kulkarni', rank: 567, year: 2023, service: 'IAS' }
  ];

  const stats = [
    {
      icon: Award,
      value: '500+',
      label: 'Total Selections',
      color: 'text-amber-600'
    },
    {
      icon: TrendingUp,
      value: '85%',
      label: 'Success Rate',
      color: 'text-green-600'
    },
    {
      icon: Users,
      value: '50+',
      label: 'Top 500 Ranks',
      color: 'text-blue-600'
    }
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Success Stories</h1>
            <p className="text-xl text-blue-100">
              Celebrating the achievements of our students who cracked UPSC with flying colors
            </p>
          </motion.div>
        </div>
      </section>

      <Section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-lg text-center border border-gray-100"
              >
                <Icon className={`w-12 h-12 ${stat.color} mx-auto mb-4`} />
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        <SectionTitle
          title="Top Rankers 2022-2023"
          subtitle="Our students who made it to the top ranks"
        />

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Rank</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Service</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Year</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {topRankers.map((ranker, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="hover:bg-blue-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center justify-center w-10 h-10 bg-amber-100 text-amber-600 font-bold rounded-full">
                          {ranker.rank}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900">{ranker.name}</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                          {ranker.service}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{ranker.year}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-gradient-to-br from-blue-50 to-white">
        <SectionTitle
          title="What Our Students Say"
          subtitle="Real experiences from students who achieved their dreams"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
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
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join the ranks of successful civil servants who trusted The CSE CIRCLE for their preparation
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-amber-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-600 transition-colors shadow-lg"
          >
            Start Your Journey Today
          </motion.button>
        </motion.div>
      </Section>
    </div>
  );
}
