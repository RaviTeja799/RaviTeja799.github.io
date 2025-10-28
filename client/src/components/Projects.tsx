import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Project } from '@shared/schema';
import { ExternalLink } from 'lucide-react';
import { useLocation } from 'wouter';
import { useStarsEnabled } from '@/hooks/useStarsEnabled';

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  const starsEnabled = useStarsEnabled();
  const [, setLocation] = useLocation();

  const handleProjectClick = (projectId: string) => {
    setLocation(`/projects/${projectId}`);
  };

  return (
    <section id="projects" className={`py-16 sm:py-20 md:py-24 lg:py-32 ${!starsEnabled ? 'bg-muted/30' : ''}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-12 sm:mb-16 text-foreground" data-testid="text-projects-heading">
          Key Projects
        </h2>

        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 sm:gap-8 items-center cursor-pointer group`}
              onClick={() => handleProjectClick(project.id)}
              data-testid={`project-${index}`}
            >
              <div className="flex-1 w-full">
                <Card className="aspect-video bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center overflow-hidden hover-elevate transition-all duration-300 group-hover:shadow-lg group-hover:scale-[1.02]">
                  <div className="text-center p-6 sm:p-8">
                    <ExternalLink className="w-10 h-10 sm:w-12 sm:h-12 text-muted-foreground mx-auto mb-3 sm:mb-4 group-hover:text-foreground transition-colors" />
                    <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider group-hover:text-foreground transition-colors">
                      {project.subtitle}
                    </p>
                  </div>
                </Card>
              </div>

              <div className="flex-1 w-full space-y-4 sm:space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors" data-testid={`text-project-title-${index}`}>
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider" data-testid={`text-project-subtitle-${index}`}>
                    {project.subtitle}
                  </p>
                </div>

                <ul className="space-y-2 sm:space-y-3">
                  {project.description.map((desc, i) => (
                    <li key={i} className="text-sm sm:text-base leading-relaxed text-foreground flex gap-2 sm:gap-3" data-testid={`text-project-description-${index}-${i}`}>
                      <span className="text-muted-foreground mt-1 sm:mt-1.5 flex-shrink-0">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2 sm:mb-3">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 font-medium"
                        data-testid={`badge-tech-${project.id}-${i}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
