import { Card } from '@/components/ui/card';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { Education as EducationType } from '@shared/schema';
import { useStarsEnabled } from '@/hooks/useStarsEnabled';

interface EducationProps {
  education: EducationType[];
}

export function Education({ education }: EducationProps) {
  const starsEnabled = useStarsEnabled();
  
  return (
    <section id="education" className={`py-16 sm:py-20 md:py-24 lg:py-32 ${!starsEnabled ? 'bg-muted/30' : ''}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-12 sm:mb-16 text-foreground" data-testid="text-education-heading">
          Education
        </h2>

        <div className="space-y-6 sm:space-y-8 relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

          {education.map((edu, index) => (
            <div key={edu.id} className="relative">
              <div className="hidden md:block absolute left-8 top-6 sm:top-8 w-3 h-3 bg-primary rounded-full -translate-x-[5px] ring-4 ring-background" />
              
              <Card 
                className="md:ml-24 p-4 sm:p-6 md:p-8 hover-elevate transition-all duration-300"
                data-testid={`card-education-${index}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-2" data-testid={`text-education-degree-${index}`}>
                      {edu.degree}
                    </h3>
                    <div className="flex items-center gap-2 text-sm sm:text-base font-medium text-foreground/90 mb-2">
                      <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground flex-shrink-0" />
                      <span data-testid={`text-education-institution-${index}`}>{edu.institution}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground bg-muted px-3 sm:px-4 py-2 rounded-md self-start">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span className="font-medium whitespace-nowrap" data-testid={`text-education-period-${index}`}>{edu.period}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground mb-3">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span data-testid={`text-education-location-${index}`}>{edu.location}</span>
                </div>

                {edu.details && (
                  <p className="text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4 italic" data-testid={`text-education-details-${index}`}>
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
