import { useReducer } from "react";
import { FC } from "react";
import { EntriesContext, entriesReducer } from "./";

interface Props {
  children: React.ReactNode;
}

export interface EntriesState {
  entries: [];
}

const EntriesInitialState: EntriesState = {
  entries: [],
};

export const EntriesProvider: FC<Props> = ({ children }: Props) => {
  const [state, dispatch] = useReducer(entriesReducer, EntriesInitialState);

  return (
    <EntriesContext.Provider value={{ ...state }}>
      {children}
    </EntriesContext.Provider>
  );
};
