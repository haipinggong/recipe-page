import type { SxProps, Theme } from "@mui/material";

interface StyleProps {
  [key: string]: SxProps<Theme>;
}

export const styles: StyleProps = {
  label: (theme) => ({
    fontWeight: theme.typography.fontWeightBold,
  }),
};

export default styles;
