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
        className={`mb-3 flex items-center gap-3 sm:mb-4 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-8 bg-gold sm:w-10" />
        <span className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-gold sm:text-xs">
          {label}
        </span>
      </div>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
    </div>
  );
}
