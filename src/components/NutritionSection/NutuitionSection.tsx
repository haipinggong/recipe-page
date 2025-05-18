import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";

import styles from "./NutritionSection.styles";
import { SectionLayout } from "../SectionLayout/SectionLayout";
import recipe from "../../data/recipe.json";
export const NutritionSection = () => {
  return (
    <SectionLayout>
      <Typography variant="h2">Nutrition</Typography>
      <Typography>{recipe.nutrition.subTitle}</Typography>
      <Table aria-label="nutrition table">
        <TableHead sx={styles.tableHead}>
          <TableRow>
            <TableCell>Nutuition</TableCell>
            <TableCell>Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {recipe.nutrition.table.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </SectionLayout>
  );
};

export default NutritionSection;
