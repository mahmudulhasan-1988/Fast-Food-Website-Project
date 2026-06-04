"use client";

import { HeroUIProvider } from "@heroui/react";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

export function Providers({ children }) {
  return (
   
      <SmoothScrollProvider>
        {children}
      </SmoothScrollProvider>
    
  );
}