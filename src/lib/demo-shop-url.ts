/** Public demo shop on the main live-traffic-dashboard deployment (override via env). */
export function getDemoShopUrl(): string {
  const origin = (
    process.env.NEXT_PUBLIC_DASHBOARD_ORIGIN ??
    "https://live-traffic-dashboard.vercel.app"
  ).replace(/\/$/, "");
  const slug =
    process.env.NEXT_PUBLIC_DEMO_SHOP_SLUG?.trim() || "stellas-barber";
  return `${origin}/shop/${encodeURIComponent(slug)}`;
}
