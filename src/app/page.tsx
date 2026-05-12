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
      <header className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 border-b border-border pb-5">
        <div className="flex min-w-0 items-center gap-3 sm:gap-3.5">
          <span
            className="size-3 shrink-0 rounded-full bg-primary sm:size-3.5"
            aria-hidden
          />
          <div className="min-w-0">
            <p className="truncate text-lg font-bold tracking-tight text-foreground sm:text-xl md:text-2xl">
              {t("app.title", lang)}
            </p>
            <p className="hidden truncate text-sm leading-snug text-muted-foreground sm:block md:text-[0.9375rem]">
              {t("app.tagline", lang)}
            </p>
          </div>
        </div>
        <nav
          aria-label={t("waitless.navAriaPrimary", lang)}
          className="flex shrink-0 items-center gap-3 sm:gap-4"
        >
          <a
            href="#timologisi"
            className="whitespace-nowrap text-xs font-medium text-muted-foreground underline-offset-4 transition hover:text-foreground hover:underline sm:text-sm"
          >
            {t("waitless.sectionPricing", lang)}
          </a>
          <Suspense fallback={null}>
            <LanguageSwitcher lang={lang} />
          </Suspense>
        </nav>
      </header>
      <main className="mt-8 sm:mt-10">
        <WaitlessLanding lang={lang} demoShopUrl={demoShopUrl} />
      </main>
    </div>
  );
}
