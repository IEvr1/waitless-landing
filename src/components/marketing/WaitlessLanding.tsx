import type { Lang } from "@/lib/types";
import { t } from "@/lib/i18n";
import { LandingHeroReveal } from "@/components/marketing/LandingHeroReveal";
import { LandingMetricsStrip } from "@/components/marketing/LandingMetricsStrip";
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
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface p-6 pt-7 shadow-sm ring-1 ring-emerald-950/[0.04] transition duration-200 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-lg hover:shadow-emerald-950/10 motion-reduce:transform-none dark:ring-white/[0.06]"
    >
      <span
        className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-primary via-accent to-primary opacity-90"
        aria-hidden
      />
      <h3 className="text-lg font-semibold tracking-tight text-foreground">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      <span className="mt-4 text-sm font-semibold text-primary group-hover:underline">
        {learnMore}
      </span>
    </a>
  );
}

const heroPanelClass =
  "relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-950 via-teal-950 to-[#021a14] px-6 py-14 text-hero-fg shadow-2xl shadow-emerald-950/40 ring-1 ring-emerald-400/15 sm:px-10 sm:py-16 lg:px-14 lg:py-20";

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
  const ownerNote = t("waitless.ownerNote", lang).trim();
  const pricingAnnualDesc = t("waitless.pricingAnnualDesc", lang).trim();

  return (
    <div className="pb-8 sm:pb-12">
      <section
        aria-labelledby="hero-heading"
        className={heroPanelClass}
      >
        <div
          className="pointer-events-none absolute -right-20 top-0 size-[28rem] rounded-full bg-[radial-gradient(circle_at_center,rgb(190_242_100_/_0.14),transparent_62%)] blur-2xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-32 -left-24 size-96 rounded-full bg-emerald-500/15 blur-3xl"
          aria-hidden
        />
        <LandingHeroReveal>
          <div className="relative mx-auto max-w-4xl">
            <p
              data-hero-reveal
              className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-200/90"
            >
              {t("waitless.heroEyebrow", lang)}
            </p>
            <h1
              id="hero-heading"
              data-hero-reveal
              className="mt-4 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
            >
              {t("waitless.heroHeadline", lang)}
            </h1>
            <p
              data-hero-reveal
              className="mt-5 max-w-2xl text-lg leading-relaxed text-emerald-50/95 sm:text-xl"
            >
              {t("app.tagline", lang)}
            </p>
            <p
              data-hero-reveal
              className="mt-4 max-w-2xl text-base leading-relaxed text-emerald-100/85"
            >
              {t("waitless.heroLead", lang)}
            </p>
            <p
              data-hero-reveal
              className="mt-3 max-w-2xl text-sm leading-relaxed text-emerald-200/75"
            >
              {t("waitless.heroSub", lang)}
            </p>
            <div
              data-hero-reveal
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            >
              <a
                href={demoShopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-center text-sm font-semibold text-accent-foreground shadow-lg shadow-lime-950/25 transition hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-950"
              >
                {t("waitless.ctaDemo", lang)}
              </a>
              <a
                href="#pelatis"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-center text-sm font-semibold text-white backdrop-blur-sm transition hover:border-emerald-200/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200/60 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-950"
              >
                {t("waitless.ctaExplore", lang)}
              </a>
            </div>
            <LandingMetricsStrip lang={lang} />
            {ownerNote ? (
              <p
                data-hero-reveal
                className="mt-10 max-w-2xl border-t border-white/10 pt-8 text-sm leading-relaxed text-emerald-100/80"
              >
                {ownerNote}
              </p>
            ) : null}
          </div>
        </LandingHeroReveal>
      </section>

      <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
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
        <PillarCard
          title={t("waitless.sectionPricing", lang)}
          description={t("waitless.pillarPricingBlurb", lang)}
          href="#timologisi"
          learnMore={t("waitless.learnMore", lang)}
        />
      </div>

      <div className="mx-auto mt-8 max-w-3xl lg:max-w-none">
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

        <LandingSection id="timologisi" title={t("waitless.sectionPricing", lang)} wide>
          <p className="text-base leading-relaxed text-muted-foreground">
            {t("waitless.pricingIntro", lang)}
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm ring-1 ring-emerald-950/[0.04] dark:ring-white/[0.06]">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                {t("waitless.pricingOneTimeTitle", lang)}
              </p>
              <p className="mt-3 text-3xl font-bold tabular-nums tracking-tight text-foreground">
                {t("waitless.pricingOneTimeAmount", lang)}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t("waitless.pricingOneTimeDesc", lang)}
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm ring-1 ring-emerald-950/[0.04] dark:ring-white/[0.06]">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                {t("waitless.pricingMonthlyTitle", lang)}
              </p>
              <p className="mt-3 text-3xl font-bold tabular-nums tracking-tight text-foreground">
                {t("waitless.pricingMonthlyAmount", lang)}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t("waitless.pricingMonthlyDesc", lang)}
              </p>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-surface-muted/80 p-6 shadow-md ring-1 ring-primary/15 sm:col-span-2 lg:col-span-1">
              <span className="absolute right-4 top-4 rounded-full bg-accent px-2.5 py-0.5 text-xs font-bold text-accent-foreground">
                {t("waitless.pricingAnnualBadge", lang)}
              </span>
              <p className="pr-24 text-xs font-semibold uppercase tracking-widest text-primary">
                {t("waitless.pricingAnnualTitle", lang)}
              </p>
              <p className="mt-3 text-3xl font-bold tabular-nums tracking-tight text-foreground">
                {t("waitless.pricingAnnualAmount", lang)}
              </p>
              {pricingAnnualDesc ? (
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {pricingAnnualDesc}
                </p>
              ) : null}
            </div>
          </div>
        </LandingSection>

        <section
          aria-labelledby="cta-footer-heading"
          className={`${heroPanelClass} mt-16 px-6 py-12 text-center sm:px-10 sm:py-14`}
        >
          <h2
            id="cta-footer-heading"
            className="text-2xl font-semibold tracking-tight text-white sm:text-3xl"
          >
            {t("waitless.heroHeadline", lang)}
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-emerald-100/85">
            {t("waitless.heroSub", lang)}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={demoShopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-950 sm:w-auto"
            >
              {t("waitless.ctaDemo", lang)}
            </a>
            <a
              href="#pelatis"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/25 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200/60 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-950 sm:w-auto"
            >
              {t("waitless.ctaExplore", lang)}
            </a>
          </div>
        </section>

        <footer className="mt-12 border-t border-border pt-10 text-center">
          <p className="text-sm font-medium text-foreground">
            {t("waitless.footerTagline", lang)}
          </p>
        </footer>
      </div>
    </div>
  );
}
