"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import tailwindConfig from "../../tailwind.config";

interface CustomColors {
  light?: {
    primary?: {
      DEFAULT: any;
      [key: string]: string;
    };
    secondary?: {
      DEFAULT: string;
      [key: string]: string;
    };
  };
  dark?: {
    primary?: {
      DEFAULT: any;
      [key: string]: string;
    };
    secondary?: {
      DEFAULT: any;
      [key: string]: string;
    };
  };
}

const colors = (tailwindConfig.theme?.extend?.colors || {}) as CustomColors;

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const mode: any = "light";

export const theme = createTheme({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: colors.light?.primary?.DEFAULT,
          },
          secondary: {
            main: colors.light?.secondary?.DEFAULT,
          },
        }
      : {
          primary: {
            main: colors.dark?.primary?.DEFAULT,
          },
          secondary: {
            main: colors.dark?.secondary?.DEFAULT,
          },
        }),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});
