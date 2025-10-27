import { ChevronDown, Mail, Phone, Github, Linkedin } from 'lucide-react';
import { ContactInfo } from '@shared/schema';

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
    <section className="relative min-h-screen flex items-center justify-center bg-background">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-muted/5 to-transparent" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 
              className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground"
              data-testid="text-hero-name"
            >
              {name}
            </h1>
            
            <div className="flex items-center justify-center gap-4 text-muted-foreground">
              <div className="h-px w-12 bg-border" />
              <p 
                className="text-2xl md:text-3xl font-medium tracking-wide uppercase text-foreground/80"
                data-testid="text-hero-title"
              >
                {title}
              </p>
              <div className="h-px w-12 bg-border" />
            </div>
          </div>

          <div className="flex items-center justify-center gap-8 pt-8 flex-wrap">
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-2 text-base text-muted-foreground hover-elevate active-elevate-2 transition-all duration-300 px-4 py-2 rounded-md"
              data-testid="link-email"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">{contact.email}</span>
              <span className="sm:hidden">Email</span>
            </a>
            
            <a
              href={`tel:${contact.phone}`}
              className="flex items-center gap-2 text-base text-muted-foreground hover-elevate active-elevate-2 transition-all duration-300 px-4 py-2 rounded-md"
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
              className="flex items-center gap-2 text-base text-muted-foreground hover-elevate active-elevate-2 transition-all duration-300 px-4 py-2 rounded-md"
              data-testid="link-linkedin"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            
            <a
              href={`https://${contact.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-base text-muted-foreground hover-elevate active-elevate-2 transition-all duration-300 px-4 py-2 rounded-md"
              data-testid="link-github"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-muted-foreground hover-elevate active-elevate-2 p-4 rounded-full transition-all duration-300 animate-bounce"
          aria-label="Scroll to about section"
          data-testid="button-scroll-down"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
