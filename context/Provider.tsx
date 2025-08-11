// app/Providers.tsx
"use client";

import { ReactNode } from "react";
import { DarkModeProvider } from "../context/DarkModeContext";

export function Provider({ children }: { children: ReactNode }) {
  return <DarkModeProvider>{children}</DarkModeProvider>;
}
