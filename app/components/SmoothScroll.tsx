"use client";

import { useEffect, useRef } from "react";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let scroll: { destroy?: () => void; update?: () => void } | null = null;
    let cancelled = false;

    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll"))
        .default as unknown as new (options: unknown) => {
        destroy?: () => void;
        update?: () => void;
      };
      if (cancelled || !containerRef.current) return;

      scroll = new LocomotiveScroll({
        el: containerRef.current,
        smooth: true,
      } as unknown);

      window.setTimeout(() => {
        scroll?.update?.();
      }, 0);
    })();

    return () => {
      cancelled = true;
      scroll?.destroy?.();
    };
  }, []);

  return (
    <div ref={containerRef} data-scroll-container className="min-h-screen">
      {children}
    </div>
  );
}
