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

/**
 * Get image path with base path prefix for GitHub Pages
 * For images in public/ folder, always include base path
 */
export function getImagePath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Always include base path for public images (works in both dev and production)
  // BASE_URL already includes trailing slash, so we don't need to add one
  return `${BASE_PATH}${cleanPath}`.replace(/\/+/g, '/');
}

/**
 * Build a URL path with base path and language prefix
 * Ensures proper slash handling
 */
export function buildPath(lang: 'en' | 'ar', ...segments: string[]): string {
  // Remove leading/trailing slashes from segments and join
  const cleanSegments = segments
    .map(seg => seg.replace(/^\/+|\/+$/g, ''))
    .filter(seg => seg.length > 0);
  
  // Build path: base + lang + segments
  const path = [BASE_PATH.replace(/\/+$/, ''), lang, ...cleanSegments]
    .filter(Boolean)
    .join('/');
  
  // Ensure it starts with / and normalize slashes
  return `/${path.replace(/^\/+|\/+$/g, '')}`.replace(/\/+/g, '/');
}



