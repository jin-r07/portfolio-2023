"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface ContextProps {
  handleLinkClick: (path: string) => void;
  currentPath: string;
  cursorVariant: string;
  textEnter: () => void;
  textLeave: () => void;
}

const PageContext = createContext<ContextProps | undefined>(undefined);

export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const pathname = usePathname();

  const [currentPath, setCurrentPath] = useState("/home");

  const handleLinkClick = (path: string) => {
    setCurrentPath(path);
  };

  useEffect(() => {
    if (pathname !== currentPath) {
      setCurrentPath(pathname === "/" ? "/home" : pathname);
    }
  }, [pathname, currentPath]);

  const [cursorVariant, setCursorVariant] = useState("default");

  const textEnter = () => setCursorVariant("text");

  const textLeave = () => setCursorVariant("default");

  return (
    <PageContext.Provider value={{ handleLinkClick, currentPath, cursorVariant, textEnter, textLeave }}>
      {children}
    </PageContext.Provider>
  );
};

export const useContextPage = () => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error('(context-api) page.tsx must be used within a ContextProvider');
  }
  return context;
}