import type { Lang } from "@/lib/types";
import { t } from "@/lib/i18n";
import { LandingSection } from "@/components/marketing/LandingSection";
import { TrafficLevelLegend } from "@/components/marketing/TrafficLevelLegend";

function BulletList({ keys, lang }: { keys: string[]; lang: Lang }) {
  return (
    <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-muted-foreground">
      {keys.map((key, i) => (
        <li key={i}>{t(key, lang)}</li>
      ))}
    </ul>
  );
}

function PillarCard({
  title,
  description,
  href,
  learnMore,
}: {
  title: string;
  description: string;
  href: string;
  learnMore: string;
}) {
  return (
    <a
      href={href}
      className="group flex flex-col rounded-2xl border border-border bg-surface p-6 shadow-sm transition hover:border-primary/40 hover:shadow-md"
    >
      <h3 className="text-lg font-semibold tracking-tight text-foreground">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      <span className="mt-4 text-sm font-medium text-primary group-hover:underline">
        {learnMore}
      </span>
    </a>
  );
}

export function WaitlessLanding({
  lang,
  demoShopUrl,
}: {
  lang: Lang;
  demoShopUrl: string;
}) {
  const customerKeys = [
    "waitless.customer.b1",
    "waitless.customer.b2",
    "waitless.customer.b3",
    "waitless.customer.b4",
    "waitless.customer.b5",
    "waitless.customer.b6",
    "waitless.customer.b7",
    "waitless.customer.b8",
  ];
  const ownerKeys = [
    "waitless.owner.b1",
    "waitless.owner.b2",
    "waitless.owner.b3",
    "waitless.owner.b4",
    "waitless.owner.b5",
    "waitless.owner.b6",
    "waitless.owner.b7",
  ];

  return (
    <div className="pb-8 sm:pb-12">
      <section
        aria-labelledby="hero-heading"
        className="relative overflow-hidden rounded-3xl bg-hero-bg px-6 py-14 text-hero-fg shadow-2xl shadow-zinc-900/20 ring-1 ring-white/10 sm:px-10 sm:py-16 lg:px-14 lg:py-20"
      >
        <div
          className="pointer-events-none absolute -right-20 top-0 size-[28rem] rounded-full bg-[radial-gradient(circle_at_center,var(--hero-accent),transparent_65%)] blur-2xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-32 -left-24 size-96 rounded-full bg-emerald-500/10 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-hero-muted">
            {t("waitless.heroEyebrow", lang)}
          </p>
          <h1
            id="hero-heading"
            className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            {t("waitless.heroHeadline", lang)}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-300 sm:text-xl">
            {t("app.tagline", lang)}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-hero-muted">
            {t("waitless.heroLead", lang)}
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400">
            {t("waitless.heroSub", lang)}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={demoShopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-center text-sm font-semibold text-zinc-950 shadow-lg transition hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-hero-bg"
            >
              {t("waitless.ctaDemo", lang)}
            </a>
            <a
              href="#pelatis"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-center text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-hero-bg"
            >
              {t("waitless.ctaExplore", lang)}
            </a>
          </div>
          <p className="mt-10 max-w-2xl border-t border-white/10 pt-8 text-sm leading-relaxed text-hero-muted">
            {t("waitless.ownerNote", lang)}
          </p>
        </div>
      </section>

      <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        <PillarCard
          title={t("waitless.sectionCustomer", lang)}
          description={t("waitless.pillarCustomerBlurb", lang)}
          href="#pelatis"
          learnMore={t("waitless.learnMore", lang)}
        />
        <PillarCard
          title={t("waitless.sectionOwner", lang)}
          description={t("waitless.pillarOwnerBlurb", lang)}
          href="#idioktitis"
          learnMore={t("waitless.learnMore", lang)}
        />
        <PillarCard
          title={t("waitless.sectionWhyNot", lang)}
          description={t("waitless.pillarWhyBlurb", lang)}
          href="#giati-oxi-booking"
          learnMore={t("waitless.learnMore", lang)}
        />
      </div>

      <div className="mx-auto mt-6 max-w-3xl lg:max-w-none">
        <LandingSection id="pelatis" title={t("waitless.sectionCustomer", lang)}>
          <p className="text-base leading-relaxed text-muted-foreground">
            {t("waitless.customerIntro", lang)}
          </p>
          <BulletList keys={customerKeys} lang={lang} />
          <TrafficLevelLegend
            lang={lang}
            caption={t("waitless.levelsCaption", lang)}
          />
        </LandingSection>

        <LandingSection id="idioktitis" title={t("waitless.sectionOwner", lang)}>
          <p className="text-base leading-relaxed text-muted-foreground">
            {t("waitless.ownerIntro", lang)}
          </p>
          <BulletList keys={ownerKeys} lang={lang} />
        </LandingSection>

        <LandingSection id="giati-oxi-booking" title={t("waitless.sectionWhyNot", lang)}>
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>{t("waitless.whyNot.p1", lang)}</p>
            <p>{t("waitless.whyNot.p2", lang)}</p>
            <p>{t("waitless.whyNot.p3", lang)}</p>
          </div>
        </LandingSection>

        <LandingSection id="pwa-mobile" title={t("waitless.sectionPwa", lang)}>
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>{t("waitless.pwa.p1", lang)}</p>
            <p>{t("waitless.pwa.p2", lang)}</p>
          </div>
        </LandingSection>

        <LandingSection id="eksypnes" title={t("waitless.sectionSmart", lang)}>
          <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-muted-foreground">
            <li>{t("waitless.smart.p1", lang)}</li>
            <li>{t("waitless.smart.p2", lang)}</li>
          </ul>
        </LandingSection>

        <section
          aria-labelledby="cta-footer-heading"
          className="mt-16 rounded-3xl bg-hero-bg px-6 py-12 text-center text-hero-fg ring-1 ring-white/10 sm:px-10 sm:py-14"
        >
          <h2
            id="cta-footer-heading"
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            {t("waitless.heroHeadline", lang)}
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-hero-muted">
            {t("waitless.heroSub", lang)}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={demoShopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-hero-bg sm:w-auto"
            >
              {t("waitless.ctaDemo", lang)}
            </a>
            <a
              href="#pelatis"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/25 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-hero-bg sm:w-auto"
            >
              {t("waitless.ctaExplore", lang)}
            </a>
          </div>
        </section>

        <footer className="mt-12 border-t border-border pt-10 text-center">
          <p className="text-sm font-medium text-foreground">
            {t("waitless.footerTagline", lang)}
          </p>
          <p className="mx-auto mt-3 max-w-xl text-xs leading-relaxed text-muted-foreground">
            {t("waitless.footerTech", lang)}
          </p>
        </footer>
      </div>
    </div>
  );
}
