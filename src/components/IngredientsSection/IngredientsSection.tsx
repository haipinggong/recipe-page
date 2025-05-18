import { Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import styles from "./IngredientsSection.styles";
import { useTheme } from "@mui/material/styles";

import { SectionLayout } from "../SectionLayout/SectionLayout";
import { Bullet } from "../Bullet/Bullet";
import recipe from "../../data/recipe.json";

export const IngredientsSection = () => {
  const theme = useTheme();
  return (
    <SectionLayout>
      <Typography variant="h2">Ingredients</Typography>
      <List disablePadding sx={styles.descriptionItemList}>
        {recipe.ingredients.map((item) => (
          <ListItem disablePadding sx={styles.descriptionItem}>
            <Bullet color={theme.palette.rose.main} />
            <Typography>{item}</Typography>
          </ListItem>
        ))}
      </List>
    </SectionLayout>
  );
};

export default IngredientsSection;
