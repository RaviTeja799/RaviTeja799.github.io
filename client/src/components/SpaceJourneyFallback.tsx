/**
 * Static fallback background for devices below performance threshold
 * Shows a simple starfield without animation
 */

export function SpaceJourneyFallback() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none"
      style={{ 
        zIndex: 2,
        background: 'radial-gradient(ellipse at center, rgba(20, 20, 40, 0.3) 0%, transparent 70%)',
      }}
      aria-hidden="true"
      role="presentation"
    >
      {/* Static star dots */}
      <svg 
        className="w-full h-full" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.6 }}
      >
        {/* Generate static stars */}
        {Array.from({ length: 50 }).map((_, i) => {
          // Pseudo-random but consistent positioning
          const seed = i * 47.3;
          const x = ((seed * 7.1) % 100);
          const y = ((seed * 13.7) % 100);
          const size = 1 + (i % 3) * 0.5;
          const opacity = 0.3 + (i % 5) * 0.15;
          
          return (
            <circle
              key={i}
              cx={`${x}%`}
              cy={`${y}%`}
              r={size}
              fill="white"
              opacity={opacity}
            />
          );
        })}
      </svg>
    </div>
  );
}
