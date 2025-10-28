import { ContactForm } from './ContactForm';
import { Mail } from 'lucide-react';
import { useStarsEnabled } from '@/hooks/useStarsEnabled';

export function Contact() {
  const starsEnabled = useStarsEnabled();
  
  return (
    <section id="contact" className={`py-24 px-6 ${!starsEnabled ? 'bg-background' : ''}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Mail className="w-8 h-8 text-foreground" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Get In Touch
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>
        
        <ContactForm />
      </div>
    </section>
  );
}
