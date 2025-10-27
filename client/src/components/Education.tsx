import { Card } from '@/components/ui/card';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { Education as EducationType } from '@shared/schema';

interface EducationProps {
  education: EducationType[];
}

export function Education({ education }: EducationProps) {
  return (
    <section id="education" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-foreground" data-testid="text-education-heading">
          Education
        </h2>

        <div className="space-y-8 relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

          {education.map((edu, index) => (
            <div key={edu.id} className="relative">
              <div className="hidden md:block absolute left-8 top-8 w-3 h-3 bg-primary rounded-full -translate-x-[5px] ring-4 ring-background" />
              
              <Card 
                className="md:ml-24 p-8 hover-elevate transition-all duration-300"
                data-testid={`card-education-${index}`}
              >
                <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2" data-testid={`text-education-degree-${index}`}>
                      {edu.degree}
                    </h3>
                    <div className="flex items-center gap-2 text-base font-medium text-foreground/90 mb-2">
                      <GraduationCap className="w-5 h-5 text-muted-foreground" />
                      <span data-testid={`text-education-institution-${index}`}>{edu.institution}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted px-4 py-2 rounded-md">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium" data-testid={`text-education-period-${index}`}>{edu.period}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-base text-muted-foreground mb-3">
                  <MapPin className="w-4 h-4" />
                  <span data-testid={`text-education-location-${index}`}>{edu.location}</span>
                </div>

                {edu.details && (
                  <p className="text-sm text-muted-foreground mt-4 italic" data-testid={`text-education-details-${index}`}>
                    {edu.details}
                  </p>
                )}
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
