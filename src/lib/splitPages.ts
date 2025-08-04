/**
 * splitPages breaks the provided text into pages.
 * Each page contains up to the specified number of characters.
 *
 * @param text - The source string to split.
 * @param pageSize - Maximum characters per page.
 * @returns Array of paginated strings.
 */
export function splitPages(text: string, pageSize: number): string[] {
  const pages: string[] = [];
  for (let i = 0; i < text.length; i += pageSize) {
    pages.push(text.slice(i, i + pageSize));
  }
  return pages;
}
