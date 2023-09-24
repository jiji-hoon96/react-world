import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  font: {
    size: {
      h1: '3.5rem',
      h2: '2rem',
      h3: '1.5rem',
      h4: '1.2rem',
      highlight: '1.1rem',
      little: '0.8rem',
    },
    weight: {
      bold: '700',
      semiBold: '600',
      highlight: '500',
      semiThin: '300',
      extraThin: '100',
    },
    letterSpacing: {
      narrow: '-1.5px',
      wide: '1.5px',
    },
  },
  colors: {
    primary: '#5CB85C',
    white: '#FFF',
    gray: '#DDD',
    gray400: '#687077',
    black: '#333',
    danger: 'red',
  },
  space: {
    biggest: '36px',
    largest: '24px',
    large: '18px',
    medium: '13px',
    small: '8px',
    smaller: '6px',
    tinny: '3px',
  },
  shadow: {
    mainShadow: '0px 1px 3px rgba(0, 0, 0, 0.3)',
  },
});
