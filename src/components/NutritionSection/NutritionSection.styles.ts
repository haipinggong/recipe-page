import type { SxProps, Theme } from "@mui/material";
import { visuallyHidden } from "@mui/utils";
interface StyleProps {
  [key: string]: SxProps<Theme>;
}

export const styles: StyleProps = {
  table: (theme) => ({
    borderColor: theme.palette.stone.light,
  }),
  tableHead: {
    ...visuallyHidden,
  },
  row: {
    "&:last-child td, &:last-child th": { border: 0 },
    "&:first-of-type td, &:first-of-type th": { paddingTop: 0 },
    "&:last-of-type td, &:last-of-type th": { paddingBottom: 0 },
  },
  nameTableCell: {
    paddingBlock: 1.5,
    paddingLeft: 4,
    paddingRight: 1,
  },
  valueTableCell: {
    paddingBlock: 1.5,
    paddingLeft: 1,
    paddingRight: 4,
  },
  value: (theme) => ({
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.brown.main,
  }),
};

export default styles;
