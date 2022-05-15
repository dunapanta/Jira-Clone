import { FC, useEffect, useReducer } from "react";

import { Entry } from "interfaces";
import { EntriesContext, entriesReducer } from "./";
import { entriesApi } from "apis";

interface Props {
  children: React.ReactNode;
}

export interface EntriesState {
  entries: Entry[];
}

const EntriesInitialState: EntriesState = {
  entries: [],
};

export const EntriesProvider: FC<Props> = ({ children }: Props) => {
  const [state, dispatch] = useReducer(entriesReducer, EntriesInitialState);

  const refreshEntries = async () => {
    const { data: entrys } = await entriesApi.get<Entry[]>("/entries");
    dispatch({ type: "Entry - Refresh-Entry", payload: entrys });
  };

  useEffect(() => {
    refreshEntries();
  }, []);

  const addNewEntry = async (description: string) => {
    try {
      const { data: newEntry } = await entriesApi.post<Entry>("/entries", {
        description,
      });
      dispatch({ type: "Entry - Add-Entry", payload: newEntry });
    } catch (e) {
      console.log(e);
    }
  };

  const updateEntry = (entry: Entry) => {
    dispatch({ type: "Entry - Update-Entry", payload: entry });
  };

  return (
    <EntriesContext.Provider value={{ ...state, addNewEntry, updateEntry }}>
      {children}
    </EntriesContext.Provider>
  );
};
