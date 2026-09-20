/**
 * Recency comparator for content with a `year` and optional, more precise `date`.
 * Sorts most recent first. Falls back to Jan 1 of `year` when `date` is absent,
 * so items without a precise date still sort correctly relative to items that have one.
 */
export function compareByRecency(
  a: { data: { year: number; date?: Date } },
  b: { data: { year: number; date?: Date } }
): number {
  const aTime = a.data.date ? a.data.date.getTime() : Date.UTC(a.data.year, 0, 1);
  const bTime = b.data.date ? b.data.date.getTime() : Date.UTC(b.data.year, 0, 1);
  return bTime - aTime;
}
