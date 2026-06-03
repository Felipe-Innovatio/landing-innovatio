"use client";

import {
  GoogleReCaptchaProvider,
  GoogleReCaptchaContext,
} from "react-google-recaptcha-v3";
import { useMemo } from "react";

export default function RecaptchaProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const dummyValue = useMemo(
    () => ({
      executeRecaptcha: undefined,
    }),
    []
  );

  if (!siteKey) {
    return (
      <GoogleReCaptchaContext.Provider value={dummyValue}>
        {children}
      </GoogleReCaptchaContext.Provider>
    );
  }

  return (
    <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
      {children}
    </GoogleReCaptchaProvider>
  );
}
