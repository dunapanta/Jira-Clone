import { Typography } from "@mui/material";
import { Layout } from "components/layouts";
import type { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <Layout title="Jira Clone">
      <Typography variant="h1" color="primary">
        Hola Mudo
      </Typography>
    </Layout>
  );
};

export default HomePage;
