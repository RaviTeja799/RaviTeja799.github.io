import { useParams, useLocation } from 'wouter';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { projectDetails } from '@/data/portfolio-data';
import { ImageGallery } from '@/components/ImageGallery';

export default function ProjectDetail() {
  const { projectId } = useParams();
  const [, setLocation] = useLocation();

  const project = projectDetails.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Project Not Found</h1>
          <p className="text-muted-foreground">The project you're looking for doesn't exist.</p>
          <Button onClick={() => setLocation('/')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-muted/30 border-b">
        <div className="max-w-6xl mx-auto px-6">
          <Button
            variant="ghost"
            onClick={() => setLocation('/')}
            className="mb-8 hover:bg-muted"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>

          <div className="space-y-4">
            <p className="text-sm text-muted-foreground uppercase tracking-wider">
              {project.subtitle}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              {project.title}
            </h1>
            
            {/* Links */}
            <div className="flex flex-wrap gap-4 pt-4">
              {project.demoUrl && (
                <Button asChild variant="default">
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Demo
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button asChild variant="outline">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Image Gallery Sidebar */}
            <div className="lg:col-span-1 order-1 lg:order-2">
              <div className="sticky top-8">
                <ImageGallery images={project.images} projectTitle={project.title} />
                
                {/* Tech Stack */}
                <Card className="p-6 mt-8">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="text-sm px-3 py-1.5 font-medium"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </div>
            </div>

            {/* Content Sections */}
            <div className="lg:col-span-2 order-2 lg:order-1 space-y-12">
              {/* Problem Statement */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Problem Statement
                </h2>
                <p className="text-base leading-relaxed text-foreground">
                  {project.problemStatement}
                </p>
              </div>

              {/* Solution Approach */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Solution Approach
                </h2>
                <p className="text-base leading-relaxed text-foreground">
                  {project.solutionApproach}
                </p>
              </div>

              {/* Outcomes */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Key Outcomes
                </h2>
                <ul className="space-y-3">
                  {project.outcomes.map((outcome, i) => (
                    <li key={i} className="text-base leading-relaxed text-foreground flex gap-3">
                      <span className="text-muted-foreground mt-1.5">•</span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Overview */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Project Overview
                </h2>
                <ul className="space-y-3">
                  {project.description.map((desc, i) => (
                    <li key={i} className="text-base leading-relaxed text-foreground flex gap-3">
                      <span className="text-muted-foreground mt-1.5">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
