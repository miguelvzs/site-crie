// node --experimental-strip-types src/lib/por-extenso.test.mjs
import assert from "node:assert/strict";
import { porExtenso, capitalizar } from "./por-extenso.ts";

assert.equal(porExtenso(0), "zero");
assert.equal(porExtenso(9), "nove");
assert.equal(porExtenso(15), "quinze");
assert.equal(porExtenso(19), "dezenove");
assert.equal(porExtenso(20), "vinte");
assert.equal(porExtenso(30), "trinta");
assert.equal(porExtenso(34), "trinta e quatro");
assert.equal(porExtenso(35), "trinta e cinco");
assert.equal(porExtenso(99), "noventa e nove");
assert.equal(porExtenso(100), "100");
assert.equal(capitalizar("trinta e cinco"), "Trinta e cinco");

// o caso real: título da seção História
const anos = 2026 - 1991;
assert.equal(`${capitalizar(porExtenso(anos))} anos de reconhecimento`, "Trinta e cinco anos de reconhecimento");

console.log("por-extenso: ok");
