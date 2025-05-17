import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "./App.styles";
import imageOmelette from "./assets/images/image-omelette.jpeg";
import recipe from "./data/recipe.json";
import { RecipeSection } from "./components/RecipeSection/RecipeSection";

function App() {
  return (
    <>
      <Box component="main" sx={styles.main}>
        <Box component="img" src={imageOmelette} alt="Omelette" />
        <Box sx={styles.textContent} component="section">
          <Typography variant="h1">{recipe.title}</Typography>
          <Typography>{recipe.subTitle}</Typography>
        </Box>
        <RecipeSection title="Ingredients" content="test" />
        <RecipeSection title="Instructions" content="test" />
        <RecipeSection title="Nutrition" content="test" />
      </Box>
    </>
  );
}

export default App;
