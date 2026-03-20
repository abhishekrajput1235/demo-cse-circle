import { motion } from 'framer-motion';
import { BookOpen, FileText, TrendingUp } from 'lucide-react';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import BlogCard from '../components/BlogCard';
import { blogPosts } from '../data/data';

export default function Resources() {
  const categories = [
    { name: 'Preparation Strategy', count: 15, icon: BookOpen },
    { name: 'Current Affairs', count: 32, icon: TrendingUp },
    { name: 'Study Material', count: 24, icon: FileText }
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Resources & Blog</h1>
            <p className="text-xl text-blue-100">
              Expert articles, preparation tips, and current affairs to support your UPSC journey
            </p>
          </motion.div>
        </div>
      </section>

      <Section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 text-left"
              >
                <Icon className="w-10 h-10 text-blue-600 mb-3" />
                <h3 className="text-lg font-bold text-gray-900 mb-1">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.count} Articles</p>
              </motion.button>
            );
          })}
        </div>

        <SectionTitle
          title="Latest Articles"
          subtitle="Stay updated with our expert insights and preparation guidance"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </Section>

      <Section className="bg-gradient-to-br from-blue-50 to-white">
        <SectionTitle
          title="UPSC Preparation Resources"
          subtitle="Essential materials to enhance your preparation"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: 'UPSC Syllabus 2024',
              description: 'Complete syllabus for Prelims and Mains examination with subject-wise breakdown.',
              type: 'PDF Download'
            },
            {
              title: 'Previous Year Papers',
              description: 'Collection of last 10 years question papers with detailed solutions.',
              type: 'PDF Download'
            },
            {
              title: 'Current Affairs Monthly',
              description: 'Comprehensive monthly compilation of important current affairs for UPSC.',
              type: 'PDF Download'
            },
            {
              title: 'Study Plan Templates',
              description: 'Structured study plans for different phases of UPSC preparation.',
              type: 'PDF Download'
            }
          ].map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{resource.description}</p>
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                {resource.type}
              </button>
            </motion.div>
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
            Want More Exclusive Content?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Subscribe to our newsletter for weekly updates, study tips, and exclusive resources
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-600 transition-colors shadow-lg"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </Section>
    </div>
  );
}
