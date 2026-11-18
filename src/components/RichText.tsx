import katex from "katex";
import { useMemo } from "react";

interface RichTextProps {
  content: string | null | undefined;
  className?: string;
}

// Renders our question/explanation text: a light markdown subset (bold, inline
// code, bullet lists, paragraphs, raw <figure>/<img> passthrough) plus KaTeX
// math for $$...$$ and $...$ spans. Not a general-purpose markdown renderer —
// just enough for the data this site ships with.
function renderRich(content: string): string {
  const mathSpans: string[] = [];
  const withTokens = content.replace(/\$\$(.+?)\$\$|\$(.+?)\$/gs, (_match, display, inline) => {
    const math = display ?? inline;
    let html: string;
    try {
      html = katex.renderToString(math, { displayMode: false, throwOnError: false });
    } catch {
      html = math;
    }
    mathSpans.push(html);
    return `@@MATH${mathSpans.length - 1}@@`;
  });

  const paragraphs = withTokens
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block) => {
      // raw HTML figure/img blocks pass through untouched
      if (/^<figure[\s>]/.test(block) || /^<img[\s>]/.test(block)) {
        return block;
      }

      const lines = block.split("\n").map((l) => l.trim());
      const isList = lines.every((l) => l === "" || /^[-*]\s+/.test(l));
      if (isList) {
        const items = lines
          .filter(Boolean)
          .map((l) => `<li>${inlineMd(l.replace(/^[-*]\s+/, ""))}</li>`)
          .join("");
        return `<ul>${items}</ul>`;
      }

      return `<p>${inlineMd(block.replace(/\n/g, "<br/>"))}</p>`;
    })
    .join("");

  return paragraphs.replace(/@@MATH(\d+)@@/g, (_m, i) => mathSpans[Number(i)] ?? "");
}

function inlineMd(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/`([^`]+)`/g, "<code>$1</code>");
}

export function RichText({ content, className }: RichTextProps) {
  const html = useMemo(() => (content ? renderRich(content) : ""), [content]);
  if (!content) return null;
  return (
    <div className={`rich-text ${className ?? ""}`} dangerouslySetInnerHTML={{ __html: html }} />
  );
}

// Inline-only variant for short strings (question stems, option text) where
// we don't want paragraph/list wrapping.
export function Latex({ content, className }: RichTextProps) {
  const html = useMemo(() => {
    if (!content) return "";
    const withTokens = content.replace(/\$\$(.+?)\$\$|\$(.+?)\$/gs, (_m, display, inline) => {
      const math = display ?? inline;
      try {
        return katex.renderToString(math, { displayMode: false, throwOnError: false });
      } catch {
        return math;
      }
    });
    return inlineMd(withTokens);
  }, [content]);
  return <span className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}
