import type { ReactNode } from "react";

export function LandingSection({
  id,
  title,
  children,
  wide,
}: {
  id: string;
  title: string;
  children: ReactNode;
  /** Wider content column (e.g. pricing grids). */
  wide?: boolean;
}) {
  const contentMax = wide ? "max-w-6xl" : "max-w-3xl";
  return (
    <section
      id={id}
      className="scroll-mt-28 border-t border-border py-16 first:border-t-0 first:pt-0 sm:py-20"
    >
      <h2 className="max-w-3xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
      <div className={`mt-6 ${contentMax}`}>{children}</div>
    </section>
  );
}
