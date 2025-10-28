import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Achievement } from '@shared/schema';
import { Award, Trophy, Crown, Code, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { useStarsEnabled } from '@/hooks/useStarsEnabled';

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
  const starsEnabled = useStarsEnabled();
  const featuredAchievements = achievements.filter(
    a => a.id === 'achievement-1' || a.id === 'achievement-2' || a.id === 'achievement-3'
  );
  
  const certifications = achievements.filter(a => a.type === 'certification' && a.id !== 'achievement-1');
  const others = achievements.filter(
    a => !featuredAchievements.includes(a) && !certifications.includes(a)
  );

  return (
    <section id="achievements" className={`py-16 sm:py-20 md:py-24 lg:py-32 ${!starsEnabled ? 'bg-background' : ''}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground" data-testid="text-achievements-heading">
            Achievements & Certifications
          </h2>
          <Button
            variant="outline"
            size="lg"
            className="group w-fit"
            asChild
          >
            <Link href="/badges">
              View All Badges
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        <div className="space-y-8 sm:space-y-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {featuredAchievements.map((achievement, index) => (
              <Card
                key={achievement.id}
                className="p-6 sm:p-8 hover-elevate transition-all duration-300 transform hover:-translate-y-1"
                data-testid={`card-featured-achievement-${index}`}
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="p-2 sm:p-3 bg-primary/10 rounded-md text-primary flex-shrink-0">
                    {typeIcons[achievement.type]}
                  </div>
                  <Badge variant="secondary" className="text-xs uppercase tracking-wider">
                    {achievement.type}
                  </Badge>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3" data-testid={`text-achievement-title-${index}`}>
                  {achievement.title}
                </h3>
                
                {achievement.period && (
                  <p className="text-xs sm:text-sm text-muted-foreground mb-2 font-medium">
                    {achievement.period}
                  </p>
                )}
                
                <p className="text-sm sm:text-base leading-relaxed text-muted-foreground" data-testid={`text-achievement-description-${index}`}>
                  {achievement.description}
                </p>
              </Card>
            ))}
          </div>

          {certifications.length > 0 && (
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8 text-foreground">Certifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {certifications.map((cert, index) => (
                  <Card
                    key={cert.id}
                    className="p-4 sm:p-6 hover-elevate transition-all duration-300"
                    data-testid={`card-certification-${index}`}
                  >
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 text-muted-foreground">
                      {typeIcons[cert.type]}
                      <p className="text-xs uppercase tracking-wider font-medium">
                        Certified
                      </p>
                    </div>
                    <h4 className="text-sm sm:text-base font-semibold text-foreground" data-testid={`text-certification-title-${index}`}>
                      {cert.title}
                    </h4>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {others.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {others.map((achievement, index) => (
                <Card
                  key={achievement.id}
                  className="p-4 sm:p-6 hover-elevate transition-all duration-300"
                  data-testid={`card-other-achievement-${index}`}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 bg-muted rounded-md text-foreground flex-shrink-0">
                      {typeIcons[achievement.type]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2" data-testid={`text-other-achievement-title-${index}`}>
                        {achievement.title}
                      </h4>
                      {achievement.period && (
                        <p className="text-xs text-muted-foreground mb-1 font-medium">
                          {achievement.period}
                        </p>
                      )}
                      <p className="text-xs sm:text-sm text-muted-foreground" data-testid={`text-other-achievement-description-${index}`}>
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
