import { badges } from '@/data/portfolio-data';
import { BadgeCard } from '@/components/BadgeCard';
import { Navigation } from '@/components/Navigation';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

// Category configuration
const categories = [
  { id: 'cloud', label: 'Cloud Certifications', icon: '☁️' },
  { id: 'competitive', label: 'Competitive Programming', icon: '🏆' },
  { id: 'ai-ml', label: 'AI/ML Certifications', icon: '🤖' },
  { id: 'leadership', label: 'Leadership & Recognition', icon: '⭐' },
] as const;

export default function BadgesPage() {
  // Group badges by category
  const badgesByCategory = categories.map(category => ({
    ...category,
    badges: badges.filter(badge => badge.category === category.id)
  }));

  return (
    <div className="relative min-h-screen" style={{ zIndex: 10 }}>
      <Navigation />
      
      {/* Header */}
      <div className="bg-background border-b border-border pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <Button
            variant="ghost"
            size="sm"
            className="mb-6 -ml-2"
            asChild
          >
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Link>
          </Button>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Badges & Certificates
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl">
            A collection of certifications, achievements, and digital badges earned through continuous learning and professional development.
          </p>
        </div>
      </div>

      {/* Category Sections */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
        {badgesByCategory.map(category => (
          <section key={category.id} id={category.id}>
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 flex items-center gap-3">
                <span className="text-3xl">{category.icon}</span>
                {category.label}
              </h2>
              <div className="h-1 w-20 bg-foreground/20 rounded-full"></div>
            </div>

            {/* Responsive Grid: 2 cols mobile, 3 cols tablet, 4 cols desktop */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {category.badges.map(badge => (
                <BadgeCard key={badge.id} badge={badge} />
              ))}
            </div>

            {category.badges.length === 0 && (
              <p className="text-muted-foreground text-center py-8">
                No badges in this category yet.
              </p>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
