import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DownloadResumeButtonProps {
  variant?: 'default' | 'ghost' | 'outline';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
  showText?: boolean;
}

export function DownloadResumeButton({ 
  variant = 'ghost', 
  size = 'default',
  className = '',
  showText = true 
}: DownloadResumeButtonProps) {
  const handleDownload = () => {
    // Simple and reliable approach using anchor tag
    const link = document.createElement('a');
    link.href = '/resume/Ravi_Teja_Bhagavatula_Resume.pdf';
    link.download = 'Ravi_Teja_Bhagavatula_Resume.pdf';
    link.setAttribute('type', 'application/pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleDownload}
      className={className}
      data-testid="button-download-resume"
      aria-label="Download Resume"
    >
      <Download className="w-4 h-4" />
      {showText && <span>Resume</span>}
    </Button>
  );
}
