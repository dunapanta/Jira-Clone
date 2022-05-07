import { FC } from "react";
import { Box } from "@mui/material";
import Head from "next/head";
import { Navbar } from "components/ui";

interface Props {
  title?: string;
  children: React.ReactNode;
}
export const Layout: FC<Props> = ({
  title = "Jira Clone",
  children,
}: Props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>

      {/* Navbar */}
      <Navbar />
      {/* SideBar */}

      <Box sx={{ padding: "10px 20px" }}>{children}</Box>
    </Box>
  );
};
