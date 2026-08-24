/** Split markdown-lite body into paragraphs and headings */
export function parseProse(body: string): { type: "p" | "h"; text: string }[] {
  return body
    .split(/\n\n+/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block) => {
      const heading = block.match(/^\*\*(.+)\*\*$/);
      if (heading) return { type: "h" as const, text: heading[1] };
      return { type: "p" as const, text: block.replace(/\*\*(.+?)\*\*/g, "$1") };
    });
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("el-GR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
