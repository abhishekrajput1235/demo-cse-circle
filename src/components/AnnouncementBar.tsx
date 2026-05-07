import { Megaphone } from 'lucide-react';

export default function AnnouncementBar() {
  const announcements = [
    '🎯 UPSC Optional Mathematics Batch 2026 Admissions Open Now',
    '📚 Free PYQs & Notes Available in Resources Section',
    '🏆 Congratulations to Our Selected Students in UPSC CSE',
    '📝 Weekly Mock Test Series Starts Every Sunday',
    '🔥 Early Bird Discount Available for New Admissions',
  ];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white border-b border-blue-500">
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee-content {
          animation: marquee 40s linear infinite;
          will-change: transform;
          display: flex;
        }
      `}</style>
      <div className="flex items-center h-11 bg-black">
        {/* Left Label */}
        <div className="text-yellow-500 relative z-10 flex items-center gap-2 bg-black/20 backdrop-blur-md px-4 sm:px-6 h-full shrink-0 border-r border-white/10">
          <Megaphone size={18} className="animate-pulse" />

          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide whitespace-nowrap">
            Latest Updates
          </span>
        </div>

        {/* Marquee */}
        <div className="relative flex-1 overflow-hidden">
          <div className="marquee-content flex items-center gap-16">
            {[...announcements, ...announcements].map(
              (item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 py-2 shrink-0 whitespace-nowrap"
                >
                  <span className="text-sm font-medium text-white/95 whitespace-nowrap">
                    {item}
                  </span>

                  <div className="w-2 h-2 rounded-full bg-yellow-300 shrink-0" />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}