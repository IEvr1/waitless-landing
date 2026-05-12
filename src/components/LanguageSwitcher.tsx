"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { Lang } from "@/lib/types";
import { t } from "@/lib/i18n";

const LANG_COOKIE = "lang";
const MAX_AGE = 60 * 60 * 24 * 365;

export function LanguageSwitcher({ lang }: { lang: Lang }) {
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();

  function setLang(next: Lang) {
    document.cookie = `${LANG_COOKIE}=${next};path=/;max-age=${MAX_AGE};SameSite=Lax`;
    const p = new URLSearchParams(sp.toString());
    p.set("lang", next);
    const q = p.toString();
    router.replace(q ? `${pathname}?${q}` : pathname);
    router.refresh();
  }

  return (
    <div className="flex gap-1 rounded-full border border-border bg-surface-muted/90 p-1 text-sm font-semibold shadow-inner dark:bg-surface-muted/60">
      <button
        type="button"
        onClick={() => setLang("el")}
        className={`rounded-full px-3 py-1 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
          lang === "el"
            ? "bg-accent text-accent-foreground shadow-sm"
            : "text-muted-foreground hover:bg-surface hover:text-foreground"
        }`}
      >
        {t("lang.el", lang)}
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`rounded-full px-3 py-1 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
          lang === "en"
            ? "bg-accent text-accent-foreground shadow-sm"
            : "text-muted-foreground hover:bg-surface hover:text-foreground"
        }`}
      >
        {t("lang.en", lang)}
      </button>
    </div>
  );
}
