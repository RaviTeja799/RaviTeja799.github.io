import { ChevronDown, Mail, Github, Linkedin } from 'lucide-react';
import { ContactInfo } from '@shared/schema';
import { DownloadResumeButton } from '@/components/DownloadResumeButton';
import { useStarsEnabled } from '@/hooks/useStarsEnabled';

interface HeroProps {
  name: string;
  title: string;
  contact: ContactInfo;
}

export function Hero({ name, title, contact }: HeroProps) {
  const starsEnabled = useStarsEnabled();
  
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={`relative min-h-screen flex items-center justify-center px-4 sm:px-6 ${!starsEnabled ? 'bg-background' : ''}`}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-muted/5 to-transparent" />
        <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto py-20 sm:py-24 text-center w-full">
        <div className="space-y-6 sm:space-y-8">
          <div className="space-y-3 sm:space-y-4">
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-foreground px-4"
              data-testid="text-hero-name"
            >
              {name}
            </h1>
            
            <div className="flex items-center justify-center gap-3 sm:gap-4 text-muted-foreground px-4">
              <div className="h-px w-8 sm:w-12 bg-border" />
              <p 
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium tracking-wide uppercase text-foreground/80"
                data-testid="text-hero-title"
              >
                {title}
              </p>
              <div className="h-px w-8 sm:w-12 bg-border" />
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 pt-6 sm:pt-8 flex-wrap px-4">
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground hover-elevate active-elevate-2 transition-all duration-300 px-3 sm:px-4 py-2 rounded-md min-h-[44px]"
              data-testid="link-email"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">{contact.email}</span>
              <span className="sm:hidden">Email</span>
            </a>
            
            <a
              href={`https://${contact.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground hover-elevate active-elevate-2 transition-all duration-300 px-3 sm:px-4 py-2 rounded-md min-h-[44px]"
              data-testid="link-linkedin"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            
            <a
              href={`https://${contact.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground hover-elevate active-elevate-2 transition-all duration-300 px-3 sm:px-4 py-2 rounded-md min-h-[44px]"
              data-testid="link-github"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            
            <a
              href={`https://${contact.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground hover-elevate active-elevate-2 transition-all duration-300 px-3 sm:px-4 py-2 rounded-md min-h-[44px]"
              data-testid="link-twitter"
              aria-label="Twitter/X"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span>Twitter</span>
            </a>
            
            <a
              href={`https://${contact.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground hover-elevate active-elevate-2 transition-all duration-300 px-3 sm:px-4 py-2 rounded-md min-h-[44px]"
              data-testid="link-instagram"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Instagram</span>
            </a>
            
            <a
              href={`https://${contact.medium}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground hover-elevate active-elevate-2 transition-all duration-300 px-3 sm:px-4 py-2 rounded-md min-h-[44px]"
              data-testid="link-medium"
              aria-label="Medium"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
              </svg>
              <span>Medium</span>
            </a>
          </div>

          <div className="flex items-center justify-center pt-4 sm:pt-6 px-4">
            <DownloadResumeButton 
              variant="outline" 
              size="lg"
              className="text-sm sm:text-base min-h-[44px]"
            />
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 text-muted-foreground hover-elevate active-elevate-2 p-3 sm:p-4 rounded-full transition-all duration-300 animate-bounce min-w-[44px] min-h-[44px]"
          aria-label="Scroll to about section"
          data-testid="button-scroll-down"
        >
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>
    </section>
  );
}
