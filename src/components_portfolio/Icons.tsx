import type { SVGProps } from "react";

const base = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const IconTooth = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M7 2c-2.5 0-4 2-4 5 0 2 1 3 1.5 5S5 18 6 20s2.5 2 3-.5.5-5 1.5-5S12 17 12.5 19.5 14 22 15 20s.5-5 1.5-7 1.5-3 1.5-5c0-3-1.5-5-4-5-1.8 0-2.5 1-4 1S8.8 2 7 2Z" />
  </svg>
);

export const IconScalpel = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M14 3 21 10l-4 1-8 8-5-2 9-9 1-5Z" />
    <path d="m4 17 3 3" />
  </svg>
);

export const IconJaw = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M4 8c0-3 2-5 8-5s8 2 8 5v2c0 3-2 5-2 8 0 2-2 3-4 3H10c-2 0-4-1-4-3 0-3-2-5-2-8V8Z" />
    <path d="M8 12h1M15 12h1M11 15h2" />
  </svg>
);

export const IconSmile = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
    <circle cx="9" cy="10" r=".8" fill="currentColor" />
    <circle cx="15" cy="10" r=".8" fill="currentColor" />
  </svg>
);

export const IconStethoscope = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M6 3v6a5 5 0 0 0 10 0V3" />
    <path d="M11 14v3a4 4 0 0 0 8 0v-2" />
    <circle cx="19" cy="13" r="2" />
    <path d="M6 3h0M16 3h0" />
  </svg>
);

export const IconBone = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M6 6c0-2 1-3 3-3s3 1 3 3c0 1 1 2 2 2 2 0 3 1 3 3s-1 3-2 3-2 1-2 2c0 2-1 3-3 3s-3-1-3-3c0-1-1-2-2-2-2 0-3-1-3-3s1-3 2-3 2-1 2-2Z" />
  </svg>
);

export const IconHeart = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M12 21s-7-4.5-9-9.5C1.5 7 5 3 8.5 5.5c1.2.8 2.3 2 3.5 3 1.2-1 2.3-2.2 3.5-3C19 3 22.5 7 21 11.5 19 16.5 12 21 12 21Z" />
  </svg>
);

export const IconAward = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="9" r="6" />
    <path d="M8.5 14 7 22l5-3 5 3-1.5-8" />
  </svg>
);

export const IconCaduceus = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p} strokeWidth={1.2}>
    <path d="M12 3v18" />
    <path d="M9 4c3 2 3 4 0 6s-3 4 0 6 3 4 0 6" />
    <path d="M15 4c-3 2-3 4 0 6s3 4 0 6-3 4 0 6" />
    <path d="M6 4h12" />
  </svg>
);

export const IconPin = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M12 22s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const IconMail = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const IconPhone = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M4 5c0-1 1-2 2-2h2l2 5-2 1c1 3 3 5 6 6l1-2 5 2v2c0 1-1 2-2 2C10 19 5 14 4 5Z" />
  </svg>
);

export const IconLinkedIn = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
  </svg>
);

export const IconArrow = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const IconMenu = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const IconSparkle = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" />
  </svg>
);
