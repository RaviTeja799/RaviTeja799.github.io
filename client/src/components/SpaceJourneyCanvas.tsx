import { useEffect, useRef } from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { usePerformanceMonitor } from '../hooks/usePerformanceMonitor';
import { useStarsEnabled } from '../hooks/useStarsEnabled';
import { COSMIC_STAGES } from './space-journey/config';
import { getActiveStages } from './space-journey/transitions';
import { isBelowPerformanceThreshold } from './space-journey/quality';
import { SpaceJourneyFallback } from './SpaceJourneyFallback';

interface SpaceJourneyCanvasProps {
  enabled?: boolean;
}

export function SpaceJourneyCanvas({ enabled }: SpaceJourneyCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const lastTimestampRef = useRef<number>(0);

  const starsEnabled = useStarsEnabled();
  const scrollProgress = useScrollProgress();
  const performanceMetrics = usePerformanceMonitor();

  // Check for prefers-reduced-motion
  const prefersReducedMotion = useRef(
    typeof window !== 'undefined' 
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
      : false
  );

  // Check if device is below performance threshold
  const belowThreshold = isBelowPerformanceThreshold();

  // Determine if animation should be active
  const isEnabled = enabled !== undefined ? enabled : starsEnabled;
  const shouldAnimate = isEnabled && !prefersReducedMotion.current && performanceMetrics.shouldRender && !belowThreshold;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !shouldAnimate) return;

    const ctx = canvas.getContext('2d', {
      alpha: true,
      desynchronized: true, // Better performance
    });

    if (!ctx) {
      console.error('Failed to get canvas context');
      return;
    }

    // Set up canvas size with DPI handling
    const setupCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      
      ctx.scale(dpr, dpr);
    };

    setupCanvas();

    // Handle window resize
    const handleResize = () => {
      setupCanvas();
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Main animation loop
    const animate = (timestamp: number) => {
      if (!canvas || !ctx) return;

      // Calculate delta time
      const deltaTime = timestamp - lastTimestampRef.current;
      lastTimestampRef.current = timestamp;

      // Get canvas dimensions (accounting for DPI)
      const dpr = window.devicePixelRatio || 1;
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Get active stages based on scroll progress
      const activeStages = getActiveStages(scrollProgress.progress, COSMIC_STAGES);

      // Render each active stage with calculated opacity
      activeStages.forEach(({ stage, opacity, localProgress }) => {
        ctx.save();
        ctx.globalAlpha = opacity;
        
        // Call the stage's renderer function
        stage.renderer({
          ctx,
          width,
          height,
          progress: localProgress,
          quality: performanceMetrics.quality,
          time: timestamp,
        });
        
        ctx.restore();
      });

      // Continue animation loop
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Start animation loop
    animationFrameRef.current = requestAnimationFrame(animate);

    // Cleanup function
    return () => {
      // Cancel animation frame
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      // Remove event listeners
      window.removeEventListener('resize', handleResize);

      // Clear canvas
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };
  }, [shouldAnimate, scrollProgress.progress, performanceMetrics.quality]);

  // Show static fallback for very low-end devices
  if (isEnabled && !prefersReducedMotion.current && belowThreshold) {
    return <SpaceJourneyFallback />;
  }

  // Don't render if animation is disabled
  if (!shouldAnimate) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 2 }}
      aria-hidden="true"
      role="presentation"
    />
  );
}
