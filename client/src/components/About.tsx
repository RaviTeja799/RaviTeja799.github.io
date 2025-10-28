import { Card } from '@/components/ui/card';
import { Mail, Linkedin, Github } from 'lucide-react';
import { ContactInfo } from '@shared/schema';
import { useStarsEnabled } from '@/hooks/useStarsEnabled';

interface AboutProps {
  about: string;
  contact: ContactInfo;
}

export function About({ about, contact }: AboutProps) {
  const starsEnabled = useStarsEnabled();
  
  return (
    <section id="about" className={`py-16 sm:py-20 md:py-24 lg:py-32 ${!starsEnabled ? 'bg-background' : ''}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-12 sm:mb-16 text-foreground" data-testid="text-about-heading">
          About
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          <div>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-foreground" data-testid="text-about-description">
              {about}
            </p>
            
            <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
              <div className="p-4 sm:p-6 bg-card rounded-md border border-card-border">
                <p className="text-xs sm:text-sm uppercase tracking-wider font-medium text-muted-foreground mb-2">
                  Currently
                </p>
                <p className="text-sm sm:text-base font-semibold text-foreground mb-1">
                  Google Student Ambassador (2025-2026)
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Gayatri Vidya Parishad College of Engineering (Autonomous)
                </p>
              </div>
              
              <div className="p-4 sm:p-6 bg-card rounded-md border border-card-border">
                <p className="text-sm sm:text-base font-semibold text-foreground mb-1">
                  Deputy Head of Projects (2025-26)
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                  Youth for Sustainability Club (YfS)
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Gayatri Vidya Parishad College of Engineering (Autonomous)
                </p>
              </div>
            </div>
          </div>

          <Card className="p-6 sm:p-8 space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-6">Connect With Me</h3>
            
            <div className="space-y-3 sm:space-y-4">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 sm:gap-4 text-sm sm:text-base text-foreground hover-elevate active-elevate-2 p-3 sm:p-4 rounded-md transition-all duration-300 min-h-[44px]"
                data-testid="link-contact-email"
              >
                <Mail className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Email</p>
                  <p className="font-medium break-words">{contact.email}</p>
                </div>
              </a>

              <a
                href={`https://${contact.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 sm:gap-4 text-sm sm:text-base text-foreground hover-elevate active-elevate-2 p-3 sm:p-4 rounded-md transition-all duration-300 min-h-[44px]"
                data-testid="link-contact-linkedin"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">LinkedIn</p>
                  <p className="font-medium break-words">{contact.linkedin}</p>
                </div>
              </a>

              <a
                href={`https://${contact.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 sm:gap-4 text-sm sm:text-base text-foreground hover-elevate active-elevate-2 p-3 sm:p-4 rounded-md transition-all duration-300 min-h-[44px]"
                data-testid="link-contact-github"
              >
                <Github className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">GitHub</p>
                  <p className="font-medium break-words">{contact.github}</p>
                </div>
              </a>

              <a
                href={`https://${contact.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 sm:gap-4 text-sm sm:text-base text-foreground hover-elevate active-elevate-2 p-3 sm:p-4 rounded-md transition-all duration-300 min-h-[44px]"
                data-testid="link-contact-twitter"
              >
                <svg className="w-5 h-5 text-muted-foreground flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Twitter/X</p>
                  <p className="font-medium break-words">{contact.twitter}</p>
                </div>
              </a>

              <a
                href={`https://${contact.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 sm:gap-4 text-sm sm:text-base text-foreground hover-elevate active-elevate-2 p-3 sm:p-4 rounded-md transition-all duration-300 min-h-[44px]"
                data-testid="link-contact-instagram"
              >
                <svg className="w-5 h-5 text-muted-foreground flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Instagram</p>
                  <p className="font-medium break-words">{contact.instagram}</p>
                </div>
              </a>

              <a
                href={`https://${contact.medium}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 sm:gap-4 text-sm sm:text-base text-foreground hover-elevate active-elevate-2 p-3 sm:p-4 rounded-md transition-all duration-300 min-h-[44px]"
                data-testid="link-contact-medium"
              >
                <svg className="w-5 h-5 text-muted-foreground flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Medium</p>
                  <p className="font-medium break-words">{contact.medium}</p>
                </div>
              </a>

              <a
                href={`https://${contact.discord}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 sm:gap-4 text-sm sm:text-base text-foreground hover-elevate active-elevate-2 p-3 sm:p-4 rounded-md transition-all duration-300 min-h-[44px]"
                data-testid="link-contact-discord"
              >
                <svg className="w-5 h-5 text-muted-foreground flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0 a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Discord</p>
                  <p className="font-medium break-words">raviteja1108_45378</p>
                </div>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
