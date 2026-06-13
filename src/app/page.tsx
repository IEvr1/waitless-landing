import type { Metadata } from "next";
import { cookies } from "next/headers";
import Image from "next/image";
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
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <a
            href="https://www.nexaipla.com/shoptraffic"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 transition opacity-90 hover:opacity-100"
          >
            <Image
              src="/nexaipla-logo.png"
              alt="NexAIpla"
              width={160}
              height={40}
              priority
              className="h-8 w-auto sm:h-9"
            />
          </a>
          <div className="min-w-0 border-l border-border pl-3 sm:pl-4">
            <p className="truncate text-base font-bold tracking-tight text-foreground sm:text-xl md:text-2xl">
              {t("app.title", lang)}
            </p>
            <p className="truncate text-xs leading-snug text-muted-foreground sm:text-sm md:text-[0.9375rem]">
              {t("app.tagline", lang)}
            </p>
          </div>
        </div>
        <nav
          aria-label={t("waitless.navAriaPrimary", lang)}
          className="flex shrink-0 items-center gap-3 sm:gap-4"
        >
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
