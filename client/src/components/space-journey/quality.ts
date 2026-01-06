/**
 * Quality configuration system for mobile optimization
 * Defines quality presets and device capability detection
 */

export interface QualitySettings {
  particleCount: number;
  effectComplexity: 'full' | 'reduced' | 'minimal';
  enableLensing: boolean;
  enableParallax: boolean;
  renderScale: number; // 1.0 = full resolution
}

/**
 * Quality presets for different performance levels
 */
export const QUALITY_PRESETS: Record<'high' | 'medium' | 'low', QualitySettings> = {
  high: {
    particleCount: 1000,
    effectComplexity: 'full',
    enableLensing: true,
    enableParallax: true,
    renderScale: 1.0,
  },
  medium: {
    particleCount: 500,
    effectComplexity: 'reduced',
    enableLensing: true,
    enableParallax: false,
    renderScale: 0.75,
  },
  low: {
    particleCount: 200,
    effectComplexity: 'minimal',
    enableLensing: false,
    enableParallax: false,
    renderScale: 0.5,
  },
};

/**
 * Detect if the current device is mobile
 */
export function isMobileDevice(): boolean {
  // Check user agent for mobile devices
  const mobileRegex = /iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone/i;
  const isMobileUA = mobileRegex.test(navigator.userAgent);
  
  // Check screen width (mobile typically < 768px)
  const isMobileWidth = window.innerWidth < 768;
  
  // Check for touch support
  const hasTouch = ('ontouchstart' in window) || (!!navigator.maxTouchPoints && navigator.maxTouchPoints > 0);
  
  // Device is mobile if it matches UA pattern OR has small screen with touch
  return isMobileUA || (isMobileWidth && hasTouch);
}

/**
 * Detect device capabilities and return recommended initial quality level
 */
export function detectDeviceCapability(): 'high' | 'medium' | 'low' {
  const isMobile = isMobileDevice();
  
  // Mobile devices start at medium quality
  if (isMobile) {
    // Check for very low-end mobile devices
    const isLowEndMobile = window.innerWidth < 375 || 
                           (!!navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2);
    
    return isLowEndMobile ? 'low' : 'medium';
  }
  
  // Desktop devices start at high quality
  // Performance monitor will adjust down if needed
  return 'high';
}

/**
 * Check if device is below performance threshold for animation
 * Returns true if device should show static fallback instead of animation
 */
export function isBelowPerformanceThreshold(): boolean {
  const isMobile = isMobileDevice();
  
  // Very small screens (< 375px) should use static fallback
  if (window.innerWidth < 375) {
    return true;
  }
  
  // Check for very low-end devices
  if (isMobile) {
    // Devices with 2 or fewer CPU cores are likely too slow
    const hasLowCPU = !!navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2;
    
    // Devices with very small screens and low CPU
    const isVeryLowEnd = window.innerWidth < 480 && hasLowCPU;
    
    return isVeryLowEnd;
  }
  
  return false;
}

/**
 * Get quality settings for a specific quality level
 */
export function getQualitySettings(quality: 'high' | 'medium' | 'low'): QualitySettings {
  return QUALITY_PRESETS[quality];
}
