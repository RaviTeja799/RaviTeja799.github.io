import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Project } from '@shared/schema';
import { ExternalLink } from 'lucide-react';

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-foreground" data-testid="text-projects-heading">
          Key Projects
        </h2>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              data-testid={`project-${index}`}
            >
              <div className="flex-1 w-full">
                <Card className="aspect-video bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center overflow-hidden hover-elevate transition-all duration-300">
                  <div className="text-center p-8">
                    <ExternalLink className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground uppercase tracking-wider">
                      {project.subtitle}
                    </p>
                  </div>
                </Card>
              </div>

              <div className="flex-1 w-full space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2" data-testid={`text-project-title-${index}`}>
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider" data-testid={`text-project-subtitle-${index}`}>
                    {project.subtitle}
                  </p>
                </div>

                <ul className="space-y-3">
                  {project.description.map((desc, i) => (
                    <li key={i} className="text-base leading-relaxed text-foreground flex gap-3" data-testid={`text-project-description-${index}-${i}`}>
                      <span className="text-muted-foreground mt-1.5">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="text-sm px-3 py-1.5 font-medium"
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
