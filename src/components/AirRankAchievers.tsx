import { useState, useRef, useEffect, useCallback } from 'react';

type AirRankStudent = {
  id: number;
  studentName: string;
  rank: number;
  year: number;
  rollNumber: string;
  profilePhoto?: string;
};

const defaultAchievers: AirRankStudent[] = [
  { id: 1,  studentName: 'Aarav Sharma',   rank: 12,  year: 2024, rollNumber: '2458193', profilePhoto: 'https://ui-avatars.com/api/?name=Aarav+Sharma&background=6366f1&color=fff&size=128&bold=true' },
  { id: 2,  studentName: 'Ananya Singh',   rank: 24,  year: 2024, rollNumber: '2458219', profilePhoto: 'https://ui-avatars.com/api/?name=Ananya+Singh&background=6366f1&color=fff&size=128&bold=true' },
  { id: 3,  studentName: 'Rohit Verma',    rank: 39,  year: 2024, rollNumber: '2458301', profilePhoto: 'https://ui-avatars.com/api/?name=Rohit+Verma&background=6366f1&color=fff&size=128&bold=true' },
  { id: 4,  studentName: 'Kritika Das',    rank: 55,  year: 2024, rollNumber: '2458344', profilePhoto: 'https://ui-avatars.com/api/?name=Kritika+Das&background=6366f1&color=fff&size=128&bold=true' },
  { id: 5,  studentName: 'Nikhil Raj',     rank: 68,  year: 2024, rollNumber: '2458391', profilePhoto: 'https://ui-avatars.com/api/?name=Nikhil+Raj&background=6366f1&color=fff&size=128&bold=true' },
  { id: 6,  studentName: 'Mitali Roy',     rank: 74,  year: 2024, rollNumber: '2458420', profilePhoto: 'https://ui-avatars.com/api/?name=Mitali+Roy&background=6366f1&color=fff&size=128&bold=true' },
  { id: 7,  studentName: 'Devansh Jain',   rank: 89,  year: 2024, rollNumber: '2458467', profilePhoto: 'https://ui-avatars.com/api/?name=Devansh+Jain&background=6366f1&color=fff&size=128&bold=true' },
  { id: 8,  studentName: 'Sanya Gupta',    rank: 97,  year: 2024, rollNumber: '2458511', profilePhoto: 'https://ui-avatars.com/api/?name=Sanya+Gupta&background=6366f1&color=fff&size=128&bold=true' },
  { id: 9,  studentName: 'Harsh Patel',    rank: 110, year: 2024, rollNumber: '2458574', profilePhoto: 'https://ui-avatars.com/api/?name=Harsh+Patel&background=6366f1&color=fff&size=128&bold=true' },
  { id: 10, studentName: 'Ishita Kumari',  rank: 126, year: 2024, rollNumber: '2458622', profilePhoto: 'https://ui-avatars.com/api/?name=Ishita+Kumari&background=6366f1&color=fff&size=128&bold=true' },
  { id: 11, studentName: 'Arjun Naik',     rank: 139, year: 2024, rollNumber: '2458699', profilePhoto: 'https://ui-avatars.com/api/?name=Arjun+Naik&background=6366f1&color=fff&size=128&bold=true' },
  { id: 12, studentName: 'Simran Kaur',    rank: 148, year: 2024, rollNumber: '2458736', profilePhoto: 'https://ui-avatars.com/api/?name=Simran+Kaur&background=6366f1&color=fff&size=128&bold=true' },
];

/** Cards visible per breakpoint */
const getVisibleCount = (width: number): number => {
  if (width < 480) return 1;
  if (width < 768) return 2;
  if (width < 1024) return 3;
  return 4;
};

type AirRankAchieversProps = {
  title?: string;
  students?: AirRankStudent[];
};

export default function AirRankAchievers({
  title = 'AIR Rank Achievers',
  students = defaultAchievers,
}: AirRankAchieversProps) {
  const viewportRef  = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef<number | null>(null);

  const [containerWidth, setContainerWidth] = useState(0);
  const [visibleCount,   setVisibleCount]   = useState(4);
  const [currentIndex,   setCurrentIndex]   = useState(0);
  const [animate,        setAnimate]        = useState(false);

  const GAP = 16; // px between cards

  // Pixel-accurate card width derived from real container measurement
  const cardWidth    = containerWidth > 0
    ? (containerWidth - GAP * (visibleCount - 1)) / visibleCount
    : 0;
  const stepPx       = cardWidth + GAP;
  const maxIndex     = Math.max(0, students.length - visibleCount);
  const translateXPx = -(currentIndex * stepPx);

  // ── Measure & observe container ─────────────────────────────────────────
  const measure = useCallback(() => {
    if (!viewportRef.current) return;
    const w = viewportRef.current.getBoundingClientRect().width;
    setContainerWidth(w);
    setVisibleCount(getVisibleCount(w));
  }, []);

  useEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (viewportRef.current) ro.observe(viewportRef.current);
    return () => ro.disconnect();
  }, [measure]);

  // Clamp index on resize/rotate so we never show blank space
  useEffect(() => {
    setCurrentIndex((prev) =>
      Math.min(prev, Math.max(0, students.length - visibleCount))
    );
  }, [visibleCount, students.length]);

  // ── Navigation ──────────────────────────────────────────────────────────
  const goTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(Math.max(0, students.length - visibleCount), index));
      setAnimate(true);
      setCurrentIndex(clamped);
      setTimeout(() => setAnimate(false), 420);
    },
    [students.length, visibleCount]
  );

  const prev = useCallback(() => goTo(currentIndex - 1), [currentIndex, goTo]);
  const next = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [prev, next]);

  // ── Touch / mouse drag ──────────────────────────────────────────────────
  const onPointerDown = (x: number) => { dragStartRef.current = x; };
  const onPointerUp   = (x: number) => {
    if (dragStartRef.current === null) return;
    const delta = dragStartRef.current - x;
    if (Math.abs(delta) > 40) delta > 0 ? next() : prev();
    dragStartRef.current = null;
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-8 select-none">

      {/* Header */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">{title}</h2>
          <p className="mt-0.5 text-sm text-gray-500">
            Top performers with their ranks and details
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
            {students.length} Students
          </span>
          {/* Desktop arrows in header */}
          <div className="hidden sm:flex gap-2">
            <NavBtn onClick={prev} disabled={currentIndex === 0}      dir="left"  />
            <NavBtn onClick={next} disabled={currentIndex >= maxIndex} dir="right" />
          </div>
        </div>
      </div>

      {/* Slider viewport — overflow hidden clips the track */}
      <div
        ref={viewportRef}
        className="overflow-hidden"
        onMouseDown={(e)  => onPointerDown(e.clientX)}
        onMouseUp={(e)    => onPointerUp(e.clientX)}
        onMouseLeave={()  => { dragStartRef.current = null; }}
        onTouchStart={(e) => onPointerDown(e.touches[0].clientX)}
        onTouchEnd={(e)   => onPointerUp(e.changedTouches[0].clientX)}
      >
        {/* Track — pixel width = all cards + gaps between them */}
        <div
          className="flex"
          style={{
            gap:       `${GAP}px`,
            width:     cardWidth > 0 ? `${students.length * stepPx - GAP}px` : '100%',
            transform: `translateX(${translateXPx}px)`,
            transition: animate
              ? 'transform 0.42s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              : 'none',
          }}
        >
          {students.map((student) => (
            <div
              key={student.id}
              // flex-shrink-0 + explicit pixel width = no layout surprises
              style={{ width: `${cardWidth}px`, flexShrink: 0 }}
            >
              <StudentCard student={student} />
            </div>
          ))}
        </div>
      </div>

      {/* Footer: dots + mobile arrows */}
      <div className="mt-5 flex items-center justify-center gap-3">
        <div className="sm:hidden">
          <NavBtn onClick={prev} disabled={currentIndex === 0}      dir="left"  />
        </div>

        <div className="flex items-center gap-1.5">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width:        i === currentIndex ? 24 : 10,
                height:       10,
                borderRadius: 9999,
                background:   i === currentIndex ? '#2563eb' : '#d1d5db',
                border:       'none',
                cursor:       'pointer',
                padding:      0,
                transition:   'width 0.3s ease, background 0.3s ease',
              }}
            />
          ))}
        </div>

        <div className="sm:hidden">
          <NavBtn onClick={next} disabled={currentIndex >= maxIndex} dir="right" />
        </div>
      </div>

      <p className="mt-2 text-center text-xs text-gray-400">
        {currentIndex + 1}–{Math.min(currentIndex + visibleCount, students.length)} of {students.length}
      </p>
    </section>
  );
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function NavBtn({
  onClick, disabled, dir,
}: {
  onClick: () => void;
  disabled: boolean;
  dir: 'left' | 'right';
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === 'left' ? 'Previous' : 'Next'}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-all hover:border-blue-400 hover:bg-blue-50 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-30"
    >
      <svg className="h-4 w-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {dir === 'left'
          ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />}
      </svg>
    </button>
  );
}

function StudentCard({ student }: { student: AirRankStudent }) {
  return (
    <article className="group h-full rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex flex-col items-center text-center">

        {/* Avatar */}
        <div className="relative mb-4">
          <div className="h-20 w-20 overflow-hidden rounded-full border-4 border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-md transition-all duration-200 group-hover:border-blue-300 sm:h-24 sm:w-24">
            <img
              src={
                student.profilePhoto ||
                `https://ui-avatars.com/api/?name=${encodeURIComponent(student.studentName)}&background=6366f1&color=fff&size=128&bold=true`
              }
              alt={student.studentName}
              className="h-full w-full object-cover"
              draggable={false}
            />
          </div>
          <span className="absolute -bottom-2 -right-2 rounded-full bg-amber-500 px-2 py-0.5 text-xs font-bold text-white shadow-md">
            #{student.rank}
          </span>
        </div>

        {/* Name */}
        <h3 className="mb-2 text-base font-semibold leading-tight text-gray-900 sm:text-lg">
          {student.studentName}
        </h3>

        {/* Badges */}
        <div className="mb-3 flex flex-wrap items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5">
            <svg className="h-3 w-3 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            <span className="text-xs font-semibold text-amber-700">AIR {student.rank}</span>
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2 py-0.5">
            <svg className="h-3 w-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-xs font-medium text-gray-600">{student.year}</span>
          </span>
        </div>

        {/* Roll number */}
        <div className="flex w-full items-center justify-center gap-2 rounded-lg bg-gray-50 px-3 py-2 transition-colors group-hover:bg-gray-100">
          <svg className="h-4 w-4 shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
          </svg>
          <span className="truncate text-sm font-medium text-gray-700">
            {student.rollNumber}
          </span>
        </div>

      </div>
    </article>
  );
}

export type { AirRankStudent };