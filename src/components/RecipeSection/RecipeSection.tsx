import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import styles from "./RecipeSection.styles";

export interface Props {
  title: string;
  content: React.ReactNode;
}

export const RecipeSection = ({ title, content }: Props) => {
  return (
    <Box component="section" sx={styles.main}>
      <Typography variant="h2">{title}</Typography>
      <Typography>{content}</Typography>
    </Box>
  );
};

export default RecipeSection;
