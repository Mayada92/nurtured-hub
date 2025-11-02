/**
 * Utility functions for path manipulation in bilingual routing
 */

export function getRelativePath(currentPath: string, targetLang: 'en' | 'ar'): string {
  // Remove leading base path if present
  let path = currentPath.replace(/^\/nurtured-hub/, '');

  // Remove current language prefix
  path = path.replace(/^\/(en|ar)/, '');

  // Ensure path starts with /
  if (!path.startsWith('/')) {
    path = '/' + path;
  }

  // Add target language prefix
  return `/${targetLang}${path === '/' ? '' : path}`;
}

export function getLanguageFromPath(path: string): 'en' | 'ar' {
  if (path.startsWith('/ar')) return 'ar';
  return 'en';
}



