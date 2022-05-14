import { FC, useReducer } from "react";

import { v4 as uuid } from "uuid";

import { Entry } from "interfaces";
import { EntriesContext, entriesReducer } from "./";

interface Props {
  children: React.ReactNode;
}

export interface EntriesState {
  entries: Entry[];
}

const EntriesInitialState: EntriesState = {
  entries: [
    {
      _id: uuid(),
      description: "PENDIENTE Tarea 1",
      status: "pending",
      crearedAt: Date.now(),
    },
    {
      _id: uuid(),
      description: "PENDIENTE Tarea 2",
      status: "pending",
      crearedAt: Date.now(),
    },
    {
      _id: uuid(),
      description: "PROGRESO Tarea 3",
      status: "in-progress",
      crearedAt: Date.now() - 100000,
    },
    {
      _id: uuid(),
      description: "TERMINADA Tarea 4",
      status: "finished",
      crearedAt: Date.now(),
    },
  ],
};

export const EntriesProvider: FC<Props> = ({ children }: Props) => {
  const [state, dispatch] = useReducer(entriesReducer, EntriesInitialState);

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
  }

  return (
    <EntriesContext.Provider value={{ ...state, addNewEntry, updateEntry }}>
      {children}
    </EntriesContext.Provider>
  );
};
