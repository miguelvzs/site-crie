// node --experimental-strip-types src/components/a11y/a11y-prefs.test.mjs
import assert from "node:assert/strict";

// Stubs mínimos: o módulo toca document/localStorage ao ser importado pelos setters.
const store = new Map();
globalThis.localStorage = {
  getItem: (k) => (store.has(k) ? store.get(k) : null),
  setItem: (k, v) => store.set(k, String(v)),
};
const classes = new Set();
globalThis.document = {
  documentElement: {
    style: {},
    classList: { toggle: (c, on) => (on ? classes.add(c) : classes.delete(c)) },
  },
};

const { FONT_STEPS, FONT_KEY, getStep, getContrast, setStep, setContrast, PREFS_SCRIPT } =
  await import("./a11y-prefs.ts");

// padrão quando não há nada salvo
assert.equal(getStep(), 0);
assert.equal(getContrast(), false);

// setStep aplica no DOM e persiste
setStep(2);
assert.equal(getStep(), 2);
assert.equal(document.documentElement.style.fontSize, `${FONT_STEPS[2]}%`);

// clamp nos dois extremos
setStep(99);
assert.equal(getStep(), FONT_STEPS.length - 1);
setStep(-5);
assert.equal(getStep(), 0);

// valor corrompido no localStorage não derruba a leitura
store.set(FONT_KEY, "banana");
assert.equal(getStep(), 0);
store.set(FONT_KEY, "3.5");
assert.equal(getStep(), 0);

// contraste
setContrast(true);
assert.equal(getContrast(), true);
assert.ok(classes.has("contrast-high"));
setContrast(false);
assert.equal(getContrast(), false);
assert.ok(!classes.has("contrast-high"));

// o script de pré-hidratação usa os mesmos degraus que o módulo
assert.ok(PREFS_SCRIPT.includes(`[${FONT_STEPS.join(",")}]`));
assert.ok(PREFS_SCRIPT.includes(FONT_KEY));

console.log("a11y-prefs: ok");
