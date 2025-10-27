import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Education } from '@/components/Education';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Achievements } from '@/components/Achievements';
import { Footer } from '@/components/Footer';
import { portfolioData } from '@/data/portfolio-data';
import { useEffect } from 'react';

export default function Portfolio() {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    });

    document.querySelectorAll('section').forEach((section) => {
      section.classList.add('opacity-0');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <Hero
        name={portfolioData.name}
        title={portfolioData.title}
        contact={portfolioData.contact}
      />
      
      <About
        about={portfolioData.about}
        contact={portfolioData.contact}
      />
      
      <Education education={portfolioData.education} />
      
      <Skills
        skills={portfolioData.skills}
        coursework={portfolioData.coursework}
      />
      
      <Projects projects={portfolioData.projects} />
      
      <Achievements achievements={portfolioData.achievements} />
      
      <Footer
        name={portfolioData.name}
        title={portfolioData.title}
        contact={portfolioData.contact}
      />
    </div>
  );
}
