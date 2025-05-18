import Box from "@mui/material/Box";
import styles from "./App.styles";
import Divider from "@mui/material/Divider";

import imageOmelette from "./assets/images/image-omelette.jpeg";

import { PreparationTime } from "./components/PreparationTime/PreparationTime";
import { IngredientsSection } from "./components/IngredientsSection/IngredientsSection";
import { InstructionsSection } from "./components/InstructionsSection/InstructionsSection";
import { NutritionSection } from "./components/NutritionSection/NutuitionSection";
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
          <IngredientsSection />
          <Divider aria-hidden="true" flexItem sx={styles.divider} />
          <InstructionsSection />
          <Divider aria-hidden="true" flexItem sx={styles.divider} />
          <NutritionSection />
        </Box>
      </Box>
    </>
  );
}

export default App;
