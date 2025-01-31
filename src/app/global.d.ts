// global.d.ts
import * as p5Global from 'p5';
import React from 'react';

declare global {
  const p5: typeof p5Global;
}

// Extend the JSX.IntrinsicElements interface once
declare namespace JSX {
  interface IntrinsicElements {
    "model-viewer": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      src?: string;
      alt?: string;
      ar?: boolean | "true" | "false";
      "auto-rotate"?: boolean | "true" | "false";
      "camera-controls"?: boolean | "true" | "false";
    };
  }
}
