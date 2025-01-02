import { useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = () => {
  const [activeSection, setActiveSection] = useState('');
  const observerRef = useRef<IntersectionObserver | null>(null);
  const activeSectionRef = useRef<string>('');

  useEffect(() => {
    const calculateDistanceFromCenter = (element: HTMLElement) => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const windowCenter = windowHeight / 2;
      return Math.abs(elementCenter - windowCenter);
    };

    const updateActiveSection = () => {
      let minDistance = Infinity;
      let newActiveSection = activeSectionRef.current;

      document.querySelectorAll<HTMLElement>('[data-section]').forEach((section) => {
        const distance = calculateDistanceFromCenter(section);
        if (distance < minDistance) {
          minDistance = distance;
          newActiveSection = section.getAttribute('id') || '';
        }
      });

      if (newActiveSection !== activeSectionRef.current) {
        activeSectionRef.current = newActiveSection;
        setActiveSection(newActiveSection);
      }
    };

    observerRef.current = new IntersectionObserver(updateActiveSection);

    const sections = document.querySelectorAll<HTMLElement>('[data-section]');
    sections.forEach((section) => {
      if (observerRef.current) {
        observerRef.current.observe(section);
      }
    });

    window.addEventListener('scroll', updateActiveSection);
    return () => {
      if (observerRef.current) {
        sections.forEach((section) => {
          observerRef.current?.unobserve(section);
        });
      }
      window.removeEventListener('scroll', updateActiveSection);
    };
  }, []);

  return activeSection;
};
