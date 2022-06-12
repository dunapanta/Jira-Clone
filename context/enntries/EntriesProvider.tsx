import { FC, useEffect, useReducer } from "react";
import { useSnackbar } from "notistack";

import { Entry } from "interfaces";
import { EntriesContext, entriesReducer } from "./";
import { entriesApi } from "apis";
import { useRouter } from "next/router";

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
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

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

  const updateEntry = async (entry: Entry, isEditing = false) => {
    try {
      const { data: newEntry } = await entriesApi.put<Entry>(
        `/entries/${entry._id}`,
        { description: entry.description, status: entry.status }
      );
      dispatch({ type: "Entry - Update-Entry", payload: newEntry });
      enqueueSnackbar("Entry updated successfully", {
        variant: "success",
        autoHideDuration: 2000,
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      });
      if (isEditing) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteEntry = async (entry: Entry) => {
    try {
      await entriesApi.delete(`/entries/${entry._id}`);
      dispatch({ type: "Entry - Delete-Entry", payload: entry });
      enqueueSnackbar("Entry deleted successfully", {
        variant: "success",
        autoHideDuration: 2000,
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <EntriesContext.Provider
      value={{ ...state, addNewEntry, updateEntry, deleteEntry }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
