/** Fonte da verdade das preferências de a11y. Compartilhado entre o script
    de pré-hidratação (layout) e a A11yToolbar. */
export const FONT_STEPS = [100, 112, 125, 137];
export const FONT_KEY = "crie-font-step";
export const CONTRAST_KEY = "crie-high-contrast";

/** Roda no <head>, antes do primeiro paint: aplica a preferência salva sem
    piscar. Serializado com String(), então não pode fechar sobre nada. */
export const PREFS_SCRIPT = `(function(){try{
var steps=[100,112,125,137];
var s=Number(localStorage.getItem("crie-font-step"))||0;
if(s>0&&s<steps.length)document.documentElement.style.fontSize=steps[s]+"%";
if(localStorage.getItem("crie-high-contrast")==="true")document.documentElement.classList.add("contrast-high");
}catch(e){}})();`;

/* --- store externo, lido via useSyncExternalStore ---
   O DOM é ajustado pelo PREFS_SCRIPT antes do paint; o React só precisa
   espelhar o valor para o aria-pressed e para os limites dos botões. */

const listeners = new Set<() => void>();

export function subscribe(onChange: () => void) {
  listeners.add(onChange);
  // outra aba mudou a preferência
  window.addEventListener("storage", onChange);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onChange);
  };
}

function read(key: string) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

export function getStep() {
  const n = Number(read(FONT_KEY));
  return Number.isInteger(n) && n >= 0 && n < FONT_STEPS.length ? n : 0;
}

export function getContrast() {
  return read(CONTRAST_KEY) === "true";
}

/** Snapshot do servidor e da primeira renderização no cliente: o padrão.
    Evita divergência de hidratação — o valor real chega logo depois. */
export const getStepServer = () => 0;
export const getContrastServer = () => false;

export function setStep(next: number) {
  const clamped = Math.min(Math.max(next, 0), FONT_STEPS.length - 1);
  document.documentElement.style.fontSize = `${FONT_STEPS[clamped]}%`;
  try {
    localStorage.setItem(FONT_KEY, String(clamped));
  } catch {}
  listeners.forEach((fn) => fn());
}

export function setContrast(next: boolean) {
  document.documentElement.classList.toggle("contrast-high", next);
  try {
    localStorage.setItem(CONTRAST_KEY, String(next));
  } catch {}
  listeners.forEach((fn) => fn());
}
