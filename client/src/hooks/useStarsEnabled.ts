import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export function useStarsEnabled() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [starsEnabled, setStarsEnabled] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Get initial state
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('stars-enabled');
      const enabled = saved !== null ? saved === 'true' : true;
      setStarsEnabled(enabled && theme === 'dark');
    }
  }, [theme]);

  useEffect(() => {
    if (!mounted) return;

    const handleStarsToggle = (e: CustomEvent) => {
      setStarsEnabled(e.detail && theme === 'dark');
    };

    window.addEventListener('stars-toggle', handleStarsToggle as EventListener);
    
    return () => {
      window.removeEventListener('stars-toggle', handleStarsToggle as EventListener);
    };
  }, [mounted, theme]);

  // Update when theme changes
  useEffect(() => {
    if (mounted && theme !== 'dark') {
      setStarsEnabled(false);
    } else if (mounted && theme === 'dark') {
      const saved = localStorage.getItem('stars-enabled');
      const enabled = saved !== null ? saved === 'true' : true;
      setStarsEnabled(enabled);
    }
  }, [theme, mounted]);

  return starsEnabled;
}
