import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "./App.styles";
import imageOmelette from "./assets/images/image-omelette.jpeg";

function App() {
  return (
    <>
      <Box component="main" sx={styles.main}>
        <Box component="img" src={imageOmelette} alt="Omelette" />
        <Box sx={styles.textContent}>
          <Typography variant="h1">Simple Omelette Recipe</Typography>
        </Box>
      </Box>
    </>
  );
}

export default App;
