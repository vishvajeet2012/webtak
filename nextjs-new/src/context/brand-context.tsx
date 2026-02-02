"use client";

import React, { createContext, useContext } from "react";

interface BrandContextType {
  appName: string;
}

const BrandContext = createContext<BrandContextType>({ appName: "CrosDev" });

export const useBrand = () => useContext(BrandContext);

export const BrandProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <BrandContext.Provider value={{ appName: "CrosDev" }}>
      {children}
    </BrandContext.Provider>
  );
};
