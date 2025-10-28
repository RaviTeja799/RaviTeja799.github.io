import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

interface Star {
  centerX: number;
  centerY: number;
  orbitRadiusX: number;
  orbitRadiusY: number;
  angle: number;
  angularVelocity: number;
  radius: number;
  opacity: number;
}

interface Comet {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  progress: number;
  onComplete?: () => void; // Callback when comet reaches target
}

function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [enabled, setEnabled] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("stars-enabled");
      return saved !== null ? saved === "true" : true;
    }
    return true;
  });
  const starsRef = useRef<Star[]>([]);
  const cometsRef = useRef<Comet[]>([]);
  const mouseTrailRef = useRef<{ x: number; y: number; opacity: number }[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    setMounted(true);

    const handleStarsToggle = (e: CustomEvent) => {
      setEnabled(e.detail);
    };

    window.addEventListener("stars-toggle", handleStarsToggle as EventListener);
    return () => {
      window.removeEventListener(
        "stars-toggle",
        handleStarsToggle as EventListener
      );
    };
  }, []);

  useEffect(() => {
    if (!mounted || theme !== "dark" || !enabled) return;

    // Intercept link and button clicks
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a, button");

      if (!link) return;

      // Don't intercept if it's the stars toggle button or theme toggle
      if (
        link.closest('[aria-label*="Toggle"]') ||
        link.closest('[aria-label*="toggle"]')
      ) {
        return;
      }

      // Don't intercept navigation buttons (back buttons, internal navigation)
      if (link instanceof HTMLButtonElement) {
        // Only intercept buttons that are links to external resources
        // Skip buttons with onClick handlers for internal navigation
        return;
      }

      // Only intercept external links (target="_blank" or external URLs)
      if (link instanceof HTMLAnchorElement) {
        const isExternal = link.target === "_blank" || 
                          link.href.startsWith("http") && 
                          !link.href.includes(window.location.hostname);
        if (!isExternal) {
          return; // Let internal links work normally
        }
      }

      e.preventDefault();
      e.stopPropagation();

      const rect = link.getBoundingClientRect();
      const targetX = rect.left + rect.width / 2;
      const targetY = rect.top + rect.height / 2;

      const startSide = Math.floor(Math.random() * 4);
      let startX, startY;

      switch (startSide) {
        case 0:
          startX = Math.random() * window.innerWidth;
          startY = -50;
          break;
        case 1:
          startX = window.innerWidth + 50;
          startY = Math.random() * window.innerHeight;
          break;
        case 2:
          startX = Math.random() * window.innerWidth;
          startY = window.innerHeight + 50;
          break;
        default:
          startX = -50;
          startY = Math.random() * window.innerHeight;
      }

      // Create comet with callback to trigger the link/button action
      cometsRef.current.push({
        startX,
        startY,
        endX: targetX,
        endY: targetY,
        progress: 0,
        onComplete: () => {
          if (link instanceof HTMLAnchorElement) {
            // Handle anchor links
            if (link.target === "_blank") {
              window.open(link.href, "_blank", "noopener,noreferrer");
            } else {
              window.location.href = link.href;
            }
          } else if (link instanceof HTMLButtonElement) {
            // Trigger button click
            link.click();
          }
        },
      });
    };

    document.addEventListener("click", handleLinkClick, true);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initStars = () => {
      starsRef.current = [];
      const numStars = 75; // 25 fewer stars (100 - 25)

      for (let i = 0; i < numStars; i++) {
        let centerX, centerY, orbitRadiusX, orbitRadiusY;
        const pathType = Math.random();

        if (pathType < 0.4) {
          // Circular / near-circular
          centerX = Math.random() * canvas.width;
          centerY = Math.random() * canvas.height;
          orbitRadiusX = Math.random() * 150 + 50;
          orbitRadiusY = orbitRadiusX * (Math.random() * 0.2 + 0.9);
        } else if (pathType < 0.8) {
          // Standard Elliptical
          centerX = Math.random() * canvas.width;
          centerY = Math.random() * canvas.height;
          orbitRadiusX = Math.random() * (canvas.width / 4) + 50;
          orbitRadiusY = Math.random() * (canvas.height / 4) + 50;
        } else {
          // "Hyperbolic" sweeps
          centerX =
            canvas.width / 2 + (Math.random() - 0.5) * canvas.width * 1.5;
          centerY =
            canvas.height / 2 + (Math.random() - 0.5) * canvas.height * 1.5;
          orbitRadiusX = Math.random() * canvas.width + canvas.width / 2;
          orbitRadiusY = Math.random() * canvas.height + canvas.height / 2;
        }

        starsRef.current.push({
          centerX,
          centerY,
          orbitRadiusX,
          orbitRadiusY,
          angle: Math.random() * Math.PI * 2,
          angularVelocity: (Math.random() - 0.5) * 0.01, // Slower movement
          radius: Math.max(0.72, Math.random() * 1.08 + 0.72), // 10% smaller (0.72-1.8px)
          opacity: Math.random() * 0.3 + 0.875, // 25% brighter (0.875-1.0)
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseTrailRef.current.push({
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
      });

      if (mouseTrailRef.current.length > 15) {
        mouseTrailRef.current.shift();
      }
    };

    const handleClick = (e: MouseEvent) => {
      const startSide = Math.floor(Math.random() * 4);
      let startX, startY;

      switch (startSide) {
        case 0:
          startX = Math.random() * canvas.width;
          startY = -50;
          break;
        case 1:
          startX = canvas.width + 50;
          startY = Math.random() * canvas.height;
          break;
        case 2:
          startX = Math.random() * canvas.width;
          startY = canvas.height + 50;
          break;
        default:
          startX = -50;
          startY = Math.random() * canvas.height;
      }

      cometsRef.current.push({
        startX,
        startY,
        endX: e.clientX,
        endY: e.clientY,
        progress: 0,
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      starsRef.current.forEach((star, i) => {
        star.angle += star.angularVelocity;
        const x = star.centerX + star.orbitRadiusX * Math.cos(star.angle);
        const y = star.centerY + star.orbitRadiusY * Math.sin(star.angle);
        const twinkle = Math.sin(star.angle * 5 + i) * 0.15 + 0.85;

        // Stationary stars (low velocity) = low brightness, moving stars = high brightness
        const velocityFactor = Math.abs(star.angularVelocity) * 200; // Scale velocity
        const brightnessFactor = 1.3 + velocityFactor; // Moving stars are brighter
        const opacity = Math.min(
          1,
          star.opacity * twinkle * brightnessFactor * 1.25
        ); // +25% brightness
        const radius = Math.max(0.1, star.radius);

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2, false);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();
      });

      // Draw mouse trail
      mouseTrailRef.current.forEach((point) => {
        point.opacity -= 0.05;
        const size = Math.max(0.1, 3 * point.opacity); // Ensure positive size

        if (size > 0.1) {
          ctx.beginPath();
          ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
          const gradient = ctx.createRadialGradient(
            point.x,
            point.y,
            0,
            point.x,
            point.y,
            size
          );
          gradient.addColorStop(
            0,
            `rgba(147, 197, 253, ${point.opacity * 0.8})`
          );
          gradient.addColorStop(1, `rgba(147, 197, 253, 0)`);
          ctx.fillStyle = gradient;
          ctx.fill();
        }
      });

      mouseTrailRef.current = mouseTrailRef.current.filter(
        (p) => p.opacity > 0
      );

      // Draw comets
      cometsRef.current = cometsRef.current.filter((comet) => {
        comet.progress += 0.024; // Triple speed (0.008 × 3)

        if (comet.progress >= 1) {
          // Execute callback when comet reaches target
          if (comet.onComplete) {
            comet.onComplete();
          }
          return false;
        }

        const currentX =
          comet.startX + (comet.endX - comet.startX) * comet.progress;
        const currentY =
          comet.startY + (comet.endY - comet.startY) * comet.progress;

        // Draw comet tail
        const tailPoints = 10;
        for (let i = 0; i < tailPoints; i++) {
          const t = comet.progress - (i / tailPoints) * 0.1;
          if (t < 0) continue;

          const tailX = comet.startX + (comet.endX - comet.startX) * t;
          const tailY = comet.startY + (comet.endY - comet.startY) * t;
          const opacity = (1 - i / tailPoints) * (1 - comet.progress);
          const size = Math.max(0.1, (tailPoints - i) * 0.5); // Ensure positive size

          if (size > 0.1) {
            ctx.beginPath();
            ctx.arc(tailX, tailY, size, 0, Math.PI * 2);
            const gradient = ctx.createRadialGradient(
              tailX,
              tailY,
              0,
              tailX,
              tailY,
              size * 2
            );
            gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`); // Pure white
            gradient.addColorStop(0.5, `rgba(255, 255, 255, ${opacity * 0.5})`); // Pure white
            gradient.addColorStop(1, `rgba(255, 255, 255, 0)`); // Pure white fade
            ctx.fillStyle = gradient;
            ctx.fill();
          }
        }

        // Draw comet head - pure white
        ctx.beginPath();
        ctx.arc(currentX, currentY, 4, 0, Math.PI * 2);
        const headGradient = ctx.createRadialGradient(
          currentX,
          currentY,
          0,
          currentX,
          currentY,
          8
        );
        headGradient.addColorStop(0, "rgba(255, 255, 255, 1)"); // Pure white
        headGradient.addColorStop(0.3, "rgba(255, 255, 255, 0.8)"); // Pure white
        headGradient.addColorStop(1, "rgba(255, 255, 255, 0)"); // Pure white fade
        ctx.fillStyle = headGradient;
        ctx.fill();

        return true;
      });

      animationFrameRef.current = window.requestAnimationFrame(animate);
    };

    const handleResize = () => {
      setCanvasSize();
      initStars();
    };

    setCanvasSize();
    initStars();
    animate();

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    return () => {
      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      document.removeEventListener("click", handleLinkClick, true);
    };
  }, [mounted, theme, enabled]);

  if (!mounted || theme !== "dark" || !enabled) return null;

  return (
    <>
      {/* Darker background layer for better star contrast */}
      <div
        className="fixed inset-0"
        style={{ zIndex: 0, backgroundColor: "hsl(0, 0%, 4%)" }}
      />

      {/* Stars canvas - on top of dark background */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full"
          aria-hidden="true"
        />
      </div>
    </>
  );
}

export default SpaceBackground;
