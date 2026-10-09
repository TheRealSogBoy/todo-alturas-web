export function getAssetPath(path: string): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (cleanPath.startsWith("/todo-alturas-web/")) {
    return cleanPath;
  }
  return `/todo-alturas-web${cleanPath}`;
}
