import { Badge } from '@shared/schema';
import { ExternalLink, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BadgeCardProps {
  badge: Badge;
}

export function BadgeCard({ badge }: BadgeCardProps) {
  return (
    <div 
      className="group relative bg-background border border-border rounded-lg p-4 sm:p-6 transition-all duration-300 hover-elevate hover:border-foreground/20"
      data-testid={`badge-card-${badge.id}`}
    >
      {/* Badge Image/Icon */}
      <div className="mb-4 flex items-center justify-center">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-muted flex items-center justify-center overflow-hidden border-2 border-border group-hover:border-foreground/30 transition-colors duration-300">
          {badge.imageUrl ? (
            <img 
              src={badge.imageUrl} 
              alt={badge.title}
              className="w-full h-full object-cover object-center"
              loading="lazy"
              onError={(e) => {
                // Fallback to icon if image fails to load
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
          ) : null}
          <Award className="w-10 h-10 sm:w-12 sm:h-12 text-muted-foreground hidden" />
        </div>
      </div>

      {/* Badge Content */}
      <div className="space-y-2">
        {/* Title */}
        <h3 className="text-sm sm:text-base font-semibold text-foreground line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem]">
          {badge.title}
        </h3>

        {/* Issuer */}
        <p className="text-xs sm:text-sm text-muted-foreground font-medium">
          {badge.issuer}
        </p>

        {/* Issue Date */}
        {badge.issueDate && (
          <p className="text-xs text-muted-foreground">
            {badge.issueDate}
          </p>
        )}

        {/* Description */}
        <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3 min-h-[3rem] sm:min-h-[3.5rem]">
          {badge.description}
        </p>

        {/* Verification Link */}
        {badge.verificationUrl && (
          <div className="pt-2">
            <Button
              variant="outline"
              size="sm"
              className="w-full text-xs sm:text-sm group/btn"
              asChild
            >
              <a 
                href={badge.verificationUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                data-testid={`badge-verify-${badge.id}`}
              >
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                Verify
              </a>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
