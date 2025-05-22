import type { SxProps, Theme } from "@mui/material";

interface StyleProps {
  [key: string]: SxProps<Theme>;
}

export const styles: StyleProps = {
  main: (theme) => ({
    padding: 0,
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(16, 6),
    },
  }),
  card: (theme) => ({
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.up("sm")]: {
      maxWidth: "38.5rem",
      borderRadius: 3,
      padding: 5,
      gap: 5,
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "46rem",
    },
  }),
  image: (theme) => ({
    [theme.breakpoints.up("sm")]: {
      borderRadius: 1.5,
      aspectRatio: "2.19 / 1",
    },
  }),
  textContent: (theme) => ({
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(5, 4, 5, 4),
    gap: 4,
    [theme.breakpoints.up("sm")]: {
      padding: 0,
    },
  }),
  divider: (theme) => ({
    color: theme.palette.stone.light,
  }),
};

export default styles;
