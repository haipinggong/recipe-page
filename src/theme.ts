import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface PaletteColor {
    lighter?: string;
  }

  interface SimplePaletteColorOptions {
    lighter?: string;
  }
  interface Palette {
    stone: Palette["primary"];
    rose: Palette["primary"];
    brown: Palette["primary"];
  }

  interface PaletteOptions {
    stone?: PaletteOptions["primary"];
    rose?: PaletteOptions["primary"];
    brown?: PaletteOptions["primary"];
  }

  interface TypographyVariantsOptions {
    fontWeightSemiBold: number;
  }

  interface TypographyVariants {
    fontWeightSemiBold: number;
  }
}

let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 768,
      lg: 1440,
      xl: 1536,
    },
  },
  palette: {
    stone: {
      dark: "#312E2C",
      main: "#5F564D",
      light: "#E3DDD7",
      lighter: "#F3E5D7",
    },
    rose: {
      main: "#7A284E",
      light: "#FFF7FB",
    },
    brown: {
      main: "#854632",
    },
  },
  typography: {
    fontFamily: "Young Serif, Outfit, sans-serif",
    fontWeightSemiBold: 600,
  },
});

theme = createTheme(theme, {
  palette: {
    text: {
      primary: theme.palette.stone.main,
    },
    background: {
      default: theme.palette.stone.lighter,
      paper: theme.palette.common.white,
    },
  },
  typography: {
    h1: {
      fontSize: "2.25rem",
      fontWeight: theme.typography.fontWeightRegular,
      lineHeight: 1,
      letterSpacing: 0,
      color: theme.palette.stone.dark,
      [theme.breakpoints.up("sm")]: {
        fontSize: "2.5rem",
      },
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: theme.typography.fontWeightRegular,
      lineHeight: 1,
      letterSpacing: 0,
      color: theme.palette.brown.main,
    },
    h3: {
      fontSize: "1.25rem",
      fontFamily: "Outfit, sans-serif",
      fontWeight: theme.typography.fontWeightSemiBold,
      lineHeight: 1,
      letterSpacing: 0,
    },
    body1: {
      fontSize: "1rem",
      fontFamily: "Outfit, sans-serif",
      fontWeight: theme.typography.fontWeightRegular,
      lineHeight: 1.5,
      letterSpacing: 0,
    },
  },
});

export default theme;
