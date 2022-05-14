import React, { FC, useContext } from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { Entry } from "interfaces";
import { UIContext } from "context/ui";

interface Props {
  entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {
  const { startDragging, endDragging } = useContext(UIContext);
  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("text", entry._id);
    startDragging();
  };

  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    endDragging();
  };

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
