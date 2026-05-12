import type { Lang } from "@/lib/types";
import el from "@/i18n/el.json";
import en from "@/i18n/en.json";

const dict: Record<Lang, Record<string, string>> = {
  el: el as Record<string, string>,
  en: en as Record<string, string>,
};

export function resolveLang(
  query: string | null | undefined,
  cookie: string | null | undefined,
  fallback: Lang
): Lang {
  if (query === "en" || query === "el") return query;
  if (cookie === "en" || cookie === "el") return cookie;
  return fallback;
}

export function t(
  key: string,
  lang: Lang,
  vars?: Record<string, string | number | undefined>
): string {
  const table = dict[lang] ?? dict.el;
  let s = table[key] ?? dict.en[key] ?? key;
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      if (v === undefined) continue;
      s = s.replaceAll(`{${k}}`, String(v));
    }
  }
  return s;
}
