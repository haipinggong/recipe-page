import Box from "@mui/material/Box";
import styles from "./App.styles";
import Divider from "@mui/material/Divider";

import imageOmelette from "./assets/images/image-omelette.jpeg";

import { RecipeSection } from "./components/RecipeSection/RecipeSection";
import { PreparationTime } from "./components/PreparationTime/PreparationTime";
import { Title } from "./components/Title/Title";

import recipe from "./data/recipe.json";

function App() {
  return (
    <>
      <Box component="main" sx={styles.main}>
        <Box component="img" src={imageOmelette} alt="Omelette" />
        <Box sx={styles.textContent}>
          <Title title={recipe.title} subTitle={recipe.subTitle} />
          <PreparationTime />
          <RecipeSection title="Ingredients" content="test" />
          <Divider aria-hidden="true" flexItem sx={styles.divider} />
          <RecipeSection title="Instructions" content="test" />
          <Divider aria-hidden="true" flexItem sx={styles.divider} />
          <RecipeSection title="Nutrition" content="test" />
        </Box>
      </Box>
    </>
  );
}

export default App;
