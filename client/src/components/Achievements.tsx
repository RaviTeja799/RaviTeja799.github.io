import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Achievement } from '@shared/schema';
import { Award, Trophy, Crown, Code } from 'lucide-react';

interface AchievementsProps {
  achievements: Achievement[];
}

const typeIcons: Record<Achievement['type'], React.ReactNode> = {
  certification: <Award className="w-5 h-5" />,
  hackathon: <Trophy className="w-5 h-5" />,
  leadership: <Crown className="w-5 h-5" />,
  competitive: <Code className="w-5 h-5" />,
};

export function Achievements({ achievements }: AchievementsProps) {
  const featuredAchievements = achievements.filter(
    a => a.id === 'achievement-1' || a.id === 'achievement-2' || a.id === 'achievement-3'
  );
  
  const certifications = achievements.filter(a => a.type === 'certification' && a.id !== 'achievement-1');
  const others = achievements.filter(
    a => !featuredAchievements.includes(a) && !certifications.includes(a)
  );

  return (
    <section id="achievements" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-foreground" data-testid="text-achievements-heading">
          Achievements & Certifications
        </h2>

        <div className="space-y-12">
          <div className="grid md:grid-cols-3 gap-6">
            {featuredAchievements.map((achievement, index) => (
              <Card
                key={achievement.id}
                className="p-8 hover-elevate transition-all duration-300 transform hover:-translate-y-1"
                data-testid={`card-featured-achievement-${index}`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-md text-primary">
                    {typeIcons[achievement.type]}
                  </div>
                  <Badge variant="secondary" className="text-xs uppercase tracking-wider">
                    {achievement.type}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3" data-testid={`text-achievement-title-${index}`}>
                  {achievement.title}
                </h3>
                
                <p className="text-base leading-relaxed text-muted-foreground" data-testid={`text-achievement-description-${index}`}>
                  {achievement.description}
                </p>
              </Card>
            ))}
          </div>

          {certifications.length > 0 && (
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-foreground">Certifications</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {certifications.map((cert, index) => (
                  <Card
                    key={cert.id}
                    className="p-6 hover-elevate transition-all duration-300"
                    data-testid={`card-certification-${index}`}
                  >
                    <div className="flex items-center gap-3 mb-3 text-muted-foreground">
                      {typeIcons[cert.type]}
                      <p className="text-xs uppercase tracking-wider font-medium">
                        Certified
                      </p>
                    </div>
                    <h4 className="text-base font-semibold text-foreground" data-testid={`text-certification-title-${index}`}>
                      {cert.title}
                    </h4>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {others.length > 0 && (
            <div className="grid md:grid-cols-2 gap-6">
              {others.map((achievement, index) => (
                <Card
                  key={achievement.id}
                  className="p-6 hover-elevate transition-all duration-300"
                  data-testid={`card-other-achievement-${index}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-muted rounded-md text-foreground">
                      {typeIcons[achievement.type]}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-2" data-testid={`text-other-achievement-title-${index}`}>
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-muted-foreground" data-testid={`text-other-achievement-description-${index}`}>
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
