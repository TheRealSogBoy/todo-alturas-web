import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlightWord?: string;
  description?: string;
  align?: "left" | "center";
  theme?: "dark" | "light";
}

export function SectionHeading({
  eyebrow,
  title,
  highlightWord,
  description,
  align = "left",
  theme = "dark",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isLight = theme === "light";

  // If highlightWord is provided, render it in yellow
  let renderedTitle: React.ReactNode = title;
  if (highlightWord && title.includes(highlightWord)) {
    const parts = title.split(highlightWord);
    renderedTitle = (
      <>
        {parts[0]}
        <span className="text-[#FFDE3B]">{highlightWord}</span>
        {parts.slice(1).join(highlightWord)}
      </>
    );
  }

  return (
    <div className={`space-y-3 ${isCenter ? "text-center mx-auto max-w-3xl" : "max-w-2xl"}`}>
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase font-mono ${
            isLight ? "text-zinc-600" : "text-[#FFDE3B]"
          }`}
        >
          <span className="w-2 h-0.5 bg-[#FFDE3B] inline-block"></span>
          {eyebrow}
        </div>
      )}

      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight leading-[1.08] ${
          isLight ? "text-zinc-900" : "text-white"
        }`}
        style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
      >
        {renderedTitle}
      </h2>

      {description && (
        <p
          className={`text-sm sm:text-base leading-relaxed ${
            isLight ? "text-zinc-600" : "text-zinc-400"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
