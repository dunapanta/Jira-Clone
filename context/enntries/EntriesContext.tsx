import { Entry } from "interfaces";
import { createContext } from "react";

export interface ContextProps {
  entries: Entry[];
  addNewEntry: (description: string) => void;
}

export const EntriesContext = createContext({} as ContextProps);
