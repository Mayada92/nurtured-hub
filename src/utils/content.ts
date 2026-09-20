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
