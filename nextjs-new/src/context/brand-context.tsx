"use client";

import React, { createContext, useContext } from "react";

interface BrandContextType {
  appName: string;
}

const BrandContext = createContext<BrandContextType>({ appName: "Devlix" });

export const useBrand = () => useContext(BrandContext);

export const BrandProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <BrandContext.Provider value={{ appName: "Devlix" }}>
      {children}
    </BrandContext.Provider>
  );
};
