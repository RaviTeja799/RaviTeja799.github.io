import { Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export function StarsToggle() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [starsEnabled, setStarsEnabled] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('stars-enabled');
      return saved !== null ? saved === 'true' : true;
    }
    return true;
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('stars-enabled', String(starsEnabled));
      window.dispatchEvent(new CustomEvent('stars-toggle', { detail: starsEnabled }));
    }
  }, [starsEnabled, mounted]);

  if (!mounted || theme !== 'dark') return null;

  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={() => setStarsEnabled(!starsEnabled)}
      className="min-w-[44px] min-h-[44px] relative"
      aria-label="Toggle stars background"
      title={starsEnabled ? 'Disable stars' : 'Enable stars'}
    >
      <Sparkles className={`w-5 h-5 transition-all duration-300 ${starsEnabled ? 'text-blue-400' : 'text-muted-foreground'}`} />
    </Button>
  );
}
