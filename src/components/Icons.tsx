import type { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

function base(size: number | string, props: IconProps) {
  return {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    ...props,
  };
}

export function CheckCircle({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base(size, props)}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

export function CheckCircle2({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base(size, props)}>
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function Circle({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base(size, props)}>
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

export function X({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base(size, props)}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export function XCircle({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base(size, props)}>
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </svg>
  );
}

export function Clock({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base(size, props)}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export function Flag({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base(size, props)}>
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" y1="22" x2="4" y2="15" />
    </svg>
  );
}

export function Lock({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base(size, props)}>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

export function Sparkles({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base(size, props)} fill="currentColor" stroke="none">
      <path d="M12 2l1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8L12 2z" />
      <path d="M19 15l.9 2.6L22.5 18.5l-2.6.9L19 22l-.9-2.6-2.6-.9 2.6-.9L19 15z" />
    </svg>
  );
}

export function FlagFilled({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base(size, props)} fill="currentColor" stroke="none">
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <rect x="3" y="15" width="1.5" height="7" rx="0.75" />
    </svg>
  );
}
