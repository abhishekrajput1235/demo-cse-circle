import { useEffect, useMemo, useRef, useState } from 'react';

type BannerProps = {
  desktopImage: string | string[];
  mobileImage: string | string[];
  height?: string;
  overlay?: boolean;
  /** interval between slides in milliseconds */
  interval?: number;
  /** fade duration in milliseconds */
  transitionDuration?: number;
};

export default function ResponsiveBanner({
  desktopImage,
  mobileImage,
  height = 'h-[70vh] lg:h-[90vh]',
  overlay = true,
  interval = 5000,
  transitionDuration = 800,
}: BannerProps) {
  // normalize to arrays so component stays backward-compatible
  const desktopImages = useMemo(
    () => (Array.isArray(desktopImage) ? desktopImage : [desktopImage]),
    [desktopImage]
  );
  const mobileImages = useMemo(
    () => (Array.isArray(mobileImage) ? mobileImage : [mobileImage]),
    [mobileImage]
  );

  const maxSlides = Math.max(desktopImages.length, mobileImages.length, 1);
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (maxSlides <= 1) return; // nothing to autoplay
    if (isPaused) {
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
        timerRef.current = null;
      }
      return;
    }

    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % maxSlides);
    }, interval);
    return () => {
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [interval, maxSlides, isPaused]);

  return (
    <section
      className={`relative w-full overflow-hidden bg-black ${height}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <style>{`
        @keyframes kenburns {
          0% { transform: scale(1) translateY(0); }
          100% { transform: scale(1.06) translateY(-3%); }
        }
      `}</style>
      {/* Desktop slides */}
      {desktopImages.map((src, i) => {
        const active = i === index % desktopImages.length;
        return (
          <img
            key={`desk-${i}-${src}`}
            src={src}
            alt={`Banner ${i + 1}`}
            className={`hidden md:block absolute inset-0 w-full h-full object-cover object-center pointer-events-none`}
            style={{
              imageRendering: 'auto',
              opacity: active ? 1 : 0,
              // use CSS animation for Ken-Burns effect on the active slide
              animation: active ? `kenburns ${interval + transitionDuration}ms ease-in-out forwards` : 'none',
              transition: `opacity ${transitionDuration}ms ease-in-out`,
              willChange: 'opacity, transform',
              zIndex: active ? 20 : 10,
              transform: active ? undefined : 'scale(1.06) translateY(-3%)',
            }}
            aria-hidden={!active}
          />
        );
      })}

      {/* Mobile slides */}
      {mobileImages.map((src, i) => {
        const active = i === index % mobileImages.length;
        return (
          <img
            key={`mob-${i}-${src}`}
            src={src}
            alt={`Mobile Banner ${i + 1}`}
              className={`block md:hidden absolute inset-0 w-full h-full object-cover object-center pointer-events-none`}
              style={{
                imageRendering: 'auto',
                opacity: active ? 1 : 0,
                animation: active ? `kenburns ${interval + transitionDuration}ms ease-in-out forwards` : 'none',
                transition: `opacity ${transitionDuration}ms ease-in-out`,
                willChange: 'opacity, transform',
                zIndex: active ? 20 : 10,
                transform: active ? undefined : 'scale(1.06) translateY(-3%)',
              }}
            aria-hidden={!active}
          />
        );
      })}

      {/* Overlay (reduced so image stays sharp) */}
      {overlay && <div className="absolute inset-0 bg-black/6 pointer-events-none" />}
    </section>
  );
}