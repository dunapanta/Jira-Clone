import { createContext } from "react";

export interface ContextProps {
  sideMenuOpen: boolean;
}

export const UIContext = createContext({} as ContextProps);
