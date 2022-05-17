import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  TextField,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";

import { Layout } from "components/layouts";

export const EntryPage = () => {
  return (
    <Layout title="">
      <Grid container justifyContent="center" sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardHeader title="Entrada:" subheader={`Creada hace .. minutos`} />
            <CardContent>
              <TextField
                sx={{ marginTop: 2, marginBottom: 1 }}
                fullWidth
                placeholder="Nueva Tarea"
                autoFocus
                multiline
                label="Tarea"
              />
            </CardContent>
            <CardActions>
              <Button variant="outlined" fullWidth endIcon={<SaveIcon />}>
                Guardar
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};
export default EntryPage;
