type SectionHeadingProps = {
  label: string;
  title: string;
  align?: "left" | "center";
};

export function SectionHeading({
  label,
  title,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <div
        className={`mb-4 flex items-center gap-3 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-10 bg-gold" />
        <span className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
          {label}
        </span>
      </div>
      <h2 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
    </div>
  );
}
