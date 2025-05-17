import type { SxProps, Theme } from "@mui/material";

interface StyleProps {
  [key: string]: SxProps<Theme>;
}

export const styles: StyleProps = {
  main: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },
};

export default styles;
