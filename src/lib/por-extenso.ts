const UNIDADES = [
  "zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove",
  "dez", "onze", "doze", "treze", "catorze", "quinze", "dezesseis", "dezessete",
  "dezoito", "dezenove",
];
const DEZENAS = [
  "", "", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa",
];

/**
 * Número por extenso, 0–99. Usado no título da seção História, que o handoff
 * exige derivar da data corrente em vez de deixar "trinta e cinco" fixo no texto.
 * ponytail: acima de 99 devolve o dígito — a instituição levaria um século pra chegar lá.
 */
export function porExtenso(n: number): string {
  if (n < 0 || !Number.isInteger(n)) return String(n);
  if (n < 20) return UNIDADES[n];
  if (n > 99) return String(n);
  const d = Math.floor(n / 10);
  const u = n % 10;
  return u === 0 ? DEZENAS[d] : `${DEZENAS[d]} e ${UNIDADES[u]}`;
}

export function capitalizar(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
