const cache = new Map<string, { data: unknown; expiresAt: number }>();
const DEFAULT_TTL = 5 * 60 * 1000; // 5 minutes

export function getCached<T>(key: string): T | undefined {
  const entry = cache.get(key);
  if (!entry) return undefined;
  if (Date.now() > entry.expiresAt) {
    cache.delete(key);
    return undefined;
  }
  return entry.data as T;
}

export function setCached(key: string, data: unknown, ttl = DEFAULT_TTL): void {
  cache.set(key, { data, expiresAt: Date.now() + ttl });
}
