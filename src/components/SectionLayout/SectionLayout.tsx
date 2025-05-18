import React from "react";
import Box from "@mui/material/Box";
import styles from "./SectionLayout.styles";

export interface Props {
  children: React.ReactNode;
}

export const SectionLayout = ({ children }: Props) => {
  return (
    <Box component="section" sx={styles.sectionLayout}>
      {children}
    </Box>
  );
};

export default SectionLayout;
