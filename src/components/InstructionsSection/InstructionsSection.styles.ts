import type { SxProps, Theme } from "@mui/material";

interface StyleProps {
  [key: string]: SxProps<Theme>;
}

export const styles: StyleProps = {
  descriptionItemList: {
    display: "flex",
    flexDirection: "column",
    gap: 1,
    listStyle: "decimal",
    paddingLeft: 3,
  },
  descriptionItem: (theme) => ({
    display: "list-item",
    paddingLeft: 2,
    "&::marker": {
      color: theme.palette.rose.main,
      fontWeight: theme.typography.fontWeightBold,
    },
  }),
};

export default styles;
