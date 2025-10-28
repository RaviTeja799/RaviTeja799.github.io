import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skill } from '@shared/schema';
import { Code, Brain, Wrench, Cloud } from 'lucide-react';
import { useStarsEnabled } from '@/hooks/useStarsEnabled';

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
  const starsEnabled = useStarsEnabled();
  
  return (
    <section id="skills" className={`py-16 sm:py-20 md:py-24 lg:py-32 ${!starsEnabled ? 'bg-background' : ''}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-12 sm:mb-16 text-foreground" data-testid="text-skills-heading">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="p-4 sm:p-6 hover-elevate transition-all duration-300 transform hover:-translate-y-1"
              data-testid={`card-skill-${index}`}
            >
              <div className="flex items-center gap-3 mb-3 sm:mb-4 text-muted-foreground">
                {categoryIcons[skill.category] || <Code className="w-5 h-5" />}
                <h3 className="text-xs uppercase tracking-wider font-medium">
                  {skill.category}
                </h3>
              </div>
              
              <div className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <p key={itemIndex} className="text-sm sm:text-base text-foreground" data-testid={`text-skill-item-${index}-${itemIndex}`}>
                    {item}
                  </p>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8 text-foreground">Coursework</h3>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {coursework.map((course, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 font-medium"
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
