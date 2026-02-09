// src/calendly.d.ts
interface Calendly {
  initPopupWidget: (options: { url: string }) => void;
  // you can add more methods later if needed
}

declare global {
  interface Window {
    Calendly?: Calendly;
  }
}

export {};
