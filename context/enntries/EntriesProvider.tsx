import { FC, useEffect, useReducer } from "react";

import { v4 as uuid } from "uuid";

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

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuid(),
      description,
      status: "pending",
      crearedAt: Date.now(),
    };

    dispatch({ type: "Entry - Add-Entry", payload: newEntry });
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
