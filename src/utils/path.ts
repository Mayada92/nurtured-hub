/**
 * Utility functions for path manipulation in bilingual routing
 */

const BASE_PATH = import.meta.env.BASE_URL;

export function getRelativePath(currentPath: string, targetLang: 'en' | 'ar'): string {
  // Remove leading base path if present
  let path = currentPath.replace(new RegExp(`^${BASE_PATH}`), '');

  // Remove current language prefix
  path = path.replace(/^\/(en|ar)/, '');

  // Ensure path starts with /
  if (!path.startsWith('/')) {
    path = '/' + path;
  }

  // Add target language prefix
  return `${BASE_PATH}${targetLang}${path === '/' ? '' : path}`.replace(/\/+/g, '/');
}

export function getLanguageFromPath(path: string): 'en' | 'ar' {
  // Remove base path first
  const cleanPath = path.replace(new RegExp(`^${BASE_PATH}`), '');
  if (cleanPath.startsWith('/ar')) return 'ar';
  return 'en';
}

export function getBasePath(): string {
  return BASE_PATH;
}



