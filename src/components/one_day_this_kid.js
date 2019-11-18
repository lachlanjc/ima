import React from 'react'
import styled from '@emotion/styled'
import { Box, Text, Image } from 'rebass'
import { useColorMode } from 'theme-ui'
import theme from '../gatsby-plugin-theme-ui/index'

theme.fonts = {
  heading: '"Roobert", system-ui, sans-serif',
  body: '"Tiempos Text Web", system-ui, sans-serif'
}

export const Banner = props => (
  <Box
    sx={{
      color: 'white',
      mb: [4, 5]
    }}
  >
    <Box
      {...props}
      sx={{
        h1: {
          fontFamily: theme.fonts.heading,
          fontSize: [5, 6, 7, 8],
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          lineHeight: 'tight',
          color: 'orange',
          mt: 0,
          mb: [3, 4],
          'span:nth-of-type(2)': {
            textTransform: 'uppercase',
            bg: 'blue',
            color: 'white',
            borderRadius: 'extra',
            py: 1,
            px: 2,
            width: 'min-content',
            fontWeight: 'bold',
            fontSize: [3, 4, 5],
            my: [2, 3],
            ml: [3, 4],
            transform: 'rotate(-6deg)'
          },
          'span span': {
            borderBottom: '8px double currentColor'
          }
        },
        '@supports (-webkit-initial-letter: 2)': {
          'h1:first-letter': {
            WebkitInitialLetter: '2'
          }
        },
        h2: {
          color: 'secondary',
          fontSize: 1,
          fontWeight: 'body',
          letterSpacing: '.04em',
          lineHeight: 'body',
          textAlign: 'center',
          textTransform: 'uppercase',
          'a:hover,a:focus': {
            textDecoration: 'none'
          }
        }
      }}
    />
  </Box>
)

export const Container = ({ wide, ...props }) => (
  <Box
    {...props}
    sx={{
      maxWidth: '40rem',
      mx: 'auto',
      fontFamily: theme.fonts.body,
      h2: {
        fontSize: [3, 4, 5],
        mt: [4, 5],
        mb: [2, 3]
      },
      h3: {
        fontSize: [2, 3, 4],
        mt: [3, 4],
        mb: [2, 3]
      },
      p: {
        lineHeight: '1.8',
        mb: [2, 3, 4]
      },
      img: {
        borderRadius: 'extra',
        transform: 'scale(1)',
        transition: 'transform .25s ease',
        ':hover': {
          transform: 'scale(1.1)'
        }
      },
      '@supports (-webkit-initial-letter: 2)': {
        'section:first-letter': {
          WebkitInitialLetter: '3',
          fontWeight: 'bold',
          color: 'orange',
          mr: 2
        }
      },
      ...props.sx
    }}
  />
)

export const Callout = props => (
  <Box
    {...props}
    sx={{
      bg: 'elevated',
      px: [3, 4],
      py: [2, 3, 4],
      overflow: 'hidden',
      borderRadius: 'extra',
      boxShadow: 'sheet',
      fontSize: [2, 3],
      mb: [4, 5],
      ...props.sx
    }}
  />
)

export const Troye = props => (
  <Callout
    {...props}
    sx={{
      py: 0,
      px: 0,
      display: 'flex',
      alignItems: 'center',
      flexDirection: ['column', null, 'row'],
      mx: [null, -3, -5],
      p: {
        flex: '1 1 auto',
        fontFamily: 'heading',
        color: 'secondary',
        lineHeight: '1.5',
        fontSize: [1, 2],
        py: [3, 4],
        px: [2, 3, 4]
      },
      video: {
        flexShrink: 'none',
        borderRadius: 'extra',
        minWidth: 256,
        height: 256,
        bg: 'muted'
      }
    }}
  />
)

export const Citations = props => (
  <Box
    {...props}
    sx={{
      bg: 'sunken',
      px: [3, 4],
      py: [2, 3, 4],
      mt: [4, 5],
      borderRadius: 'extra',
      fontSize: 0,
      h2: {
        mt: 0,
        color: 'secondary',
        fontSize: 1,
        fontWeight: 'body',
        letterSpacing: '.04em',
        lineHeight: 'body',
        textTransform: 'uppercase',
        'a:hover,a:focus': {
          textDecoration: 'none'
        }
      },
      ul: {
        listStyle: 'none',
        pl: 0,
        mt: 0
      },
      li: {
        mt: 2,
        fontFamily: theme.fonts.heading,
        color: 'secondary',
        pl: '1.75rem',
        textIndent: '-1.75rem',
        a: {
          color: 'inherit',
          textDecoration: 'underline',
          textDecorationStyle: 'initial',
          whiteSpace: [null, null, 'nowrap']
        }
      }
    }}
  />
)

const Caption = styled(Text)`
  display: block;
  font-size: ${theme.fontSizes[0]}px;
  font-family: ${theme.fonts.heading};
  line-height: 1.25;
  padding: ${theme.space[2]}px ${theme.space[3]}px;
  position: absolute;
  bottom: 0;
  border-radius: 0 0 ${theme.radii.extra}px ${theme.radii.extra}px;
  width: 100%;
  max-width: 100%;
  z-index: 0;
  ${props =>
    props.colorMode === 'dark'
      ? `
          background-color: rgba(0, 0, 0, 0.875);
          color: ${theme.colors.white};
          @supports (-webkit-backdrop-filter: none) or
            (backdrop-filter: none) {
            background-color: rgba(0, 0, 0, 0.75);
            -webkit-backdrop-filter: saturate(180%) blur(16px);
          }
        `
      : `
          background-color: rgba(255, 255, 255, 0.98);
          color: ${theme.colors.black};
          @supports (-webkit-backdrop-filter: none) or
            (backdrop-filter: none) {
            background-color: rgba(255, 255, 255, 0.75);
            -webkit-backdrop-filter: saturate(180%) blur(20px);
          }
        `};
  @media (prefers-reduced-transparency: reduce) {
    -webkit-backdrop-filter: auto !important;
  }
`

export const Photo = ({ src, alt, showAlt = false, ...props }) => {
  const [colorMode] = useColorMode()
  return (
    <Box
      {...props}
      variant="sheet"
      sx={{
        p: 0,
        height: ['18rem', '20rem', '24rem'],
        minHeight: ['18rem', '24rem', '28rem'],
        position: 'relative',
        overflow: 'hidden',
        maxWidth: '100%',
        mb: [3, 4],
        ...props.sx
      }}
    >
      <Image
        src={src}
        alt={alt}
        loading="lazy"
        sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      {showAlt && <Caption colorMode={colorMode} children={alt} />}
    </Box>
  )
}