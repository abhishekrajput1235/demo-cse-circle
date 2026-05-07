import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Download, Lock } from "lucide-react";

// ─── THEME CONFIG ─────────────────────────────────────────
const THEMES = {
  maths: {
    accent: "#2563EB",
    accentLight: "#EFF6FF",
    gradient: "linear-gradient(135deg, #1D4ED8 0%, #1E3A8A 100%)",
  },
  sociology: {
    accent: "#7C3AED",
    accentLight: "#F5F3FF",
    gradient: "linear-gradient(135deg, #6D28D9 0%, #4C1D95 100%)",
  },
} as const;

// ─── BATCH DATA ───────────────────────────────────────────
const batches = {
  maths: [
    {
      title: "Free PYQ Batch",
      years: "2010 – 2020",
      description:
        "Foundation PYQs covering all major Paper I & II topics like Algebra, ODE, Calculus & more.",
      topics: ["Linear Algebra", "ODE", "Calculus"],
      count: 11,
      free: true,
    },
    {
      title: "Advanced PYQ Batch",
      years: "2021 – 2024",
      description:
        "Latest UPSC PYQs with trend analysis + model answers for smart preparation.",
      topics: ["Real Analysis", "Abstract Algebra", "PDE"],
      count: 4,
      free: false,
    },
  ],
  sociology: [
    {
      title: "Free PYQ Batch",
      years: "2010 – 2020",
      description:
        "Core PYQs of Indian Society, Thinkers, Stratification & Social Change.",
      topics: ["Thinkers", "Caste", "Social Change"],
      count: 11,
      free: true,
    },
    {
      title: "Advanced PYQ Batch",
      years: "2021 – 2024",
      description:
        "Recent PYQs with sociological insights & value-added model answers.",
      topics: ["Movements", "Tribal", "Population"],
      count: 4,
      free: false,
    },
  ],
};

// ─── BATCH CARD ───────────────────────────────────────────
function BatchCard({ batch, theme }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group relative rounded-3xl border border-gray-200 bg-white p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
    >
      {/* Accent */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: theme.accent }}
      />

      {/* Badge */}
      <span
        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold mb-4 ${
          batch.free
            ? "bg-emerald-100 text-emerald-700"
            : "bg-amber-100 text-amber-700"
        }`}
      >
        {batch.free ? "Free Access" : "Premium"}
      </span>

      {/* Title */}
      <h3 className="text-lg font-black text-gray-900 mb-1">
        {batch.title}
      </h3>

      <p className="text-xs text-gray-500 mb-3">{batch.years}</p>

      {/* Topics */}
      <ul className="text-xs text-gray-500 space-y-1 mb-4">
        {batch.topics.map((t: string, i: number) => (
          <li key={i}>• {t}</li>
        ))}
      </ul>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-5 leading-relaxed">
        {batch.description}
      </p>

      {/* Stats */}
      <div className="flex justify-between items-center mb-6">
        <span className="text-xs text-gray-400">
          {batch.count} Years Included
        </span>
      </div>

      {/* CTA */}
      <button
        className="w-full py-2.5 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2"
        style={
          batch.free
            ? {
                background: theme.accentLight,
                color: theme.accent,
              }
            : {
                background: theme.accent,
                color: "#fff",
              }
        }
      >
        {batch.free ? (
          <>
            <Download size={14} />
            Download Now
          </>
        ) : (
          <>
            <Lock size={14} />
            Unlock Batch
          </>
        )}
      </button>
    </motion.div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────
export default function PYQs() {
  const [optional, setOptional] = useState<"maths" | "sociology">("maths");

  const theme = THEMES[optional];
  const data = batches[optional];

  return (
    <section className="py-20 px-4 bg-[#F8F9FB] min-h-screen">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-bold text-gray-500 uppercase tracking-widest mb-5 shadow-sm">
            <BookOpen size={12} />
            Previous Year Questions
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            The PYQ Bank
          </h2>

          <p className="text-gray-500 text-base max-w-xl mx-auto">
            UPSC Maths & Sociology Optional — organised into smart batches for
            faster preparation.
          </p>
        </div>

        {/* Optional Switch */}
        <div className="flex mb-10 bg-white rounded-xl p-1 border w-fit mx-auto">
          {(["maths", "sociology"] as const).map((opt) => (
            <button
              key={opt}
              onClick={() => setOptional(opt)}
              className="px-6 py-2 rounded-lg text-sm font-bold transition-all"
              style={
                optional === opt
                  ? { background: theme.accent, color: "#fff" }
                  : { color: "#6B7280" }
              }
            >
              {opt === "maths" ? "Maths Optional" : "Sociology Optional"}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {data.map((batch, i) => (
            <BatchCard key={i} batch={batch} theme={theme} />
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-14 text-center">
          <p className="text-sm text-gray-500 mb-4">
            Start with free PYQs or unlock full preparation system
          </p>

          <button
            className="px-6 py-3 rounded-xl text-white font-bold shadow-md hover:opacity-90"
            style={{ background: theme.gradient }}
          >
            Explore Full Course
          </button>
        </div>
      </div>
    </section>
  );
}