import type { Lang } from "@/lib/types";
import { t } from "@/lib/i18n";

function MetricCell({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div
      data-hero-reveal
      className="rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 shadow-inner shadow-black/20 backdrop-blur-sm"
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-200/85">
        {label}
      </p>
      <p className="mt-1.5 text-xl font-semibold tabular-nums tracking-tight text-white sm:text-2xl">
        {value}
      </p>
    </div>
  );
}

export function LandingMetricsStrip({ lang }: { lang: Lang }) {
  const items: { labelKey: string; valueKey: string }[] = [
    { labelKey: "waitless.metric1Label", valueKey: "waitless.metric1Value" },
    { labelKey: "waitless.metric2Label", valueKey: "waitless.metric2Value" },
    { labelKey: "waitless.metric3Label", valueKey: "waitless.metric3Value" },
    { labelKey: "waitless.metric4Label", valueKey: "waitless.metric4Value" },
  ];

  return (
    <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-4 sm:gap-4">
      {items.map(({ labelKey, valueKey }) => (
        <MetricCell
          key={labelKey}
          label={t(labelKey, lang)}
          value={t(valueKey, lang)}
        />
      ))}
    </div>
  );
}
