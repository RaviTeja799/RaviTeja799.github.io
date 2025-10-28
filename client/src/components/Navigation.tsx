import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { StarsToggle } from '@/components/StarsToggle';
import { DownloadResumeButton } from '@/components/DownloadResumeButton';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigation = (path: string, sectionId?: string) => {
    setIsMobileMenuOpen(false);
    if (path !== location) {
      setLocation(path);
      // If there's a section ID, scroll to it after navigation
      if (sectionId) {
        setTimeout(() => {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else if (sectionId) {
      scrollToSection(sectionId);
    }
  };

  const navItems = [
    { id: 'about', label: 'About', path: '/', section: 'about' },
    { id: 'education', label: 'Education', path: '/', section: 'education' },
    { id: 'skills', label: 'Skills', path: '/', section: 'skills' },
    { id: 'projects', label: 'Projects', path: '/', section: 'projects' },
    { id: 'achievements', label: 'Achievements', path: '/', section: 'achievements' },
    { id: 'contact', label: 'Contact', path: '/', section: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => handleNavigation('/')}
          className="text-base font-semibold text-foreground hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-all duration-300"
          data-testid="link-nav-home"
        >
          RT
        </button>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.path, item.section)}
              className="text-sm text-muted-foreground hover-elevate active-elevate-2 px-4 py-2 rounded-md transition-all duration-300"
              data-testid={`link-nav-${item.id}`}
            >
              {item.label}
            </button>
          ))}
          <DownloadResumeButton />
          <StarsToggle />
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-2">
          <StarsToggle />
          <ThemeToggle />
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
            className="min-w-[44px] min-h-[44px]"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[73px] bg-background/95 backdrop-blur-md z-40 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-6 py-8 space-y-2 h-full overflow-y-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.path, item.section)}
                className="block w-full text-left text-lg text-foreground hover-elevate active-elevate-2 px-6 py-4 rounded-md transition-all duration-300 min-h-[44px]"
                data-testid={`link-mobile-${item.id}`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-border mt-4">
              <DownloadResumeButton className="w-full min-h-[44px]" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
