import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  MapPin, Phone, Mail, Clock, Send,
  CheckCircle, ArrowRight, ChevronDown, ChevronUp, MessageSquare
} from 'lucide-react';
import Section from '../components/Section';

// ─── IMAGE ─────────────────────────────────────────────────────────────────
const HERO_IMG = 'https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&w=900';

// ─── DATA ──────────────────────────────────────────────────────────────────
const contactInfo = [
  { icon: MapPin,  title: 'Visit Us',           color: 'bg-blue-600',   details: '123 Education Street, Rajendra Nagar, New Delhi – 110060'  },
  { icon: Phone,   title: 'Call / WhatsApp',    color: 'bg-green-600',  details: '+91 98765 43210  ·  +91 98765 43211'                       },
  { icon: Mail,    title: 'Email',              color: 'bg-indigo-600', details: 'info@thecsecircle.com  ·  admissions@thecsecircle.com'     },
  { icon: Clock,   title: 'Working Hours',      color: 'bg-amber-600',  details: 'Monday – Saturday  ·  9:00 AM – 6:00 PM  ·  Sunday Closed' },
];

const enquiryOptions = [
  'Book a Free Demo Class — Maths Optional',
  'Book a Free Demo Class — Sociology Optional',
  'Help Choosing Between Both Optionals',
  'Enrol in Maths Optional Programme',
  'Enrol in Sociology Optional Programme',
  'Access Full PYQ Bank & Model Answers',
  'Second Attempt — Score Improvement',
  'General Enquiry',
];

const faqs = [
  {
    q: 'What happens in a free demo class?',
    a: 'A live 60-minute session with the actual teacher, teaching an actual syllabus topic. No sales pitch — just real teaching so you can evaluate the fit before committing.',
  },
  {
    q: 'Is the demo online or in-person?',
    a: 'Both options are available. Online demos run via a live video platform. In-person sessions are at our Delhi centre by appointment. Mention your preference in the form.',
  },
  {
    q: 'Will there be a follow-up sales call after the demo?',
    a: 'No. We do not make sales calls after a demo class. If you want to enrol, you will find everything you need on this website. The demo is an honest experience — you decide.',
  },
  {
    q: 'Can I attend a demo for both optionals?',
    a: 'Yes. If you are still deciding between Maths Optional and Sociology Optional, we actively encourage attending a demo for each so your choice is based on first-hand experience.',
  },
  {
    q: 'How quickly will you confirm my demo slot?',
    a: 'Within 24 hours on working days. Your teacher personally reviews your background note before confirming, so the demo is calibrated to be most useful for you.',
  },
];

// ─── PAGE ──────────────────────────────────────────────────────────────────
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', reason: '', background: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <div className="min-h-screen pt-20">

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block bg-white/15 border border-white/25 text-white/80 text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-5">
              Free Demo Class — No Commitment
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Get in Touch
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed">
              Book a free demo class, ask about our programmes, or speak to us about your UPSC optional preparation.
              We respond within 24 hours on working days.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── MAIN: FORM + SIDEBAR ─────────────────────────────────────── */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          {/* ── FORM (3 cols) ───────────────────────────────────────── */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Book a Demo / Send an Enquiry</h2>
            <p className="text-gray-500 text-sm mb-7 leading-relaxed">
              Fill in the form below. Your teacher will review your background note before the demo
              so the session is tailored to where you are in your preparation.
            </p>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center"
                >
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={28} className="text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Enquiry Received</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-sm mx-auto">
                    Your teacher will review your background and confirm your demo slot within 24 hours.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link to="/pyq">
                      <button className="border border-gray-200 text-gray-700 text-sm font-semibold px-5 py-2.5 rounded-xl hover:border-blue-300 transition-colors">
                        Download Free PYQs
                      </button>
                    </Link>
                    <Link to="/teachers">
                      <button className="bg-blue-600 text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors">
                        Meet Your Teacher →
                      </button>
                    </Link>
                  </div>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={onSubmit} className="space-y-5">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5">Full Name *</label>
                      <input
                        type="text" name="name" value={form.name} onChange={onChange} required
                        placeholder="Your full name"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm bg-gray-50 focus:bg-white focus:border-blue-400 focus:ring-1 focus:ring-blue-200 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5">Phone / WhatsApp *</label>
                      <input
                        type="tel" name="phone" value={form.phone} onChange={onChange} required
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm bg-gray-50 focus:bg-white focus:border-blue-400 focus:ring-1 focus:ring-blue-200 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5">Email Address *</label>
                    <input
                      type="email" name="email" value={form.email} onChange={onChange} required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm bg-gray-50 focus:bg-white focus:border-blue-400 focus:ring-1 focus:ring-blue-200 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5">What Are You Looking For? *</label>
                    <select
                      name="reason" value={form.reason} onChange={onChange} required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm bg-gray-50 focus:bg-white focus:border-blue-400 focus:ring-1 focus:ring-blue-200 focus:outline-none transition-colors text-gray-700"
                    >
                      <option value="">Select an option</option>
                      {enquiryOptions.map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5">
                      Academic Background
                      <span className="text-gray-400 font-normal normal-case ml-1">(helps the teacher prepare your demo)</span>
                    </label>
                    <input
                      type="text" name="background" value={form.background} onChange={onChange}
                      placeholder="e.g. BSc Maths, B.Tech, BA Economics, Working Professional..."
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm bg-gray-50 focus:bg-white focus:border-blue-400 focus:ring-1 focus:ring-blue-200 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5">
                      Message / Questions
                      <span className="text-gray-400 font-normal normal-case ml-1">(optional)</span>
                    </label>
                    <textarea
                      name="message" value={form.message} onChange={onChange} rows={4}
                      placeholder="Where are you in your preparation? Which attempt is this? Any specific questions for the teacher?"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm bg-gray-50 focus:bg-white focus:border-blue-400 focus:ring-1 focus:ring-blue-200 focus:outline-none resize-none transition-colors"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2.5 shadow-md hover:from-blue-700 hover:to-blue-900 transition-all"
                  >
                    <Send size={16} /> Send Enquiry
                  </motion.button>

                  <p className="text-gray-400 text-xs text-center">
                    No sales calls after submission. We respond within 24 hours on working days.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* ── SIDEBAR (2 cols) ─────────────────────────────────────── */}
          <div className="lg:col-span-2 space-y-6 lg:sticky lg:top-24">

            {/* Teacher image */}
            <div className="relative h-52 rounded-2xl overflow-hidden shadow-xl">
              <img
                src={HERO_IMG}
                alt="Teacher personally mentoring a UPSC student at The CSE Circle"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-5">
                <div>
                  <p className="text-white font-bold text-sm">Your Teacher — Not a Counsellor</p>
                  <p className="text-gray-300 text-xs mt-0.5 leading-snug">
                    When you reach out, your teacher personally reviews your enquiry and confirms your demo slot.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact cards */}
            <div className="space-y-3">
              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.07 }}
                    className="flex items-start gap-4 bg-gray-50 border border-gray-100 rounded-xl p-4 hover:border-blue-200 transition-colors"
                  >
                    <div className={`w-10 h-10 ${info.color} rounded-xl flex items-center justify-center shrink-0`}>
                      <Icon size={17} className="text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 text-sm">{info.title}</p>
                      <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{info.details}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* WhatsApp shortcut */}
            <a
              href="https://wa.me/919876543210?text=Hi%2C%20I%20am%20interested%20in%20a%20free%20demo%20class%20at%20The%20CSE%20Circle."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white font-bold text-sm py-3.5 rounded-xl transition-colors shadow-sm"
            >
              <MessageSquare size={16} /> Message Us on WhatsApp
            </a>

            {/* Demo quick-facts */}
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
              <p className="text-blue-900 font-bold text-sm mb-3">Free Demo Class — Quick Facts</p>
              {[
                '60-minute live session with the actual teacher',
                'Online or in-person (your choice)',
                'Real syllabus topic — not a sales pitch',
                'Slot confirmed within 24 hours',
                'No fee. No commitment. No follow-up calls.',
              ].map((f, i) => (
                <div key={i} className="flex items-start gap-2 py-1.5 border-b border-blue-100 last:border-0">
                  <CheckCircle size={13} className="text-blue-500 mt-0.5 shrink-0" />
                  <p className="text-blue-800 text-xs">{f}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── MAP ───────────────────────────────────────────────────────── */}
      <Section className="bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-7">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Find Us in New Delhi</h2>
            <p className="text-gray-500 text-sm">
              123 Education Street, Rajendra Nagar, New Delhi – 110060 &nbsp;·&nbsp;
              Nearest Metro: Rajendra Place (Blue Line) &nbsp;·&nbsp;
              Online students attend all sessions remotely.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-xl border border-gray-200"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9747449559834!2d77.1824858!3d28.6358434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d033c57c1c1c1%3A0x1c1c1c1c1c1c1c1c!2sRajendra%20Nagar%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The CSE Circle — Rajendra Nagar, New Delhi"
            />
          </motion.div>
        </div>
      </Section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <Section className="bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-1 text-center">Questions About the Demo Class</h2>
          <p className="text-gray-500 text-sm text-center mb-8">Everything you want to know before you book.</p>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`border rounded-xl overflow-hidden transition-all ${openFaq === i ? 'border-blue-300 shadow-sm' : 'border-gray-200'}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left gap-4"
                >
                  <span className={`font-semibold text-sm ${openFaq === i ? 'text-blue-700' : 'text-gray-800'}`}>{faq.q}</span>
                  {openFaq === i
                    ? <ChevronUp size={16} className="text-blue-500 shrink-0" />
                    : <ChevronDown size={16} className="text-gray-400 shrink-0" />}
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────── */}
      <Section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-blue-100 text-lg mb-2">
            One free demo class. The actual teacher. No commitment.
          </p>
          <p className="text-blue-200 text-sm mb-8">
            If the teaching resonates — you will know. If it does not — you have lost nothing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact-form">
              <button className="bg-amber-500 hover:bg-amber-400 text-white font-bold text-base px-8 py-4 rounded-xl transition-colors shadow-lg flex items-center gap-2 mx-auto">
                <Send size={17} /> Book Free Demo Class
              </button>
            </a>
            <Link to="/teachers">
              <button className="border-2 border-white/40 text-white hover:bg-white hover:text-blue-700 font-bold text-base px-8 py-4 rounded-xl transition-all flex items-center gap-2 mx-auto">
                Meet Our Teachers <ArrowRight size={17} />
              </button>
            </Link>
          </div>
        </motion.div>
      </Section>

    </div>
  );
}