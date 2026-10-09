/**
 * Utility to resolve public assets correctly both in local development (/)
 * and on GitHub Pages subdirectory (/todo-alturas-web/)
 */
export function getAssetPath(path: string): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${prefix}${cleanPath}`;
}
