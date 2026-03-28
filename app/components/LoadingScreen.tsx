"use client";

import { useEffect, useRef, useState } from "react";

export function LoadingScreen() {
  const [phase, setPhase] = useState<"hidden" | "visible" | "exiting">("hidden");
  const rafIdRef = useRef<number | null>(null);
  const exitTimerRef = useRef<number | null>(null);
  const hideTimerRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const alreadyShown = window.sessionStorage.getItem("orca_loading_shown");
    if (alreadyShown === "1") {
      return;
    }

    window.sessionStorage.setItem("orca_loading_shown", "1");
    rafIdRef.current = window.requestAnimationFrame(() => {
      setPhase("visible");
      exitTimerRef.current = window.setTimeout(() => setPhase("exiting"), 2200);
      hideTimerRef.current = window.setTimeout(() => setPhase("hidden"), 2800);
    });

    return () => {
      if (rafIdRef.current !== null) {
        window.cancelAnimationFrame(rafIdRef.current);
      }
      if (exitTimerRef.current !== null) {
        window.clearTimeout(exitTimerRef.current);
      }
      if (hideTimerRef.current !== null) {
        window.clearTimeout(hideTimerRef.current);
      }
    };
  }, []);

  if (phase === "hidden") return null;

  return (
    <div
      className={[
        "fixed inset-0 z-50 w-full overflow-hidden",
        "hero-cycle-bg",
        "transition-opacity duration-500",
        phase === "exiting" ? "opacity-0" : "opacity-100",
      ].join(" ")}
      aria-hidden="true"
    >
      <div className="mx-auto flex h-full w-full max-w-none flex-col justify-between px-4 py-8 sm:px-6 sm:py-12 lg:px-10">
        <h1 className="hero-cycle-title w-full pr-2 font-black uppercase leading-[0.82] tracking-[-0.06em]">
          <span className="block text-[clamp(4.5rem,14vw,11.5rem)]">
            Transportes
          </span>
          <span className="block text-[clamp(4.5rem,14vw,11.5rem)]">Orca</span>
        </h1>

        <p className="hero-cycle-subtitle max-w-3xl pb-2 text-[clamp(1.05rem,2.2vw,1.6rem)] leading-7 sm:pb-4">
          Bienvenido, ¿en qué podemos ayudarte con tu envío hoy?
        </p>
      </div>
    </div>
  );
}
