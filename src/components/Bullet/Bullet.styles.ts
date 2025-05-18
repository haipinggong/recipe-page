import type { SxProps, Theme } from "@mui/material";

interface StyleProps {
  [key: string]: SxProps<Theme>;
}

export const styles: StyleProps = {
  bullet: {
    marginRight: 1,
  },
};

export default styles;
