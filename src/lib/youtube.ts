/** Parse M:SS or H:MM:SS into seconds for YouTube `start` param. */
export function parseTimestamp(time: string): number {
  const parts = time.trim().split(":").map((p) => parseInt(p, 10));
  if (parts.some((n) => Number.isNaN(n))) return 0;
  if (parts.length === 2) return parts[0] * 60 + parts[1];
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
  return parts[0] ?? 0;
}

export function youtubeEmbedUrl(videoId: string, startSeconds = 0): string {
  const params = new URLSearchParams({
    start: String(startSeconds),
    rel: "0",
    modestbranding: "1",
  });
  if (startSeconds > 0) params.set("autoplay", "1");
  return `https://www.youtube.com/embed/${videoId}?${params}`;
}
