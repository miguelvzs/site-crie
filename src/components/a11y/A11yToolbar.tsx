"use client";

import { useSyncExternalStore } from "react";
import {
  FONT_STEPS,
  subscribe,
  getStep,
  getContrast,
  getStepServer,
  getContrastServer,
  setStep,
  setContrast,
} from "./a11y-prefs";

export function A11yToolbar() {
  // O PREFS_SCRIPT já aplicou a preferência no DOM antes do paint. Aqui só
  // espelhamos o valor, com snapshot de servidor igual ao padrão para não
  // haver divergência de hidratação.
  const step = useSyncExternalStore(subscribe, getStep, getStepServer);
  const highContrast = useSyncExternalStore(subscribe, getContrast, getContrastServer);

  const btnClass =
    "rounded-[2px] border border-white/50 px-2 py-1 font-mono text-xs font-medium text-white transition-colors duration-150 hover:bg-white hover:text-magenta disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-white";

  return (
    <div className="flex items-center gap-1" role="group" aria-label="Controles de acessibilidade">
      <button
        type="button"
        className={btnClass}
        onClick={() => setStep(step - 1)}
        disabled={step === 0}
        aria-label="Diminuir tamanho da fonte"
      >
        A-
      </button>
      <button
        type="button"
        className={btnClass}
        onClick={() => setStep(step + 1)}
        disabled={step === FONT_STEPS.length - 1}
        aria-label="Aumentar tamanho da fonte"
      >
        A+
      </button>
      <button
        type="button"
        className={btnClass}
        onClick={() => setStep(0)}
        disabled={step === 0}
        aria-label="Restaurar tamanho padrão da fonte"
      >
        A
      </button>
      <button
        type="button"
        className={btnClass}
        onClick={() => setContrast(!highContrast)}
        aria-pressed={highContrast}
        aria-label="Alternar alto contraste"
      >
        Contraste
      </button>
    </div>
  );
}
