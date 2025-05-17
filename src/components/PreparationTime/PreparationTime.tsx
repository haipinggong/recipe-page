import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import styles from "./PreparationTime.styles";

export interface Props {
  content: React.ReactNode;
}

export const PreparationTime = ({ content }: Props) => {
  return (
    <Box component="section" sx={styles.main}>
      <Typography variant="h3" component="h2" sx={styles.title}>
        Preparation Time
      </Typography>
      <Typography>{content}</Typography>
    </Box>
  );
};

export default PreparationTime;
