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
      description: "Tarea 1",
      status: "pending",
      crearedAt: Date.now(),
    },
    {
      _id: uuid(),
      description: "Tarea 2",
      status: "pending",
      crearedAt: Date.now(),
    },
    {
      _id: uuid(),
      description: "Tarea 3",
      status: "in-progress",
      crearedAt: Date.now() - 100000,
    },
    {
      _id: uuid(),
      description: "Tarea 4",
      status: "finished",
      crearedAt: Date.now(),
    },
  ],
};

export const EntriesProvider: FC<Props> = ({ children }: Props) => {
  const [state, dispatch] = useReducer(entriesReducer, EntriesInitialState);

  return (
    <EntriesContext.Provider value={{ ...state }}>
      {children}
    </EntriesContext.Provider>
  );
};
