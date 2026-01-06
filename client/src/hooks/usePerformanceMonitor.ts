import { useState, useEffect, useRef, useCallback } from 'react';
import { detectDeviceCapability, isBelowPerformanceThreshold } from '../components/space-journey/quality';

export type QualityLevel = 'high' | 'medium' | 'low';

export interface PerformanceMetrics {
  fps: number;
  quality: QualityLevel;
  shouldRender: boolean;
}

const FPS_SAMPLE_SIZE = 60;
const FPS_THRESHOLD_LOW = 24;
const FPS_THRESHOLD_MEDIUM = 30;
const FPS_THRESHOLD_HIGH = 45;
const QUALITY_ADJUSTMENT_DELAY = 2000; // 2 seconds for downgrade
const QUALITY_UPGRADE_DELAY = 5000; // 5 seconds for upgrade

export function usePerformanceMonitor(): PerformanceMetrics {
  // Detect initial quality based on device capability
  const initialQuality = detectDeviceCapability();
  const belowThreshold = isBelowPerformanceThreshold();
  
  const [quality, setQuality] = useState<QualityLevel>(initialQuality);
  const [fps, setFps] = useState(60);
  const [shouldRender, setShouldRender] = useState(!belowThreshold);

  const frameTimesRef = useRef<number[]>([]);
  const lastFrameTimeRef = useRef<number>(performance.now());
  const lowFpsStartTimeRef = useRef<number | null>(null);
  const highFpsStartTimeRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number>();

  const calculateFps = useCallback(() => {
    const now = performance.now();
    const delta = now - lastFrameTimeRef.current;
    lastFrameTimeRef.current = now;

    // Calculate FPS from delta time
    const currentFps = delta > 0 ? 1000 / delta : 60;

    // Track last 60 frames
    frameTimesRef.current.push(currentFps);
    if (frameTimesRef.current.length > FPS_SAMPLE_SIZE) {
      frameTimesRef.current.shift();
    }

    // Calculate average FPS
    const avgFps = frameTimesRef.current.reduce((sum, fps) => sum + fps, 0) / frameTimesRef.current.length;
    setFps(Math.round(avgFps));

    return avgFps;
  }, []);

  const adjustQuality = useCallback((avgFps: number) => {
    const now = performance.now();

    // Check for quality downgrade
    if (avgFps < FPS_THRESHOLD_LOW) {
      if (lowFpsStartTimeRef.current === null) {
        lowFpsStartTimeRef.current = now;
      } else if (now - lowFpsStartTimeRef.current >= QUALITY_ADJUSTMENT_DELAY) {
        // Downgrade quality
        setQuality(prev => {
          if (prev === 'high') return 'medium';
          if (prev === 'medium') return 'low';
          return prev;
        });
        lowFpsStartTimeRef.current = null;
        highFpsStartTimeRef.current = null;
      }
    } else {
      lowFpsStartTimeRef.current = null;
    }

    // Check for quality upgrade
    if (avgFps > FPS_THRESHOLD_HIGH) {
      if (highFpsStartTimeRef.current === null) {
        highFpsStartTimeRef.current = now;
      } else if (now - highFpsStartTimeRef.current >= QUALITY_UPGRADE_DELAY) {
        // Upgrade quality
        setQuality(prev => {
          if (prev === 'low') return 'medium';
          if (prev === 'medium') return 'high';
          return prev;
        });
        highFpsStartTimeRef.current = null;
        lowFpsStartTimeRef.current = null;
      }
    } else {
      highFpsStartTimeRef.current = null;
    }
  }, []);

  useEffect(() => {
    const monitorPerformance = () => {
      const avgFps = calculateFps();
      adjustQuality(avgFps);

      // Determine if we should render based on quality and FPS
      const minFps = quality === 'high' ? FPS_THRESHOLD_MEDIUM : FPS_THRESHOLD_LOW;
      setShouldRender(avgFps >= minFps - 5); // 5fps buffer

      animationFrameRef.current = requestAnimationFrame(monitorPerformance);
    };

    // Start monitoring
    animationFrameRef.current = requestAnimationFrame(monitorPerformance);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [calculateFps, adjustQuality, quality]);

  return {
    fps,
    quality,
    shouldRender,
  };
}
