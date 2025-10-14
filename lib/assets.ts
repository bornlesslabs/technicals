/**
 * Get the correct asset path for both development and production (GitHub Pages)
 * @param assetPath - The relative path to the asset (e.g., '/assets/image.svg')
 * @returns The full path including base path for GitHub Pages deployment
 */
export function getAssetPath(assetPath: string): string {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = assetPath.startsWith('/') ? assetPath.slice(1) : assetPath;

  // In production on GitHub Pages, prepend the base path
  if (process.env.NODE_ENV === 'production') {
    return `/technicals/${cleanPath}`;
  }

  // In development, just use the asset path as-is
  return `/${cleanPath}`;
}
