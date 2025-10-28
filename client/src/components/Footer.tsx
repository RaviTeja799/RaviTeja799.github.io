import { Mail, Linkedin, Github } from 'lucide-react';
import { ContactInfo } from '@shared/schema';

interface FooterProps {
  name: string;
  title: string;
  contact: ContactInfo;
}

export function Footer({ name, title, contact }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">{name}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">{title}</p>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm uppercase tracking-wider font-medium text-foreground mb-3 sm:mb-4">
              Quick Links
            </h4>
            <div className="space-y-1.5 sm:space-y-2">
              <button
                onClick={() => scrollToSection('about')}
                className="block text-xs sm:text-sm text-muted-foreground hover-elevate active-elevate-2 transition-all duration-300 px-2 py-1 rounded-md text-left min-h-[44px] flex items-center"
                data-testid="link-footer-about"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('education')}
                className="block text-xs sm:text-sm text-muted-foreground hover-elevate active-elevate-2 transition-all duration-300 px-2 py-1 rounded-md text-left min-h-[44px] flex items-center"
                data-testid="link-footer-education"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="block text-xs sm:text-sm text-muted-foreground hover-elevate active-elevate-2 transition-all duration-300 px-2 py-1 rounded-md text-left min-h-[44px] flex items-center"
                data-testid="link-footer-skills"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="block text-xs sm:text-sm text-muted-foreground hover-elevate active-elevate-2 transition-all duration-300 px-2 py-1 rounded-md text-left min-h-[44px] flex items-center"
                data-testid="link-footer-projects"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('achievements')}
                className="block text-xs sm:text-sm text-muted-foreground hover-elevate active-elevate-2 transition-all duration-300 px-2 py-1 rounded-md text-left min-h-[44px] flex items-center"
                data-testid="link-footer-achievements"
              >
                Achievements
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm uppercase tracking-wider font-medium text-foreground mb-3 sm:mb-4">
              Connect
            </h4>
            <div className="space-y-2 sm:space-y-3">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground hover-elevate active-elevate-2 transition-all duration-300 px-2 py-1 rounded-md min-h-[44px]"
                data-testid="link-footer-email"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>Email</span>
              </a>
              <a
                href={`https://${contact.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground hover-elevate active-elevate-2 transition-all duration-300 px-2 py-1 rounded-md min-h-[44px]"
                data-testid="link-footer-linkedin"
              >
                <Linkedin className="w-4 h-4 flex-shrink-0" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`https://${contact.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground hover-elevate active-elevate-2 transition-all duration-300 px-2 py-1 rounded-md min-h-[44px]"
                data-testid="link-footer-github"
              >
                <Github className="w-4 h-4 flex-shrink-0" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {currentYear} {name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
