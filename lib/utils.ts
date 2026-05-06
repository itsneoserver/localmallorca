export function cn(...args: Array<string | false | undefined | null>): string {
  return args.filter(Boolean).join(" ");
}

export function formatPriceFromNumber(n?: number): string {
  if (!n && n !== 0) return "Under quote";
  return `From ${n} EUR`;
}
