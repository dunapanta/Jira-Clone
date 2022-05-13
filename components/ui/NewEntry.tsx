import React, { useContext, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import AddIcon from "@mui/icons-material/Add";
import { EntriesContext } from "context/enntries";

export const NewEntry = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [hasTouched, setHasTouched] = useState(false);
  const { addNewEntry } = useContext(EntriesContext);

  const onChangeTextHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onSaveHandler = () => {
    if (inputValue.length === 0) return;
    addNewEntry(inputValue);
    setIsAdding(false);
    setHasTouched(false);
    setInputValue("");
  };

  return (
    <Box sx={{ marginBottom: 2, padding: 2 }}>
      {isAdding ? (
        <>
          {" "}
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            placeholder="Nueva Tarea"
            autoFocus
            multiline
            label="Nueva entrada"
            helperText={
              inputValue.length <= 0 && hasTouched && "Ingrese un valor"
            }
            value={inputValue}
            error={inputValue.length <= 0 && hasTouched}
            onChange={onChangeTextHandler}
            onBlur={() => setHasTouched(true)}
          />
          <Box display="flex" justifyContent="space-evenly">
            <Button
              onClick={onSaveHandler}
              variant="outlined"
              endIcon={<SaveIcon />}
            >
              Guardar
            </Button>
            <Button
              color="secondary"
              variant="outlined"
              onClick={() => setIsAdding(false)}
              endIcon={<SaveIcon />}
            >
              Cancelar
            </Button>
          </Box>
        </>
      ) : (
        <Button
          variant="contained"
          onClick={() => setIsAdding(true)}
          fullWidth
          startIcon={<AddIcon />}
        >
          Nueva Tarea
        </Button>
      )}
    </Box>
  );
};
