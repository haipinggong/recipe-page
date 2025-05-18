import type { SxProps, Theme } from "@mui/material";

interface StyleProps {
  [key: string]: SxProps<Theme>;
}

export const styles: StyleProps = {
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
