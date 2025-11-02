/**
 * UI Configuration for site-wide motion, density, and section spacing
 */

export const uiConfig = {
  // Motion settings
  motion: {
    enabled: true, // Set to false to disable all animations globally
    defaultDuration: 0.6,
    defaultDelay: 0.1,
  },

  // FloatingLayer settings
  floatingLayer: {
    density: 'medium' as 'low' | 'medium' | 'high',
    enabled: true,
    zIndex: 0, // Behind content
    useAccents: ['accent-1', 'accent-2', 'accent-3'] as const,
  },

  // Section spacing
  sectionSpacing: {
    mobile: '2.5rem',
    tablet: '4rem',
    desktop: '6rem',
  },

  // Reveal animation settings
  reveal: {
    threshold: 0.1,
    once: true, // Animate once when scrolled into view
    rootMargin: '0px 0px -100px 0px',
  },
};



