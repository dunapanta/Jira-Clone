import { List, Paper } from "@mui/material";
import React from "react";
import { EntryCard } from "./";

export const EntryList = () => {
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
          <EntryCard />
          <EntryCard />
          <EntryCard />
        </List>
      </Paper>
    </div>
  );
};
