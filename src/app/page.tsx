import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Suspense } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { WaitlessLanding } from "@/components/marketing/WaitlessLanding";
import { getDemoShopUrl } from "@/lib/demo-shop-url";
import { resolveLang, t } from "@/lib/i18n";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}): Promise<Metadata> {
  const [sp, cookieStore] = await Promise.all([searchParams, cookies()]);
  const lang = resolveLang(sp.lang, cookieStore.get("lang")?.value, "el");
  return {
    title: { absolute: t("waitless.metaTitle", lang) },
    description: t("waitless.metaDescription", lang),
  };
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const [sp, cookieStore] = await Promise.all([searchParams, cookies()]);
  const lang = resolveLang(sp.lang, cookieStore.get("lang")?.value, "el");
  const demoShopUrl = getDemoShopUrl();

  return (
    <div className="mx-auto min-h-screen max-w-6xl px-4 pb-16 pt-4 sm:px-6 sm:pb-24 lg:px-10">
      <header className="flex items-center justify-between gap-6 border-b border-border pb-5">
        <div className="flex min-w-0 items-center gap-3">
          <span
            className="size-2.5 shrink-0 rounded-full bg-primary"
            aria-hidden
          />
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold tracking-tight text-foreground">
              {t("app.title", lang)}
            </p>
            <p className="hidden truncate text-xs text-muted-foreground sm:block">
              {t("app.tagline", lang)}
            </p>
          </div>
        </div>
        <Suspense fallback={null}>
          <LanguageSwitcher lang={lang} />
        </Suspense>
      </header>
      <main className="mt-8 sm:mt-10">
        <WaitlessLanding lang={lang} demoShopUrl={demoShopUrl} />
      </main>
    </div>
  );
}
