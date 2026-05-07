import { motion } from 'framer-motion';
import { CheckCircle2, Clock3 } from 'lucide-react';
import Section from './Section';
import SectionTitle from './SectionTitle';

type CourseItem = {
  title: string;
  duration: string;
  mode: string;
  summary: string;
  points: string[];
};

type CourseTrackBrief = {
  name: string;
  courses: CourseItem[];
};

interface CourseDetailsSectionProps {
  tracks: CourseTrackBrief[];
}

const trackStyleMap: Record<string, { badge: string; icon: string; border: string; glow: string }> = {
  Mathematics: {
    badge: 'bg-blue-100 text-blue-700',
    icon: 'text-blue-600',
    border: 'border-blue-200',
    glow: 'hover:shadow-blue-100',
  },
  Sociology: {
    badge: 'bg-amber-100 text-amber-700',
    icon: 'text-amber-600',
    border: 'border-amber-200',
    glow: 'hover:shadow-amber-100',
  },
  'General Studies': {
    badge: 'bg-emerald-100 text-emerald-700',
    icon: 'text-emerald-600',
    border: 'border-emerald-200',
    glow: 'hover:shadow-emerald-100',
  },
};

export default function CourseDetailsSection({ tracks }: CourseDetailsSectionProps) {
  return (
    <Section className="bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <SectionTitle
        title="Course Details"
        subtitle="Compact overview with duration, mode, and key focus points."
      />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-10">
        {tracks.flatMap((track, trackIndex) =>
          track.courses.map((course, courseIndex) => (
            <motion.article
              key={course.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (trackIndex + courseIndex) * 0.04 }}
              whileHover={{ y: -4 }}
              className={`rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl ${trackStyleMap[track.name]?.border ?? 'border-gray-200'} ${trackStyleMap[track.name]?.glow ?? ''}`}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <p className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide mb-3 ${trackStyleMap[track.name]?.badge ?? 'bg-slate-100 text-slate-700'}`}>
                    {track.name}
                  </p>
                  <h3 className="text-lg md:text-xl font-extrabold text-slate-900 leading-snug">{course.title}</h3>
                </div>
                <span className="text-[11px] font-bold bg-slate-100 border border-slate-200 rounded-full px-3 py-1 text-slate-700 whitespace-nowrap">
                  {course.mode}
                </span>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-5">{course.summary}</p>

              <div className="inline-flex items-center gap-2 text-sm text-slate-700 font-semibold mb-5 bg-slate-50 rounded-full border border-slate-200 px-3 py-1.5">
                <Clock3 size={15} className="text-slate-500" />
                Duration: {course.duration}
              </div>

              <ul className="space-y-2">
                {course.points.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle2 size={15} className={`mt-0.5 shrink-0 ${trackStyleMap[track.name]?.icon ?? 'text-blue-600'}`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))
        )}
      </div>
    </Section>
  );
}
