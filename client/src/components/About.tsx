import { Card } from '@/components/ui/card';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { ContactInfo } from '@shared/schema';

interface AboutProps {
  about: string;
  contact: ContactInfo;
}

export function About({ about, contact }: AboutProps) {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-foreground" data-testid="text-about-heading">
          About
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-base md:text-lg leading-relaxed text-foreground" data-testid="text-about-description">
              {about}
            </p>
            
            <div className="mt-8 p-6 bg-card rounded-md border border-card-border">
              <p className="text-sm uppercase tracking-wider font-medium text-muted-foreground mb-2">
                Currently
              </p>
              <p className="text-base font-semibold text-foreground">
                Google Student Ambassador 2025-2026
              </p>
            </div>
          </div>

          <Card className="p-8 space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-4 text-base text-foreground hover-elevate active-elevate-2 p-4 rounded-md transition-all duration-300"
                data-testid="link-contact-email"
              >
                <Mail className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Email</p>
                  <p className="font-medium">{contact.email}</p>
                </div>
              </a>

              <a
                href={`tel:${contact.phone}`}
                className="flex items-center gap-4 text-base text-foreground hover-elevate active-elevate-2 p-4 rounded-md transition-all duration-300"
                data-testid="link-contact-phone"
              >
                <Phone className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Phone</p>
                  <p className="font-medium">{contact.phone}</p>
                </div>
              </a>

              <a
                href={`https://${contact.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-base text-foreground hover-elevate active-elevate-2 p-4 rounded-md transition-all duration-300"
                data-testid="link-contact-linkedin"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">LinkedIn</p>
                  <p className="font-medium break-all">{contact.linkedin}</p>
                </div>
              </a>

              <a
                href={`https://${contact.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-base text-foreground hover-elevate active-elevate-2 p-4 rounded-md transition-all duration-300"
                data-testid="link-contact-github"
              >
                <Github className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">GitHub</p>
                  <p className="font-medium break-all">{contact.github}</p>
                </div>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
