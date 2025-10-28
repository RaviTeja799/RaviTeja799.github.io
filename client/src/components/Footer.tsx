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
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover-elevate active-elevate-2 transition-all duration-300 px-2 py-1 rounded-md min-h-[44px]"
                data-testid="link-footer-email"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>Email</span>
              </a>
              <a
                href={`https://${contact.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover-elevate active-elevate-2 transition-all duration-300 px-2 py-1 rounded-md min-h-[44px]"
                data-testid="link-footer-linkedin"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 flex-shrink-0" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`https://${contact.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover-elevate active-elevate-2 transition-all duration-300 px-2 py-1 rounded-md min-h-[44px]"
                data-testid="link-footer-github"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 flex-shrink-0" />
                <span>GitHub</span>
              </a>
              <a
                href={`https://${contact.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover-elevate active-elevate-2 transition-all duration-300 px-2 py-1 rounded-md min-h-[44px]"
                data-testid="link-footer-twitter"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span>Twitter</span>
              </a>
              <a
                href={`https://${contact.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover-elevate active-elevate-2 transition-all duration-300 px-2 py-1 rounded-md min-h-[44px]"
                data-testid="link-footer-instagram"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Instagram</span>
              </a>
              <a
                href={`https://${contact.medium}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover-elevate active-elevate-2 transition-all duration-300 px-2 py-1 rounded-md min-h-[44px]"
                data-testid="link-footer-medium"
                aria-label="Medium"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
                <span>Medium</span>
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
