"use client";

import Script from "next/script";
import type { HTMLAttributes } from "react";

declare global {
  interface Window {
    VLibras?: { Widget: new (url: string) => unknown };
  }
}

/** Atributos exigidos pelo script oficial VLibras (seletores `[vw]`, `[vw-access-button]` etc), não são padrão HTML */
const vwRoot = { vw: "true" } as unknown as HTMLAttributes<HTMLDivElement>;
const vwAccessButton = { "vw-access-button": "true" } as unknown as HTMLAttributes<HTMLDivElement>;
const vwPluginWrapper = { "vw-plugin-wrapper": "true" } as unknown as HTMLAttributes<HTMLDivElement>;

export function VLibrasWidget() {
  return (
    <>
      <div {...vwRoot} className="enabled">
        <div {...vwAccessButton} className="active" />
        <div {...vwPluginWrapper}>
          <div className="vw-plugin-top-wrapper" />
        </div>
      </div>
      <Script
        src="https://vlibras.gov.br/app/vlibras-plugin.js"
        strategy="afterInteractive"
        onLoad={() => {
          new window.VLibras!.Widget("https://vlibras.gov.br/app");
        }}
      />
    </>
  );
}
