import { useState, useEffect, useCallback, useRef } from 'react';

export interface ScrollProgress {
  progress: number;        // 0 to 1
  scrollY: number;         // Raw scroll position
  maxScroll: number;       // Maximum scrollable height
  isScrolling: boolean;    // True during scroll
}

export function useScrollProgress(): ScrollProgress {
  const [scrollProgress, setScrollProgress] = useState<ScrollProgress>({
    progress: 0,
    scrollY: 0,
    maxScroll: 0,
    isScrolling: false,
  });

  const scrollTimeoutRef = useRef<NodeJS.Timeout>();
  const tickingRef = useRef(false);

  const calculateProgress = useCallback(() => {
    const scrollY = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const maxScroll = documentHeight - windowHeight;
    const progress = maxScroll > 0 ? Math.min(Math.max(scrollY / maxScroll, 0), 1) : 0;

    setScrollProgress({
      progress,
      scrollY,
      maxScroll,
      isScrolling: true,
    });

    // Debounce isScrolling flag (150ms timeout)
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      setScrollProgress(prev => ({
        ...prev,
        isScrolling: false,
      }));
    }, 150);

    tickingRef.current = false;
  }, []);

  useEffect(() => {
    // Throttled scroll handler using requestAnimationFrame
    const handleScroll = () => {
      if (!tickingRef.current) {
        window.requestAnimationFrame(() => {
          calculateProgress();
        });
        tickingRef.current = true;
      }
    };

    // Handle window resize events
    const handleResize = () => {
      calculateProgress();
    };

    // Initial calculation
    calculateProgress();

    // Add event listeners with passive flag for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [calculateProgress]);

  return scrollProgress;
}
