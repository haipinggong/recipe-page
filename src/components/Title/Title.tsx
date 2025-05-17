import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import styles from "./Title.styles";

export interface Props {
  title: string;
  subTitle: string;
}

export const Title = ({ title, subTitle }: Props) => {
  return (
    <Box component="section" sx={styles.title}>
      <Typography variant="h1">{title}</Typography>
      <Typography>{subTitle}</Typography>
    </Box>
  );
};

export default Title;
