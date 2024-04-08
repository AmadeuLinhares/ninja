import { createTheme } from '@mui/material'

import tokens from './tokens'
export const theme = () => {
  return createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          // Apply styles to all variants
          root: {
            borderRadius: tokens.RADII.small,
            textTransform: `none`,
          },
          // Specific styles for the "contained" variant
          /**
           * Creating this styles just to show how we can change the default
           * theme inside MUI using our themes tokens
           */
          contained: {
            backgroundColor: tokens.colors.blue.BLUE_500,
            color: tokens.colors.grey.WHITE,
            '&:hover': {
              backgroundColor: tokens.colors.blue.BLUE_500,
            },
            width: `100%`,
            padding: tokens.SPACINGS.spacing12,
            fontSize: tokens.FONT_SIZE.SM,
            textTransform: `capitalize`,
          },
          outlined: {
            backgroundColor: tokens.colors.grey.WHITE,
            color: tokens.colors.grey.GRAY_700,
            '&:hover': {
              backgroundColor: tokens.colors.grey.WHITE,
            },
            width: `100%`,
            padding: tokens.SPACINGS.spacing12,
            fontSize: tokens.FONT_SIZE.SM,
            textTransform: `capitalize`,
          },
          text: {
            backgroundColor: tokens.colors.grey.WHITE,
            color: tokens.colors.grey.GRAY_700,
            '&:hover': {
              backgroundColor: tokens.colors.grey.WHITE,
            },
            width: `100%`,
            padding: tokens.SPACINGS.spacing12,
            fontSize: tokens.FONT_SIZE.SM,
            textTransform: `capitalize`,
          },
        },
      },
    },
    palette: {
      primary: {
        main: tokens.colors.grey.GRAY_100,
        '200': tokens.colors.grey.GRAY_200,
        '300': tokens.colors.grey.GRAY_300,
        '400': tokens.colors.grey.GRAY_400,
        '500': tokens.colors.grey.GRAY_500,
        '600': tokens.colors.grey.GRAY_600,
      },
      error: {
        main: tokens.colors.red.RED_DARK,
      },
      success: {
        main: tokens.colors.green.GREEN_500,
      },
    },
  })
}
