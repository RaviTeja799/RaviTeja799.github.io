import { ChevronDown, Mail, Phone, Github, Linkedin } from 'lucide-react';
import { ContactInfo } from '@shared/schema';
import { DownloadResumeButton } from '@/components/DownloadResumeButton';

interface HeroProps {
  name: string;
  title: string;
  contact: ContactInfo;
}

export function Hero({ name, title, contact }: HeroProps) {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background px-4 sm:px-6">
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
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">{contact.email}</span>
              <span className="sm:hidden">Email</span>
            </a>
            
            <a
              href={`tel:${contact.phone}`}
              className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground hover-elevate active-elevate-2 transition-all duration-300 px-3 sm:px-4 py-2 rounded-md min-h-[44px]"
              data-testid="link-phone"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">{contact.phone}</span>
              <span className="sm:hidden">Phone</span>
            </a>
            
            <a
              href={`https://${contact.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground hover-elevate active-elevate-2 transition-all duration-300 px-3 sm:px-4 py-2 rounded-md min-h-[44px]"
              data-testid="link-linkedin"
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
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
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
