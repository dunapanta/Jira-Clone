import React, { FC } from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { Entry } from "interfaces";

interface Props {
  entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {
  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log("drag start", event);
    event.dataTransfer.setData("text", entry._id);
  };

  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {};

  return (
    <Card
      variant="outlined"
      draggable
      sx={{ marginBottom: 2 }}
      onDragStart={onDragStart}
      onDragEnd={onDragOver}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: "pre-line" }}>
            {entry.description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{ display: "flex", justifyContent: "end", paddingRight: "2" }}
        >
          <Typography variant="body2">hace 30 minutos</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
