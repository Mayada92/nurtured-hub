/**
 * Utility functions for organizing content by domain
 */

export type Domain = 'sports' | 'educational-psychology' | 'engineering' | 'data-science' | 'general';

export const domainLabels = {
  en: {
    sports: 'Sports',
    'educational-psychology': 'Educational Psychology',
    engineering: 'Engineering',
    'data-science': 'Data Science',
    general: 'General',
  },
  ar: {
    sports: 'الرياضة',
    'educational-psychology': 'علم النفس التربوي',
    engineering: 'الهندسة',
    'data-science': 'علم البيانات',
    general: 'عام',
  },
} as const;

export function organizeByDomain<T extends { data: { domain: Domain | Domain[] } }>(
  items: T[],
  lang: 'en' | 'ar' = 'en'
): Record<Domain, T[]> {
  const organized: Record<Domain, T[]> = {
    sports: [],
    'educational-psychology': [],
    engineering: [],
    'data-science': [],
    general: [],
  };

  for (const item of items) {
    const domains = Array.isArray(item.data.domain) ? item.data.domain : [item.data.domain];
    for (const domain of domains) {
      if (domain in organized) {
        organized[domain].push(item);
      }
    }
  }

  // Remove empty domains
  Object.keys(organized).forEach((key) => {
    if (organized[key as Domain].length === 0) {
      delete organized[key as Domain];
    }
  });

  return organized;
}

export function getDomainOrder(): Domain[] {
  return ['sports', 'educational-psychology', 'engineering', 'data-science', 'general'];
}

