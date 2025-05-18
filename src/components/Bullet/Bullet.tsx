import Typography from "@mui/material/Typography";
import styles from "./Bullet.styles";

export interface Props {
  color: string;
}

export const Bullet = ({ color }: Props) => {
  return <Typography sx={{ ...styles.bullet, color }}>•</Typography>;
};

export default Bullet;
