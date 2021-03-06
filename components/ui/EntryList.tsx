import React, { FC, useContext, useMemo } from "react";
import { List, Paper } from "@mui/material";

import { EntryStatus } from "interfaces";
import { EntryCard } from "./";
import { EntriesContext } from "context/enntries";
import { UIContext } from "context/ui";

import styles from "./EntryList.module.css";

interface Props {
  status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {
  const { entries, updateEntry } = useContext(EntriesContext);
  const { isDragging, endDragging } = useContext(UIContext);

  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries]
  );

  const onDropEntry = (event: React.DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData("text");
    const entry = entries.find((entry) => entry._id === id);
    if (!entry) return;

    entry.status = status;
    updateEntry(entry);
    endDragging();
  };

  const allowDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div
      onDrop={onDropEntry}
      onDragOver={allowDrop}
      className={isDragging ? styles.dragging : ""}
    >
      <Paper
        variant="outlined"
        sx={{
          height: "calc(100vh - 160px)",
          overflow: "scroll",
          backgroundColor: "transparent",
          padding: "1px 5px",
          border: "1px solid #e0e0e0",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        <List sx={{ opacity: isDragging ? 0.2 : 1, transition: "all .3s" }}>
          {entriesByStatus.map((entry) => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};
