import base from '@theme-ui/preset-base'
import nightOwl from '@theme-ui/prism/presets/night-owl.json'
import { merge } from 'lodash'

export const palette = {
  darker: '#121217',
  dark: '#17171d',
  darkless: '#252429',
  black: '#1f2d3d',
  steel: '#273444',
  slate: '#3c4858',
  muted: '#8492a6',
  smoke: '#e0e6ed',
  snow: '#f9fafc',
  white: '#ffffff',
  red: '#ec3750',
  orange: '#ff8c37',
  yellow: '#f1c40f',
  green: '#33d6a6',
  cyan: '#5bc0de',
  blue: '#338eda',
  violet: '#57068c',
  violetBright: '#8900e1'
}

export default merge(base, {
  fonts: {
    body: 'system-ui, Roboto, sans-serif',
    heading: 'system-ui, Roboto, sans-serif',
    monospace: '"SF Mono", Menlo, monospace'
  },
  fontSizes: [14, 18, 24, 28, 36, 48, 64, 72, 96, 128],
  fontWeights: {
    heading: 900,
    body: 400
  },
  sizes: {
    container: 768,
    xl: 1024
  },
  radii: {
    base: 6,
    extra: 9,
    circle: 9999
  },
  shadows: {
    card: '0 4px 8px rgba(0, 0, 0, 0.125)',
    sheet: '0 8px 32px rgba(0, 0, 0, 0.0625)'
  },
  initialColorMode: 'light',
  useColorSchemeMediaQuery: true,
  colors: {
    ...palette,
    text: palette.black,
    background: palette.white,
    elevated: palette.white,
    sunken: palette.snow,
    primary: palette.violetBright,
    secondary: palette.muted,
    muted: palette.smoke,
    accent: palette.cyan,
    modes: {
      dark: {
        text: palette.white,
        background: '#000',
        elevated: palette.darkless,
        sunken: palette.darker,
        primary: '#c975ff',
        secondary: palette.muted,
        accent: palette.cyan,
        muted: palette.darkless
      }
    }
  },
  styles: {
    hr: {
      border: 0,
      height: 4,
      bg: 'muted',
      borderRadius: 2,
      my: [3, 4]
    },
    pre: {
      fontFamily: 'monospace',
      p: 3,
      bg: 'muted',
      borderRadius: 6,
      ...nightOwl
    },
    inlineCode: {
      fontFamily: 'monospace',
      px: 1,
      bg: 'muted',
      borderRadius: 3
    },
    blockquote: {
      borderRadius: 'base',
      borderLeft: '4px solid',
      borderLeftColor: 'muted',
      bg: 'sunken',
      ml: 0,
      pl: 3,
      py: 2
    },
    a: {
      color: 'primary'
    },
    ul: {
      '&.contains-task-list': {
        listStyle: 'none',
        pl: 3
      }
    },
    li: {
      '&.task-list-item': {
        my: 1,
        input: {
          mr: 2
        }
      }
    },
    navitem: {
      display: 'inline-block',
      color: 'inherit',
      textDecoration: 'none',
      fontWeight: 'bold',
      ':hover,:focus': {
        color: 'primary'
      }
    }
  }
})
