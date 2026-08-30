"use client";

import { useEffect, useState } from "react";

const FONT_STEPS = [100, 112, 125, 137];
const FONT_KEY = "crie-font-step";
const CONTRAST_KEY = "crie-high-contrast";

function readInitialStep() {
  if (typeof window === "undefined") return 0;
  return Number(localStorage.getItem(FONT_KEY) ?? 0);
}

function readInitialContrast() {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(CONTRAST_KEY) === "true";
}

export function A11yToolbar() {
  const [step, setStep] = useState(readInitialStep);
  const [highContrast, setHighContrast] = useState(readInitialContrast);

  useEffect(() => {
    document.documentElement.style.fontSize = `${FONT_STEPS[step]}%`;
  }, [step]);

  useEffect(() => {
    document.documentElement.classList.toggle("contrast-high", highContrast);
  }, [highContrast]);

  function applyStep(next: number) {
    const clamped = Math.min(Math.max(next, 0), FONT_STEPS.length - 1);
    setStep(clamped);
    document.documentElement.style.fontSize = `${FONT_STEPS[clamped]}%`;
    localStorage.setItem(FONT_KEY, String(clamped));
  }

  function toggleContrast() {
    const next = !highContrast;
    setHighContrast(next);
    document.documentElement.classList.toggle("contrast-high", next);
    localStorage.setItem(CONTRAST_KEY, String(next));
  }

  const btnClass =
    "rounded-lg border border-black/20 px-2 py-1 text-sm font-semibold hover:bg-black/5 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-brand-purple";

  return (
    <div className="flex items-center gap-1" role="group" aria-label="Controles de acessibilidade">
      <button type="button" className={btnClass} onClick={() => applyStep(step - 1)} aria-label="Diminuir tamanho da fonte">
        A-
      </button>
      <button type="button" className={btnClass} onClick={() => applyStep(step + 1)} aria-label="Aumentar tamanho da fonte">
        A+
      </button>
      <button
        type="button"
        className={btnClass}
        onClick={toggleContrast}
        aria-pressed={highContrast}
        suppressHydrationWarning
        aria-label="Alternar alto contraste"
      >
        Contraste
      </button>
    </div>
  );
}
