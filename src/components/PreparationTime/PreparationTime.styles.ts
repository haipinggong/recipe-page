import type { SxProps, Theme } from "@mui/material";

interface StyleProps {
  [key: string]: SxProps<Theme>;
}

export const styles: StyleProps = {
  main: (theme) => ({
    display: "flex",
    flexDirection: "column",
    gap: 2,
    padding: 3,
    backgroundColor: theme.palette.rose.light,
    borderRadius: "12px",
  }),
  title: (theme) => ({
    color: theme.palette.rose.main,
  }),
  descriptionItemList: {
    display: "flex",
    flexDirection: "column",
    gap: 1,
  },
  descriptionItem: {
    paddingLeft: 1,
    gap: 2,
  },
};

export default styles;
