import { Card } from '@/components/ui/card';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { ContactInfo } from '@shared/schema';

interface AboutProps {
  about: string;
  contact: ContactInfo;
}

export function About({ about, contact }: AboutProps) {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-12 sm:mb-16 text-foreground" data-testid="text-about-heading">
          About
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          <div>
            <p className="text-base sm:text-lg leading-relaxed text-foreground" data-testid="text-about-description">
              {about}
            </p>
            
            <div className="mt-6 sm:mt-8 space-y-4">
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
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
            
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
                href={`tel:${contact.phone}`}
                className="flex items-center gap-3 sm:gap-4 text-sm sm:text-base text-foreground hover-elevate active-elevate-2 p-3 sm:p-4 rounded-md transition-all duration-300 min-h-[44px]"
                data-testid="link-contact-phone"
              >
                <Phone className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Phone</p>
                  <p className="font-medium">{contact.phone}</p>
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
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
