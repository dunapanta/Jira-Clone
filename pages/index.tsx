import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { Layout } from "components/layouts";
import { EntryList } from "components/ui";
import type { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <Layout title="Jira Clone">
      <Grid spacing={2} container>
        <Grid item xs={12} sm={4}>
          <Card variant="outlined" sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Pendientes" />
            <EntryList status="pending" />
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card variant="outlined" sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="En Progreso" />
            <EntryList status="in-progress" />
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card variant="outlined" sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Completadas" />
            <EntryList status="finished" />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default HomePage;
