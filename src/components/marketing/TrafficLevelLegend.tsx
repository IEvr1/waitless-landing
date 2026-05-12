import type { Lang } from "@/lib/types";
import {
  TRAFFIC_LEVELS,
  trafficFillClass,
  trafficLabelKey,
  trafficWaitKey,
} from "@/lib/traffic";
import { t } from "@/lib/i18n";

export function TrafficLevelLegend({
  lang,
  caption,
}: {
  lang: Lang;
  caption: string;
}) {
  return (
    <div className="mt-6 rounded-2xl border border-primary/20 bg-surface-muted/90 p-4 ring-1 ring-primary/10 dark:border-primary/30 dark:bg-surface-muted/50">
      <p className="text-xs font-bold uppercase tracking-widest text-primary">
        {caption}
      </p>
      <ul className="mt-3 space-y-2">
        {TRAFFIC_LEVELS.map((level) => (
          <li
            key={level}
            className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-foreground"
          >
            <span
              className={`size-3.5 shrink-0 rounded-full ring-2 ring-black/5 dark:ring-white/10 ${trafficFillClass(level)}`}
              aria-hidden
            />
            <span className="font-semibold">{t(trafficLabelKey(level), lang)}</span>
            <span className="text-muted-foreground">
              {t(trafficWaitKey(level), lang)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
