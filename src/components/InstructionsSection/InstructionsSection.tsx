import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Typography } from "@mui/material";
import styles from "./InstructionsSection.styles";
import { SectionLayout } from "../SectionLayout/SectionLayout";
import { LabeledDescription } from "../LabeledDescription/LabeledDescription";
import recipe from "../../data/recipe.json";

export const InstructionsSection = () => {
  return (
    <SectionLayout>
      <Typography variant="h2">Instructions</Typography>
      <List disablePadding sx={styles.descriptionItemList}>
        {recipe.instructions.map((item) => (
          <ListItem key={item.label} disablePadding sx={styles.descriptionItem}>
            <LabeledDescription {...item} />
          </ListItem>
        ))}
      </List>
    </SectionLayout>
  );
};

export default InstructionsSection;
