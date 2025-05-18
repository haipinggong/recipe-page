import type { SxProps, Theme } from "@mui/material";
import { visuallyHidden } from "@mui/utils";
interface StyleProps {
  [key: string]: SxProps<Theme>;
}

export const styles: StyleProps = {
  tableHead: {
    ...visuallyHidden,
  },
};

export default styles;
