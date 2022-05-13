import React from "react";
import { Box, Button, TextField } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import AddIcon from "@mui/icons-material/Add";

export const NewEntry = () => {
  return (
    <Box sx={{ marginBottom: 2, padding: 2 }}>
      <Button variant="contained" fullWidth startIcon={<AddIcon />}>
        Nueva Tarea
      </Button>
      <TextField
        fullWidth
        sx={{ marginTop: 2, marginBottom: 1 }}
        placeholder="Nueva Tarea"
        autoFocus
        multiline
        label="Nueva entrada"
        helperText="Ingrese una nueva tarea"
      />
      <Box display="flex" justifyContent="space-evenly">
        <Button variant="outlined" endIcon={<SaveIcon />}>
          Guardar
        </Button>
        <Button color="secondary" variant="outlined" endIcon={<SaveIcon />}>
          Cancelar
        </Button>
      </Box>
    </Box>
  );
};
