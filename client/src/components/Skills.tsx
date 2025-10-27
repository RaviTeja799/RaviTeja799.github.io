import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skill } from '@shared/schema';
import { Code, Brain, Wrench, Cloud } from 'lucide-react';

interface SkillsProps {
  skills: Skill[];
  coursework: string[];
}

const categoryIcons: Record<string, React.ReactNode> = {
  'Programming Languages': <Code className="w-5 h-5" />,
  'Machine Learning': <Brain className="w-5 h-5" />,
  'Technologies / Frameworks': <Wrench className="w-5 h-5" />,
  'Cloud Platforms': <Cloud className="w-5 h-5" />,
};

export function Skills({ skills, coursework }: SkillsProps) {
  return (
    <section id="skills" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-foreground" data-testid="text-skills-heading">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate transition-all duration-300 transform hover:-translate-y-1"
              data-testid={`card-skill-${index}`}
            >
              <div className="flex items-center gap-3 mb-4 text-muted-foreground">
                {categoryIcons[skill.category] || <Code className="w-5 h-5" />}
                <h3 className="text-xs uppercase tracking-wider font-medium">
                  {skill.category}
                </h3>
              </div>
              
              <div className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <p key={itemIndex} className="text-base text-foreground" data-testid={`text-skill-item-${index}-${itemIndex}`}>
                    {item}
                  </p>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-foreground">Coursework</h3>
          <div className="flex flex-wrap gap-3">
            {coursework.map((course, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-sm px-4 py-2 font-medium"
                data-testid={`badge-course-${index}`}
              >
                {course}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
