import Typography from "@mui/material/Typography";

import styles from "./LabeledDescription.styles";

export interface Props {
  label: string;
  description: string;
}

export const LabeledDescription = ({ label, description }: Props) => {
  return (
    <Typography>
      <Typography component="span" sx={styles.label}>
        {`${label}: `}
      </Typography>
      {description}
    </Typography>
  );
};

export default LabeledDescription;
