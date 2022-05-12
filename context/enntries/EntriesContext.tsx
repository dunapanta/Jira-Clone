import { createContext } from "react";

export interface ContextProps {
  entries: [];
}

export const EntriesContext = createContext({} as ContextProps);
