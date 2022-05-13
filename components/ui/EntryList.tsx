import React, { FC, useContext, useMemo } from "react";
import { List, Paper } from "@mui/material";

import { EntryStatus } from "interfaces";
import { EntryCard } from "./";
import { EntriesContext } from "context/enntries";

interface Props {
  status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {
  const { entries } = useContext(EntriesContext);

  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries]
  );

  return (
    <div>
      <Paper
        variant="outlined"
        sx={{
          height: "calc(100vh-160px)",
          overflow: "scroll",
          backgroundColor: "transparent",
          padding: "1px 5px",
          border: "1px solid #e0e0e0",
        }}
      >
        {/* Todo: drag o no */}
        <List sx={{ opacity: 1 }}>
          {entriesByStatus.map((entry) => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};
