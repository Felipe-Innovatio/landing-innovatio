"use client";

import { useEffect, useRef, useCallback } from "react";

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

const SCRIPT_ID = "recaptcha-v3-script";

export function useRecaptcha(siteKey?: string) {
  const loaded = useRef(false);

  useEffect(() => {
    if (!siteKey || loaded.current) return;
    if (document.getElementById(SCRIPT_ID)) {
      loaded.current = true;
      return;
    }

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      loaded.current = true;
    };
    document.head.appendChild(script);

    return () => {
      // No removemos el script para evitar recargas innecesarias
    };
  }, [siteKey]);

  const execute = useCallback(
    async (action: string): Promise<string> => {
      if (!siteKey) return "";

      return new Promise((resolve) => {
        const attempt = () => {
          if (window.grecaptcha) {
            window.grecaptcha.ready(() => {
              window.grecaptcha!
                .execute(siteKey, { action })
                .then((token) => resolve(token))
                .catch(() => resolve(""));
            });
          } else {
            // Esperamos a que el script cargue
            setTimeout(attempt, 500);
          }
        };
        attempt();
      });
    },
    [siteKey]
  );

  return { execute };
}
