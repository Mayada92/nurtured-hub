/**
 * Profile "pin_*" lists (pin_projects/pin_posts/pin_papers) are shared across languages
 * and store English slugs. Comparing raw slugs against an Arabic entry's slug always
 * fails since it ends in "-ar" instead of "-en". Stripping the language suffix before
 * comparing lets the same pin list match the correct entry in either language.
 */
export function stripLangSuffix(slug: string): string {
  return slug.replace(/-(en|ar)$/, '');
}

export function isPinned(slug: string, pinnedSlugs: string[]): boolean {
  const base = stripLangSuffix(slug);
  return pinnedSlugs.some((pinned) => stripLangSuffix(pinned) === base);
}

/**
 * Freeform tag slugs (project `tags`, etc.) are stored in English regardless of
 * entry language, since profile pages match on them across languages. Translate
 * for display only; unknown tags (or tags already written in Arabic) pass through.
 */
const TAG_LABELS_AR: Record<string, string> = {
  'ai-tools': 'أدوات ذكاء اصطناعي',
  automation: 'أتمتة',
  aws: 'AWS',
  business: 'أعمال',
  children: 'أطفال',
  'data-science': 'علم البيانات',
  'digital-transformation': 'تحول رقمي',
  'early-childhood': 'الطفولة المبكرة',
  edtech: 'تقنية تعليمية',
  education: 'تعليم',
  'educational-psychology': 'علم النفس التربوي',
  engineering: 'هندسة',
  general: 'عام',
  'graph-databases': 'قواعد بيانات الرسوم البيانية',
  llm: 'نموذج لغوي كبير',
  'machine-learning': 'تعلم آلي',
  productivity: 'إنتاجية',
  rag: 'RAG',
  'social-impact': 'أثر اجتماعي',
  sustainability: 'استدامة',
  workflows: 'سير العمل',
};

export function translateTag(tag: string, lang: 'en' | 'ar'): string {
  if (lang !== 'ar') return tag;
  return TAG_LABELS_AR[tag.toLowerCase()] || tag;
}
