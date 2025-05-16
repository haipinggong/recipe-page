import type { SxProps, Theme } from "@mui/material";

interface StyleProps {
  [key: string]: SxProps<Theme>;
}

export const styles: StyleProps = {
  main: (theme) => ({
    display: "flex",
    flexDirection: "column",
    maxWidth: "23.4375rem",
    backgroundColor: theme.palette.background.paper,
  }),
  textContent: (theme) => ({
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(5, 4, 5, 4),
    gap: 4,
  }),
};

export default styles;
