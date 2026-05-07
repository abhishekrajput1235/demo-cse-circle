import {
  BrainCircuit,
  BookMarked,
  LineChart,
  Mic,
  ArrowRight,
} from 'lucide-react';

import { motion } from 'framer-motion';

export default function RoadmapSection() {
  const steps = [
    {
      id: '01',
      title: 'Free Counselling Session',
      description:
        'Take a diagnostic assessment and receive personalized guidance from our academic mentors.',
      icon: BrainCircuit,
      gradient:
        'from-blue-500 to-cyan-500',
    },

    {
      id: '02',
      title: 'Structured Learning Plan',
      description:
        'Follow a disciplined roadmap covering GS, Optional, CSAT, current affairs, and revision.',
      icon: BookMarked,
      gradient:
        'from-indigo-500 to-violet-500',
    },

    {
      id: '03',
      title: 'Test, Evaluate & Improve',
      description:
        'Weekly tests, evaluated answer copies, performance tracking, and strategic feedback.',
      icon: LineChart,
      gradient:
        'from-orange-500 to-pink-500',
    },

    {
      id: '04',
      title: 'Interview Guidance',
      description:
        'Mock interviews, DAF discussions, communication training, and personality development.',
      icon: Mic,
      gradient:
        'from-emerald-500 to-teal-500',
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-[#f8fbff]">
      {/* Background Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/40 blur-3xl rounded-full" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200/40 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700 border border-blue-200">
            How It Works
          </span>

          <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-tight">
            Your UPSC Journey <br />

            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Starts Here
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            A complete mentorship-driven ecosystem designed
            to guide aspirants from preparation to final
            interview success.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative mt-24">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-indigo-300 to-emerald-200 rounded-full" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.id}
                  initial={{
                    opacity: 0,
                    y: 60,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                  }}
                  className="group relative"
                >
                  {/* Arrow */}
                  {index !== steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-24 -right-5 z-20">
                      <ArrowRight className="text-blue-300 w-8 h-8" />
                    </div>
                  )}

                  {/* Card */}
                  <div className="relative h-full rounded-[32px] bg-white border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:-translate-y-3">
                    {/* Gradient Top */}
                    <div
                      className={`h-2 w-full bg-gradient-to-r ${step.gradient}`}
                    />

                    {/* Glow */}
                    <div
                      className={`absolute -top-20 right-0 w-40 h-40 bg-gradient-to-br ${step.gradient} opacity-10 blur-3xl`}
                    />

                    <div className="relative p-8">
                      {/* Step Number */}
                      <div className="flex items-center justify-between">
                        <span className="text-5xl font-black text-gray-100">
                          {step.id}
                        </span>

                        <div
                          className={`flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${step.gradient} shadow-lg text-white`}
                        >
                          <Icon size={30} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="mt-10">
                        <h3 className="text-2xl font-bold text-gray-900 leading-snug">
                          {step.title}
                        </h3>

                        <p className="mt-4 text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      {/* Bottom Accent */}
                      <div className="mt-8 flex items-center gap-2">
                        <div
                          className={`w-10 h-1 rounded-full bg-gradient-to-r ${step.gradient}`}
                        />

                        <div className="w-2 h-2 rounded-full bg-gray-300" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}