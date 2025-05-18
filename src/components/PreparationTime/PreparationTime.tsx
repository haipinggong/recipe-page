import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import { useTheme } from "@mui/material/styles";

import LabeledDescription from "../LabeledDescription/LabeledDescription";
import Bullet from "../Bullet/Bullet";

import styles from "./PreparationTime.styles";

import recipe from "../../data/recipe.json";

export const PreparationTime = () => {
  const theme = useTheme();
  const [preparationTime] = recipe.preparationTime;

  return (
    <Box component="section" sx={styles.main}>
      <Typography variant="h3" component="h2" sx={styles.title}>
        Preparation Time
      </Typography>
      <List disablePadding>
        <ListItem disablePadding sx={styles.descriptionItem}>
          <Bullet color={theme.palette.rose.main} />
          <LabeledDescription {...preparationTime} />
        </ListItem>
      </List>
    </Box>
  );
};

export default PreparationTime;
